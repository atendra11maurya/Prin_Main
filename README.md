# Prof. Yogeshwar Sharma — Academic Leadership Portfolio

The official academic and institutional portfolio of Prof. Yogeshwar Sharma, Principal of Motilal Nehru College and Professor of Chemistry at the University of Delhi. The site presents his academic profile, research record, educational leadership, and the sources used to verify key public claims.

Default configured origin: [https://prin-main.vercel.app](https://prin-main.vercel.app)

## Public routes

| Route | Purpose |
| --- | --- |
| `/` | Academic identity, research, leadership, and correspondence overview |
| `/research` | Research areas and selected publication index |
| `/leadership` | Educational vision, governance, and institutional development |
| `/academic` | Teaching, scholarship, and academic journey |
| `/sources` | Source records supporting key institutional and academic claims |

## Stack

- React 19
- TypeScript
- vinext App Router compatibility layer
- Vite and Nitro
- Custom CSS
- npm with `package-lock.json`
- Vercel hosting
- Vercel Analytics

The project requires Node.js `>=22.13.0`.

## Local development

Use npm so the committed lockfile remains authoritative.

```bash
git clone https://github.com/atendra11maurya/Prin_Main.git
cd Prin_Main
npm ci
npm run dev
```

The local server is available at `http://localhost:3000` unless a different port is configured.

Use `npm install` instead of `npm ci` only when intentionally changing dependencies and updating `package-lock.json`.

## Production build

```bash
npm run build
npm run start
```

Run the quality checks before handoff or deployment:

```bash
npm run lint
npx tsc --noEmit --incremental false
npm test
```

`npm test` includes the production build used by the rendered-route checks.

## Project structure

| Path | Responsibility |
| --- | --- |
| `app/` | App Router pages, root layout, metadata routes, and global styles |
| `components/` | Reusable page, layout, research, leadership, and academic UI |
| `data/site.ts` | Central site identity, production origin, canonical URL, and social metadata configuration |
| `data/profile.ts` | Name, current role, institution, contact details, and profile copy |
| `data/publications.ts` | Verified publication records and outbound publication links |
| `data/research.ts` | Research areas, methods, and supporting copy |
| `data/leadership.ts` | Leadership, governance, and educational-vision content |
| `data/milestones.ts` | Institutional and principalship timeline entries |
| `data/teaching.ts` | Teaching themes, academic journey, and philosophy |
| `data/sources.ts` | Claim-specific verification records and source URLs |
| `public/` | Favicon, Open Graph image, portrait, and other static assets |
| `tests/` | Rendered HTML and production-route checks |

Detailed maintenance instructions are in [CONTENT_UPDATE_GUIDE.md](./CONTENT_UPDATE_GUIDE.md).

## Site configuration

`data/site.ts` is the single coding-side source of truth for the public site origin and shared metadata. It resolves the public `SITE_URL` environment variable and falls back to its committed `productionSiteUrl` value:

```text
https://prin-main.vercel.app
```

Do not duplicate the production origin in page components. When a verified custom domain is connected, set `SITE_URL` in the deployment environment or update the committed `productionSiteUrl` fallback in `data/site.ts`. The change must be followed by a new production deployment.

The central value is used for:

- canonical URLs;
- Open Graph and X/Twitter image URLs;
- sitemap entries;
- `robots.txt` sitemap declaration;
- JSON-LD URLs.

`SITE_URL` is public configuration, not a secret. Never place credentials, API tokens, or account secrets in source control.

## Updating content

Most editorial content lives in `data/*.ts` rather than page components:

- profile, current title, institution, and email: `data/profile.ts`;
- publications and journal/DOI links: `data/publications.ts`;
- research content: `data/research.ts`;
- leadership and governance: `data/leadership.ts`;
- institutional milestones: `data/milestones.ts`;
- teaching and academic journey: `data/teaching.ts`;
- verification records: `data/sources.ts`.

Preserve verified academic facts. Every substantive claim or publication-link change should be checked against a primary publisher or institutional source.

## Adding a publication

1. Open `data/publications.ts`.
2. Add one object to the `publications` array using the existing `Publication` shape.
3. Include verified title, author list, journal, year, volume, issue, and pages when available.
4. Add a DOI or direct publisher URL that resolves to that exact article.
5. Set `featured` and `featuredRank` only when the publication should appear in featured areas.
6. Run lint, typecheck, tests, and manually open the outbound record.

See [CONTENT_UPDATE_GUIDE.md](./CONTENT_UPDATE_GUIDE.md) for field-level instructions.

## SEO and social sharing

The site uses route-specific metadata with shared values from `data/site.ts`.

- Canonical origin: `SITE_URL`, resolved in `data/site.ts` with a committed fallback
- Sitemap: `/sitemap.xml`
- Crawler policy: `/robots.txt`
- Social image: `public/og.png`
- Favicon: `public/favicon.svg`
- Person structured data: root layout

After changing the domain or social image, verify the rendered canonical, `og:url`, `og:image`, X/Twitter image, sitemap, robots file, and JSON-LD URLs on the deployed site.

Google Search Console ownership is not configured by source code alone. After the final domain is live, the owner must add the property, complete the verification method supplied by Google, and submit `/sitemap.xml`. Do not fabricate a verification token.

## Analytics

The application integrates Vercel Analytics through `@vercel/analytics/react`. No analytics secret should be committed to the repository.

Owner action is still required to confirm that Analytics is enabled for the correct Vercel project and that production visits appear in the dashboard after deployment. Google Analytics is not part of this project.

## Vercel deployment

The repository configuration uses:

| Setting | Value |
| --- | --- |
| Build command | `npx vite build` |
| Output directory | `.output` |
| Node.js | `>=22.13.0` |
| Package manager | npm |
| Lockfile | `package-lock.json` |

Vite uses vinext and Nitro; Nitro detects the Vercel environment during the hosted build. The intended production branch must be confirmed in the Vercel project settings because it is not defined by `vercel.json`.

Deployment procedure:

1. Import or connect the GitHub repository in the intended Vercel account.
2. Confirm the production branch with the owner.
3. Confirm the build command and output directory shown above.
4. Configure the final public origin with the `SITE_URL` environment variable or the `productionSiteUrl` fallback in `data/site.ts`.
5. Deploy and verify all five routes, `/robots.txt`, `/sitemap.xml`, `/favicon.svg`, and `/og.png`.
6. Confirm Analytics in the Vercel dashboard.

Connecting a custom domain, editing DNS, confirming account ownership, and promoting a deployment are external owner actions. They are not completed merely by changing this repository.

## Deployment checklist

- [ ] Lint, typecheck, tests, and production build pass.
- [ ] All five public routes return HTTP 200.
- [ ] Invalid routes return the branded 404 with HTTP 404.
- [ ] Canonicals and social URLs use the final HTTPS origin.
- [ ] `/robots.txt` and `/sitemap.xml` return HTTP 200.
- [ ] Publication and verification links open the intended records.
- [ ] Contact details and current title are owner-approved.
- [ ] Production branch and Vercel project ownership are confirmed.
- [ ] Custom domain and HTTPS are confirmed, if applicable.
- [ ] Vercel Analytics is enabled and receiving production traffic.
- [ ] Search Console ownership and sitemap submission are completed by the owner.

For the full delivery checklist, see [CLIENT_HANDOFF_CHECKLIST.md](./CLIENT_HANDOFF_CHECKLIST.md). For restore procedures, see [BACKUP_AND_RECOVERY.md](./BACKUP_AND_RECOVERY.md).
