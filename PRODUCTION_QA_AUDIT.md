# Production QA Audit

Audit date: 2026-08-15  
Baseline commit: `8880fc084446c49d7382c4b2048ff7eb6354903f`  
Production origin: `https://prin-main.vercel.app`

## BASELINE

- Existing project: multi-route academic portfolio using React 19.2, TypeScript 5.9, Vinext 1.0 beta, Vite 8, Nitro and npm (`package-lock.json`).
- Routes discovered from source and the Vinext build: `/`, `/research`, `/leadership`, `/academic`, `/sources`.
- Deployment configuration: Vercel uses `npx vite build` with `.output`; `.openai/hosting.json` exists for Sites-compatible packaging but contains no project ID or storage bindings.
- `npm run build`: passed. Vinext reported all five routes as `Unknown` because its current static analysis cannot classify them; no route failed.
- `npx tsc --noEmit --incremental false`: passed with no errors.
- `npm run lint`: passed with one warning for a custom Google Fonts stylesheet in `app/layout.tsx`.
- `npm test`: passed 4/4 route-render tests; `/sources` and production SEO endpoints were not covered.
- Working tree was clean before this audit file was created.
- Baseline browser console: two duplicate Vite development-overlay errors (`Cannot read properties of undefined (reading 'import')`) occurred after running a production build while an existing Vinext dev server was active. Production build output itself was successful; final QA must retest on a fresh production-like server.
- Baseline asset inventory: `public/images/portrait.jpg` (682×1024, 239,201 bytes), `public/og.png` (1672×941, 1,058,284 bytes), and `public/favicon.svg`. `public/images/mlnc-campus.jpg` was referenced but absent.

## SEO

- All five public pages already had unique, human-readable titles and descriptions.
- No page emitted a canonical URL.
- `/robots.txt` and `/sitemap.xml` returned 404 HTML.
- Social image metadata resolved to `http://localhost:3000/og.png` because `metadataBase` was hard-coded to localhost.
- `og:url` and `og:locale` were absent; the inherited `og:type` was `profile` on all routes.
- Page-specific Open Graph and X titles/descriptions were absent; subpages inherited the home values.

## METADATA

Baseline route matrix:

| Route | Status | Unique title | Description | Canonical | OG URL | Absolute OG image | H1 |
| --- | ---: | --- | --- | --- | --- | --- | ---: |
| `/` | 200 | Pass | Pass | Missing | Missing | Fail (localhost) | 1 |
| `/research` | 200 | Pass | Pass | Missing | Missing | Fail (localhost) | 1 |
| `/leadership` | 200 | Pass | Missing | Missing | Missing | Fail (localhost) | 1 |
| `/academic` | 200 | Pass | Pass | Missing | Missing | Fail (localhost) | 1 |
| `/sources` | 200 | Pass | Pass | Missing | Missing | Fail (localhost) | 1 |

## SOCIAL SHARING

- The existing OG image exists, loads with HTTP 200 and matches the ivory, charcoal, maroon and brass visual language.
- Metadata declared the asset's actual 1672×941 dimensions and useful alt text.
- The blocking issue was the localhost absolute URL, not the image design.
- No X/Twitter account names were invented; `summary_large_image` already existed.

## STRUCTURED DATA

- One valid `Person` JSON-LD entity was emitted on every page.
- Verified roles, institutional hierarchy, address and areas of knowledge were present.
- Stable `@id`, public `url` and absolute portrait `image` were missing.
- Schema values duplicated profile data rather than using a shared site/profile configuration.
- No `ScholarlyArticle` schema existed. It must be generated only for publications with complete, verified records.

## RESPONSIVENESS

- Automated viewport checks covered the requested homepage and research widths (320, 360, 375, 390, 430, 600, 768, 820, 1024, 1280, 1366, 1440, 1600 and 1920), plus representative widths for the other routes.
- Homepage and leadership `vision-intro-copy` overflowed by roughly 55–79px at 320–430px; global `overflow-x: clip` concealed the layout defect.
- Research, academic and sources layouts did not show meaningful horizontal overflow in the automated baseline check; research measured a marginal 3px at the smallest emulated width.
- The publication layout already reflows to a two-column mobile presentation and wraps long scientific titles.
- Mobile-menu open state could survive a resize above the mobile breakpoint, leaving the body scroll-locked.

## ACCESSIBILITY

- Existing strengths: one H1 per page; semantic `main`; working skip-link target; native navigation controls; `aria-current`; Escape handling; meaningful portrait alt text; decorative SVGs hidden; reduced-motion CSS.
- `/sources` sections referenced missing `aria-labelledby` IDs and skipped from H1 to article H3.
- The image fallback remained exposed as a second `role="img"` even when the real image loaded.
- Mobile navigation lacked focus placement/restoration and background focus containment.
- The brass focus outline measured below 3:1 on ivory; several small brass/muted text combinations also failed normal-text contrast.
- Several DOI, source and footer links had small touch targets.

## PERFORMANCE

- Baseline client output: main framework chunks approximately 177 kB and 190 kB (about 52 kB and 60 kB gzip); compiled CSS approximately 53 kB (10.5 kB gzip).
- Google Fonts were requested twice: once through CSS `@import` and once through a layout `<link>`.
- Four Fontsource packages were installed but unused.
- The portrait lacked intrinsic width/height, loading, decoding and fetch-priority attributes.
- A missing campus image caused an avoidable failed request before falling back.
- Hero name/portrait entrance animation delays likely defer the LCP candidate by close to one second.
- Each `Reveal` instance created its own `IntersectionObserver`; the navigation updated two React states on every scroll event.
- Lighthouse baseline was attempted but did not complete in the first local runner; no score is recorded until a successful measurement is available.

## LINKS

- Internal navigation routes and main CTAs resolved in source inspection.
- Several publication URLs were found to target unrelated or stale publisher records. Corrections require verification against primary journal indexes before editing; publication titles, authors and bibliographic facts must remain unchanged.
- Two source records pointed to the MLNC homepage rather than claim-specific pages.
- The ₹213 crore source was labelled as an official corporate release but linked to a secondary news report; an official NBCC disclosure is preferred if verified.
- External links open safely with `noopener noreferrer`; accessible names did not consistently announce that a new tab opens.

## CONSOLE

- No deliberate `console.log` or `console.debug` statements were found in tracked production source.
- Baseline browser logging captured the Vinext/Vite development overlay issue described under BASELINE.
- Final production-like route checks must show no uncaught error, hydration warning, missing-key warning or failed asset request.

## 404

- Invalid routes returned a real HTTP 404 and automatic `noindex`, but used the generic framework 404 interface.
- No `app/not-found.tsx` existed.
- Baseline 404 output emitted duplicate title elements.

## ANALYTICS

- No analytics dependency, component or competing tracker existed.
- Vercel Web Analytics integration and any dashboard-side enablement remained outstanding.

## REPOSITORY

- `node_modules`, `.next`, `.output`, `dist`, `.wrangler`, logs, environment files and TypeScript build info were ignored.
- No dependency directory or generated build output was tracked.
- One npm lockfile was present; no competing lockfile existed.
- `dev-server.log` was present locally but ignored.
- Initial secret-name scan returned false positives such as “Member Secretary”; no obvious tracked credential file was identified. Final targeted scanning is required.
- `dist/server/BUILD_ID` existed locally as stale ignored output and is not a tracked artifact.

## DOCUMENTATION

- The baseline README documented four routes only and omitted `/sources`.
- It lacked production configuration, deployment, SEO, analytics, content-update, domain-change, Search Console, backup and handoff instructions.
- Dedicated content, recovery and client handoff documents did not exist.

## FINAL QA

Pending implementation. This section will be updated with the final route/metadata matrix, build/lint/type/test results, browser checks, Lighthouse results if measurable, remaining warnings and owner actions.
