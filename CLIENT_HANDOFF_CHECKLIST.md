# Client Handoff Checklist

Use this checklist with the owner at final delivery. Leave an item unchecked until it has been verified in the relevant account or on the final production deployment.

## Ownership and access

- [ ] GitHub repository ownership is confirmed with the client/owner. **Owner action**
- [ ] The intended production branch is confirmed. **Owner action**
- [ ] Required maintainers have appropriate GitHub access. **Owner action**
- [ ] Vercel project ownership and billing responsibility are confirmed. **Owner action**
- [ ] Domain registrar and DNS ownership are confirmed. **Owner action**
- [ ] Recovery email addresses and multi-factor authentication are current. **Owner action**
- [ ] No credentials or secret values are stored in the repository.

## Source and build

- [ ] `package-lock.json` is committed and npm is the only package manager in use.
- [ ] The deployment uses Node.js `>=22.13.0`.
- [ ] `npm ci` succeeds from a clean checkout.
- [ ] `npm run lint` passes.
- [ ] `npx tsc --noEmit --incremental false` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` passes without unresolved production warnings.
- [ ] Generated output and `node_modules/` remain untracked.

## Content approval

- [ ] “Prof. Yogeshwar Sharma” display name is approved.
- [ ] Current title and institutional affiliation are approved.
- [ ] Governance and historical-role wording are approved.
- [ ] ₹213 crore institutional framing is approved and source-linked.
- [ ] Contact email and any postal information are verified.
- [ ] Publication titles, authors, journal details, and links are verified.
- [ ] `/sources` records point to claim-specific primary sources where available.
- [ ] Portrait and other image usage permissions are confirmed. **Owner action**

## Production deployment

- [ ] GitHub integration points to the correct repository and branch. **Owner action**
- [ ] Vercel build command is `npx vite build`.
- [ ] Vercel output directory is `.output`.
- [ ] The latest approved commit is deployed to production. **Owner action**
- [ ] `/`, `/research`, `/leadership`, `/academic`, and `/sources` return HTTP 200.
- [ ] An invalid route returns the branded page with HTTP 404.
- [ ] No production page or metadata references `localhost`.
- [ ] HTTPS is active without certificate warnings.
- [ ] Production console and network checks show no unresolved errors.

## Domain

- [ ] Final custom domain has been selected and purchased. **Owner action; optional until chosen**
- [ ] Domain has been connected to the correct Vercel project. **Owner action**
- [ ] DNS records are correct and propagation is complete. **Owner action**
- [ ] The deployed `SITE_URL`, or the committed `productionSiteUrl` fallback in `data/site.ts`, uses the final HTTPS origin.
- [ ] A new production deployment was completed after the origin change.
- [ ] Canonical, Open Graph, X/Twitter, sitemap, robots, and JSON-LD URLs use the final origin.
- [ ] Preferred host behavior is consistent, including any `www` redirect. **Owner action**

## SEO and sharing

- [ ] Every public page has a unique title and description.
- [ ] Every public page has the correct canonical URL.
- [ ] Open Graph and X/Twitter metadata use absolute production URLs.
- [ ] `public/og.png` loads and produces an acceptable share preview.
- [ ] `/favicon.svg` loads.
- [ ] `/robots.txt` returns HTTP 200 and permits intended crawling.
- [ ] `/sitemap.xml` returns HTTP 200 and contains all five indexable routes.
- [ ] Person JSON-LD validates and contains only verified facts.
- [ ] Google Search Console property is created and ownership verified. **Owner action**
- [ ] `/sitemap.xml` is submitted in Search Console. **Owner action**
- [ ] Indexing status is reviewed after launch; immediate indexing is not assumed. **Owner action**

## Analytics

- [ ] `@vercel/analytics/react` integration is present in the application.
- [ ] Vercel Analytics is enabled for the correct project. **Owner action**
- [ ] A production visit appears in the Vercel Analytics dashboard. **Owner action**
- [ ] Dashboard access is assigned to the appropriate owner/team. **Owner action**
- [ ] No redundant Google Analytics integration was added.

## Accessibility, responsive behavior, and links

- [ ] Keyboard navigation and visible focus states are verified.
- [ ] Skip-to-content works on all five public routes.
- [ ] Mobile navigation opens, closes, and responds to Escape correctly.
- [ ] Reduced-motion behavior has been checked.
- [ ] Layout has been checked at 320, 360, 390, 430, 768, 1024, 1366, 1440, and 1920 pixels.
- [ ] No horizontal overflow is present.
- [ ] Publication rows remain readable on small screens.
- [ ] Every internal route and fragment link works.
- [ ] Every DOI, publisher, institutional, source, and email link opens the intended destination.

## Documentation and recovery

- [ ] README development and deployment instructions have been delivered.
- [ ] `CONTENT_UPDATE_GUIDE.md` has been delivered.
- [ ] `BACKUP_AND_RECOVERY.md` has been delivered.
- [ ] `PRODUCTION_QA_AUDIT.md` contains final results rather than planned claims.
- [ ] Repository mirror or owner-controlled backup has been created. **Owner action**
- [ ] Domain, DNS, Vercel, GitHub, and environment-variable records are stored securely. **Owner action**
- [ ] The client understands that GitHub source, Vercel deployment, and domain ownership are separate assets.

## Final acceptance

- [ ] Final production URL: ______________________________
- [ ] Production commit: _________________________________
- [ ] Handoff date: ______________________________________
- [ ] Client/owner representative: ________________________
- [ ] Technical representative: ___________________________
- [ ] Outstanding owner actions are recorded below.

### Outstanding owner actions

1. ______________________________________________________________________
2. ______________________________________________________________________
3. ______________________________________________________________________

Unchecked external-account items must not be reported as completed without direct verification.
