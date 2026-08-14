import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  return fetch(`http://localhost:3000${pathname}`, { headers: { accept: "text/html" } });
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
