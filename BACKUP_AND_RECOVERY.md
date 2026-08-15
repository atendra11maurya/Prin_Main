# Backup and Recovery

This document describes how to preserve and restore the portfolio without treating generated build output as the primary backup.

## Canonical source

The GitHub repository is the canonical source:

```text
https://github.com/atendra11maurya/Prin_Main
```

Repository ownership and the final production branch must be confirmed with the owner before handoff. A Vercel deployment is derived from the repository and is not a replacement for source control.

## What must be preserved

- Git history and tags
- `package.json` and `package-lock.json`
- `app/`, `components/`, and `data/`
- `public/` assets, especially the portrait, favicon, and Open Graph image
- `tests/` and project configuration
- README and handoff documentation
- A separate owner-maintained record of Vercel project settings, domain registrar, DNS, and environment variables

Do not use these generated directories as backups:

- `node_modules/`
- `.next/`
- `.vinext/`
- `.output/`
- `dist/`
- `.wrangler/`

They can be recreated from the tracked source and lockfile.

## Source backup

Keep the main repository in an owner-controlled GitHub organization or account. For an additional local copy:

```bash
git clone --mirror https://github.com/atendra11maurya/Prin_Main.git Prin_Main.git
```

To refresh that mirror later:

```bash
cd Prin_Main.git
git remote update --prune
```

A normal working copy is also useful:

```bash
git clone https://github.com/atendra11maurya/Prin_Main.git
```

Store backups on access-controlled storage. Do not place credentials or exported secret values inside the repository or an unencrypted archive.

## Asset backup

The static assets under `public/` are part of Git and should travel with the source backup. Keep original high-resolution source photography or design files separately when they are larger than the web-ready assets committed here.

Record usage permission and provenance for any portrait, institutional photograph, logo, or seal. Domain ownership and image rights are separate from GitHub ownership.

## Environment and account record

The application does not require a committed secret for its normal public content. `data/site.ts` resolves the public `SITE_URL` environment variable and has a safe committed `productionSiteUrl` fallback of `https://prin-main.vercel.app`.

If an environment override or future secret is added:

1. Record its name, purpose, scope, and owning account in the owner's secure password manager.
2. Store production values in Vercel, not in Git.
3. Never copy values into README files, issues, screenshots, or support messages.
4. Record which environments use it: Development, Preview, or Production.

Vercel Analytics normally does not require a client-side secret, but its dashboard access depends on Vercel account ownership.

## Restore a local working copy

Prerequisites:

- Git
- Node.js `>=22.13.0`
- npm

Restore and verify:

```bash
git clone https://github.com/atendra11maurya/Prin_Main.git
cd Prin_Main
npm ci
npm run lint
npx tsc --noEmit --incremental false
npm test
npm run build
```

Start the production build locally when needed:

```bash
npm run start
```

## Restore on Vercel

1. Sign in to the owner-approved Vercel account.
2. Import the canonical GitHub repository.
3. Confirm the owner-approved production branch.
4. Confirm Node.js satisfies `>=22.13.0`.
5. Use build command `npx vite build`.
6. Use output directory `.output`.
7. Recreate any documented environment overrides without exposing their values.
8. Deploy a preview and verify the five public routes.
9. Promote or redeploy production only with owner authorization.
10. Reconnect the custom domain and DNS if applicable.
11. Confirm HTTPS, Analytics, `/robots.txt`, `/sitemap.xml`, `/favicon.svg`, and `/og.png`.

Vercel project ownership, production promotion, and domain attachment are external operations and must not be inferred from a successful local build.

## Domain recovery

Domain registration is independent of the source repository and Vercel project.

The owner should preserve:

- registrar name and account ownership;
- renewal date and payment method;
- DNS provider and current records;
- transfer lock and recovery contact status;
- the final domain supplied through `SITE_URL` or the committed `productionSiteUrl` fallback.

After reconnecting a domain, set `SITE_URL` in the deployment environment or update the `productionSiteUrl` fallback in `data/site.ts`, redeploy, and verify canonical, social, sitemap, robots, and JSON-LD URLs.

## Search and analytics recovery

- Re-verify Google Search Console if domain or account ownership changes.
- Submit the deployed `/sitemap.xml` after verification.
- Confirm Vercel Analytics is enabled for the restored project and receives new production visits.
- Do not add a fabricated Search Console token or duplicate analytics product.

## Recovery verification

- [ ] Clean install succeeds from `package-lock.json`.
- [ ] Lint, typecheck, tests, and build pass.
- [ ] `/`, `/research`, `/leadership`, `/academic`, and `/sources` return HTTP 200.
- [ ] Invalid routes return the branded HTTP 404 page.
- [ ] Portrait, favicon, and Open Graph image load.
- [ ] Publication, source, and email links point to the intended destinations.
- [ ] Canonical and social URLs use the active HTTPS origin.
- [ ] `robots.txt` and sitemap use the active origin.
- [ ] Domain, GitHub, and Vercel ownership are recorded separately.
