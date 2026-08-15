import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test, { after, before } from "node:test";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const nitroEntry = join(projectRoot, ".output", "server", "index.mjs");
const vinextEntry = join(projectRoot, "dist", "server", "index.js");
const vinextPagesEntry = join(projectRoot, "dist", "server", "entry.js");
const vinextCli = join(projectRoot, "node_modules", "vinext", "dist", "cli.js");

const publicRoutes = [
  { pathname: "/", h1: "Yogeshwar Sharma" },
  { pathname: "/research", h1: "Research & Scholarship" },
  { pathname: "/leadership", h1: "Leadership grounded in education." },
  { pathname: "/academic", h1: "Academic Journey" },
  { pathname: "/sources", h1: "Sources & Verification" },
];

const forbiddenHtmlResidue = [
  [/(?:https?:\/\/)(?:localhost|127\.0\.0\.1)(?::\d+)?/i, "localhost URL"],
  [/@vite\/client|__vite_ping|vite-hmr/i, "Vite development client"],
  [/codex-preview/i, "Codex preview marker"],
  [/your site is taking shape/i, "starter placeholder copy"],
  [/react-loading-skeleton/i, "loading skeleton placeholder"],
  [/lorem ipsum/i, "placeholder copy"],
  [/\b(?:TODO|FIXME)\b/i, "unfinished-work marker"],
  [/build error|cannot read properties of undefined \(reading ["']import["']\)/i, "development error overlay"],
];

let productionServer;
let productionOrigin;
let serverLog = "";

function appendServerLog(chunk) {
  serverLog += chunk.toString();
  if (serverLog.length > 24_000) serverLog = serverLog.slice(-24_000);
}

function serverDetails() {
  const output = serverLog.trim();
  return output ? `\nProduction server output:\n${output}` : "";
}

async function reserveFreePort() {
  const reservation = createServer();

  await new Promise((resolve, reject) => {
    reservation.once("error", reject);
    reservation.listen(0, "127.0.0.1", resolve);
  });

  const address = reservation.address();
  assert(address && typeof address === "object", "Could not allocate a QA port");
  const { port } = address;

  await new Promise((resolve, reject) => {
    reservation.close((error) => (error ? reject(error) : resolve()));
  });

  return port;
}

function productionCommand(port) {
  if (existsSync(nitroEntry)) {
    return { args: [nitroEntry], label: "Nitro production output" };
  }

  if ((existsSync(vinextEntry) || existsSync(vinextPagesEntry)) && existsSync(vinextCli)) {
    return {
      args: [vinextCli, "start", "--hostname", "127.0.0.1", "--port", String(port)],
      label: "Vinext production output",
    };
  }

  throw new Error(
    "No built Vinext/Nitro server was found. Run `npm run build` before this test.",
  );
}

function hasExited(child) {
  return child.exitCode !== null || child.signalCode !== null;
}

function waitForExit(child, timeoutMs) {
  if (hasExited(child)) return Promise.resolve(true);

  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      child.off("exit", onExit);
      resolve(false);
    }, timeoutMs);

    const onExit = () => {
      clearTimeout(timer);
      resolve(true);
    };

    child.once("exit", onExit);
  });
}

async function stopProductionServer() {
  if (!productionServer || hasExited(productionServer)) return;

  productionServer.kill("SIGTERM");
  if (await waitForExit(productionServer, 5_000)) return;

  productionServer.kill("SIGKILL");
  const stopped = await waitForExit(productionServer, 5_000);
  assert.equal(stopped, true, `Production server did not stop.${serverDetails()}`);
}

async function waitUntilReady(child, origin) {
  const deadline = Date.now() + 30_000;
  let lastError;

  while (Date.now() < deadline) {
    if (hasExited(child)) {
      throw new Error(
        `Production server exited before becoming ready (exit ${child.exitCode ?? child.signalCode}).${serverDetails()}`,
      );
    }

    try {
      const response = await fetch(`${origin}/`, {
        headers: { accept: "text/html" },
        redirect: "manual",
        signal: AbortSignal.timeout(1_500),
      });

      if (response.status === 200) {
        const html = await response.text();
        if (/<html\b/i.test(html)) return;
      }
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error(
    `Production server was not ready within 30 seconds${lastError ? `: ${lastError.message}` : "."}${serverDetails()}`,
  );
}

before(async () => {
  const port = await reserveFreePort();
  productionOrigin = `http://127.0.0.1:${port}`;
  const command = productionCommand(port);

  productionServer = spawn(process.execPath, command.args, {
    cwd: projectRoot,
    env: {
      ...process.env,
      NODE_ENV: "production",
      HOST: "127.0.0.1",
      PORT: String(port),
      NITRO_HOST: "127.0.0.1",
      NITRO_PORT: String(port),
    },
    windowsHide: true,
    shell: false,
    stdio: ["ignore", "pipe", "pipe"],
  });

  productionServer.stdout.on("data", appendServerLog);
  productionServer.stderr.on("data", appendServerLog);
  productionServer.on("error", appendServerLog);

  try {
    await waitUntilReady(productionServer, productionOrigin);
  } catch (error) {
    await stopProductionServer();
    throw new Error(`Could not start ${command.label}: ${error.message}`);
  }
});

after(async () => {
  await stopProductionServer();
});

async function request(pathname, accept = "text/html") {
  return fetch(`${productionOrigin}${pathname}`, {
    headers: { accept },
    redirect: "manual",
    signal: AbortSignal.timeout(10_000),
  });
}

function decodeEntities(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    if (code[0] === "#") {
      const radix = code[1]?.toLowerCase() === "x" ? 16 : 10;
      const digits = radix === 16 ? code.slice(2) : code.slice(1);
      const point = Number.parseInt(digits, radix);
      return Number.isFinite(point) ? String.fromCodePoint(point) : entity;
    }

    return named[code.toLowerCase()] ?? entity;
  });
}

function attribute(tag, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = tag.match(
    new RegExp(`(?:^|\\s)${escapedName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'=<>]+))`, "i"),
  );
  const value = match?.[1] ?? match?.[2] ?? match?.[3];
  return value === undefined ? undefined : decodeEntities(value);
}

function tags(html, tagName) {
  return html.match(new RegExp(`<${tagName}\\b[^>]*>`, "gi")) ?? [];
}

function metaValues(html, key) {
  const normalizedKey = key.toLowerCase();
  return tags(html, "meta")
    .filter((tag) => {
      const identifier = attribute(tag, "name") ?? attribute(tag, "property");
      return identifier?.toLowerCase() === normalizedKey;
    })
    .map((tag) => attribute(tag, "content"))
    .filter((value) => value !== undefined);
}

function singleMeta(html, key, pathname) {
  const values = metaValues(html, key);
  assert.equal(values.length, 1, `${pathname} must emit exactly one ${key} meta tag`);
  assert.ok(values[0].trim(), `${pathname} has an empty ${key} meta tag`);
  return values[0].trim();
}

function canonicalValues(html) {
  return tags(html, "link")
    .filter((tag) => (attribute(tag, "rel") ?? "").toLowerCase().split(/\s+/).includes("canonical"))
    .map((tag) => attribute(tag, "href"))
    .filter((value) => value !== undefined);
}

function elementTexts(html, tagName) {
  const expression = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)</${tagName}>`, "gi");
  return [...html.matchAll(expression)].map((match) =>
    decodeEntities(match[1].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim(),
  );
}

function secureAbsoluteUrl(value, label) {
  let parsed;
  assert.doesNotThrow(() => {
    parsed = new URL(value);
  }, `${label} must be an absolute URL`);
  assert.equal(parsed.protocol, "https:", `${label} must use HTTPS`);
  assert.ok(parsed.hostname, `${label} must include a hostname`);
  assert.equal(parsed.username, "", `${label} must not include credentials`);
  assert.equal(parsed.password, "", `${label} must not include credentials`);
  return parsed;
}

function assertNoResidue(html, pathname) {
  for (const [pattern, label] of forbiddenHtmlResidue) {
    assert.doesNotMatch(html, pattern, `${pathname} contains ${label}`);
  }
}

test("all public routes render production HTML with complete, unique metadata", async (t) => {
  const titles = [];
  const descriptions = [];
  const canonicalOrigins = [];

  for (const route of publicRoutes) {
    await t.test(route.pathname, async () => {
      const response = await request(route.pathname);
      assert.equal(response.status, 200, `${route.pathname} did not return 200`);
      assert.match(
        response.headers.get("content-type") ?? "",
        /^text\/html\b/i,
        `${route.pathname} did not return HTML`,
      );

      const html = await response.text();
      assert.match(html, /<!doctype html>|<html\b/i, `${route.pathname} is not a complete HTML document`);
      const pageTitles = elementTexts(html, "title");
      assert.equal(pageTitles.length, 1, `${route.pathname} must emit exactly one title`);
      const [title] = pageTitles;
      assert.ok(title.length >= 20, `${route.pathname} title is too short`);
      assert.match(title, /Prof\. Yogeshwar Sharma/i, `${route.pathname} title is not fully branded`);
      titles.push(title);

      const description = singleMeta(html, "description", route.pathname);
      assert.ok(description.length >= 70, `${route.pathname} description is too short`);
      descriptions.push(description);

      const canonicals = canonicalValues(html);
      assert.equal(canonicals.length, 1, `${route.pathname} must emit exactly one canonical link`);
      const canonical = secureAbsoluteUrl(canonicals[0], `${route.pathname} canonical`);
      assert.equal(canonical.pathname, route.pathname, `${route.pathname} canonical path is incorrect`);
      assert.equal(canonical.search, "", `${route.pathname} canonical must not contain a query`);
      assert.equal(canonical.hash, "", `${route.pathname} canonical must not contain a fragment`);
      canonicalOrigins.push(canonical.origin);

      assert.equal(singleMeta(html, "og:type", route.pathname), "website");
      assert.equal(singleMeta(html, "og:title", route.pathname), title);
      assert.equal(singleMeta(html, "og:description", route.pathname), description);
      const openGraphUrl = secureAbsoluteUrl(
        singleMeta(html, "og:url", route.pathname),
        `${route.pathname} Open Graph URL`,
      );
      assert.equal(openGraphUrl.toString(), canonical.toString());
      assert.ok(singleMeta(html, "og:site_name", route.pathname));
      assert.match(singleMeta(html, "og:locale", route.pathname), /^en[_-]IN$/i);

      const openGraphImage = secureAbsoluteUrl(
        singleMeta(html, "og:image", route.pathname),
        `${route.pathname} Open Graph image`,
      );
      assert.equal(openGraphImage.pathname, "/og.png", `${route.pathname} uses an unexpected OG image`);
      assert.match(singleMeta(html, "og:image:width", route.pathname), /^\d+$/);
      assert.match(singleMeta(html, "og:image:height", route.pathname), /^\d+$/);
      assert.ok(singleMeta(html, "og:image:alt", route.pathname).length >= 20);

      assert.equal(singleMeta(html, "twitter:card", route.pathname), "summary_large_image");
      assert.equal(singleMeta(html, "twitter:title", route.pathname), title);
      assert.equal(singleMeta(html, "twitter:description", route.pathname), description);
      assert.equal(singleMeta(html, "twitter:image", route.pathname), openGraphImage.toString());

      const robots = metaValues(html, "robots").join(",");
      assert.doesNotMatch(robots, /\bnoindex\b/i, `${route.pathname} is unexpectedly noindexed`);

      const headings = elementTexts(html, "h1");
      assert.equal(headings.length, 1, `${route.pathname} must contain exactly one h1`);
      assert.equal(headings[0], route.h1, `${route.pathname} has the wrong h1`);
      assertNoResidue(html, route.pathname);
    });
  }

  if (titles.length === publicRoutes.length) {
    assert.equal(new Set(titles).size, publicRoutes.length, "Public page titles must be unique");
  }
  if (descriptions.length === publicRoutes.length) {
    assert.equal(
      new Set(descriptions).size,
      publicRoutes.length,
      "Public page descriptions must be unique",
    );
  }
  if (canonicalOrigins.length === publicRoutes.length) {
    assert.equal(
      new Set(canonicalOrigins).size,
      1,
      "Every canonical URL must use the same production origin",
    );
  }
});

test("robots.txt is crawlable and points to the HTTPS sitemap", async () => {
  const response = await request("/robots.txt", "text/plain");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/plain\b/i);
  const body = await response.text();

  assert.match(body, /^User-Agent:\s*\*/im);
  assert.match(body, /^Allow:\s*\/$/im);
  const sitemapMatch = body.match(/^Sitemap:\s*(\S+)\s*$/im);
  assert.ok(sitemapMatch, "robots.txt must declare a sitemap");
  const sitemap = secureAbsoluteUrl(sitemapMatch[1], "robots.txt sitemap");
  assert.equal(sitemap.pathname, "/sitemap.xml");

  const hostMatch = body.match(/^Host:\s*(\S+)\s*$/im);
  assert.ok(hostMatch, "robots.txt must declare the production host");
  const host = secureAbsoluteUrl(hostMatch[1], "robots.txt host");
  assert.equal(host.origin, sitemap.origin);
});

test("sitemap.xml lists exactly the five canonical public routes", async () => {
  const response = await request("/sitemap.xml", "application/xml");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^(?:application|text)\/xml\b/i);
  const xml = await response.text();
  assert.match(xml, /<urlset\b/i);

  const locations = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) =>
    secureAbsoluteUrl(decodeEntities(match[1].trim()), "sitemap location"),
  );
  assert.equal(locations.length, publicRoutes.length, "Sitemap must contain exactly five URLs");
  assert.equal(new Set(locations.map((url) => url.origin)).size, 1, "Sitemap URLs must share one origin");
  assert.deepEqual(
    new Set(locations.map((url) => url.pathname)),
    new Set(publicRoutes.map((route) => route.pathname)),
  );
  for (const location of locations) {
    assert.equal(location.search, "", "Sitemap URLs must not contain queries");
    assert.equal(location.hash, "", "Sitemap URLs must not contain fragments");
  }
});

test("favicon and social preview image are real production assets", async () => {
  const faviconResponse = await request("/favicon.svg", "image/svg+xml");
  assert.equal(faviconResponse.status, 200);
  assert.match(faviconResponse.headers.get("content-type") ?? "", /^image\/svg\+xml\b/i);
  const favicon = await faviconResponse.text();
  assert.match(favicon, /<svg\b/i);
  assert.ok(favicon.length > 100, "Favicon SVG is unexpectedly small");

  const imageResponse = await request("/og.png", "image/png");
  assert.equal(imageResponse.status, 200);
  assert.match(imageResponse.headers.get("content-type") ?? "", /^image\/png\b/i);
  const image = new Uint8Array(await imageResponse.arrayBuffer());
  assert.ok(image.byteLength > 10_000, "Open Graph image is unexpectedly small");
  assert.deepEqual(
    [...image.slice(0, 8)],
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    "Open Graph asset is not a valid PNG",
  );
});

test("an invalid route returns the branded 404 page with noindex", async () => {
  const response = await request("/__production-qa-route-that-does-not-exist__");
  assert.equal(response.status, 404, "Invalid route must return a real HTTP 404");
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assertNoResidue(html, "invalid route");

  const titles = elementTexts(html, "title");
  assert.equal(titles.length, 1, "404 page must emit exactly one title");
  assert.match(titles[0], /Page Not Found/i);
  assert.match(titles[0], /Prof\. Yogeshwar Sharma/i);

  const headings = elementTexts(html, "h1");
  assert.equal(headings.length, 1, "404 page must contain exactly one h1");
  assert.match(headings[0], /page has moved beyond this address/i);
  assert.match(html, /404\s*\/\s*PAGE NOT FOUND/i);
  assert.match(html, /class=["'][^"']*not-found-page/i, "Custom branded 404 layout is missing");
  assert.match(html, /Return Home/i, "404 page is missing a recovery link");
  assert.match(html, /Yogeshwar Sharma/i, "404 page is missing the site brand");

  const robots = metaValues(html, "robots").join(",");
  assert.match(robots, /\bnoindex\b/i, "404 page must emit a robots noindex directive");
});
