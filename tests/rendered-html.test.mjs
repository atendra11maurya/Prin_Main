import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function render(pathname) {
  const moduleUrl = new URL(workerUrl);
  moduleUrl.searchParams.set("test", `${pathname}-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(moduleUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

for (const [pathname, expected] of [
  ["/", "Yogeshwar"],
  ["/research", "Research &amp; Scholarship"],
  ["/leadership", "Leadership grounded in education"],
  ["/academic", "Academic Journey"],
]) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(expected, "i"));
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
  });
}
