# Content Update Guide

This guide explains where to update the public content for Prof. Yogeshwar Sharma's portfolio without searching through the entire React application.

## Before editing

- Work on a branch and review the diff before committing.
- Preserve verified titles, appointments, publication metadata, and institutional figures.
- Prefer primary institutional, publisher, DOI, or regulatory sources.
- Do not add an academic profile, award, degree, publication, or social account without verifying the exact person and URL.
- Never commit passwords, tokens, private keys, or account credentials.

After every content update, run:

```bash
npm run lint
npx tsc --noEmit --incremental false
npm test
```

## Update the current title or institution

Open `data/profile.ts` and review these exports:

- `profile` for `currentRole`, `academicRole`, department, college, university, location, and email;
- `profileRoles` for the role strip on the home page;
- `profileIntro` for the institutional and academic identity lines;
- `profileSeo` for shared profile search copy.

If the official title changes, update every affected field in the same change and attach a current primary institutional source. Search the repository for the old title before committing so that a hard-coded presentation label is not missed.

The hero's short role chips are in `components/home/Hero.tsx`; edit them only when the verified role itself changes. The footer identity is in `components/layout/Footer.tsx`.

## Change hero text

The data-backed hero content is in `data/profile.ts`:

- first and last name: `profile.firstName` and `profile.lastName`;
- institution line: `profileIntro.institutionLine`;
- identity line: `profileIntro.identityLine`;
- introduction: `profileIntro.summary`.

The home hero component at `components/home/Hero.tsx` controls only the composition, role chips, and CTA labels. Preserve its structure and visual design when changing copy.

## Change contact information

Update `profile.email` in `data/profile.ts`. The site derives its visible email and `mailto:` links from that value.

Also review:

- `data/links.ts` for contact-link definitions;
- `components/layout/Footer.tsx` if the institutional postal address changes.

Open every contact action after the change and confirm that its displayed address and `mailto:` destination agree. Do not publish a personal phone number or private address without explicit approval.

## Add a publication

Open `data/publications.ts` and add an object to the `publications` array. Follow the existing `Publication` type.

```ts
{
  id: "stable-lowercase-id",
  year: 2026,
  title: "Verified article title",
  authors: ["Author One", "Author Two"],
  journal: "Verified Journal Name",
  volume: "1",
  issue: "2",
  pages: "10-20",
  doi: "https://doi.org/...",
  publisherUrl: "https://publisher.example/...",
  tags: ["Research Area"],
}
```

Rules:

1. Copy the title and authors from the article or publisher record; do not rewrite them.
2. Use a stable, unique `id`.
3. Prefer a verified DOI URL. If no DOI exists, use the exact publisher article or PDF URL.
4. Open the URL and confirm that title, authors, journal, year, and pages match the entry.
5. Add `featured: true` and a unique `featuredRank` only when the record should appear in featured sections.
6. Do not delete or reorder existing records casually; the array controls the displayed index.
7. Add or update a corresponding record in `data/sources.ts` when the publication supports a highlighted factual claim.

The publication list is rendered automatically from this data. No page component edit is normally required.

## Correct a publication link

Treat a URL correction as a technical fix, not a bibliographic rewrite.

- Keep verified title, authors, journal, year, volume, issue, and pages unchanged.
- Replace only the incorrect `doi`, `publisherUrl`, or `articleUrl` field.
- Confirm that the corrected destination is the exact article rather than a journal homepage, unrelated numeric record, or generic search page.
- Update any duplicate source URL in `data/sources.ts` and supporting audit documentation.

## Change or add a verification source

Open `data/sources.ts` and edit the `verifiedSources` array.

Each source needs:

- a stable `id`;
- the exact visible `claim` it supports;
- the source organization;
- an accurate `sourceType`;
- a claim-specific `url`;
- the appropriate category;
- a date when useful.

Prefer a direct official page, filing, notice, DOI, or publisher record. Do not label a media article as an official institutional release. Avoid linking multiple distinct claims to a generic homepage when a claim-specific page exists.

## Update leadership or institutional milestones

- Educational vision, governance, leadership narrative, and student development: `data/leadership.ts`
- Infrastructure and principalship timeline entries: `data/milestones.ts`

For figures, dates, appointments, and project values, update the associated source in `data/sources.ts` in the same change. Preserve the distinction between an institutional achievement and a personal claim.

## Update research or teaching content

- Research overview, areas, methods, and scientific labels: `data/research.ts`
- Teaching overview, academic journey, themes, and philosophy: `data/teaching.ts`

Do not expand research claims beyond what the publication record supports. Scientific spelling, ion notation, and publication titles should remain exact.

## Update the production domain

The public origin is centralized in `data/site.ts`. The file resolves the public `SITE_URL` environment variable and uses this committed `productionSiteUrl` fallback:

```text
https://prin-main.vercel.app
```

After the owner connects and verifies a custom domain:

1. Set `SITE_URL` for the deployment environment, or update the committed `productionSiteUrl` fallback in `data/site.ts`.
2. Use only the final HTTPS origin; omit paths, queries, and a trailing duplicate slash.
3. Redeploy the production branch.
4. Check canonical URLs on all five public pages.
5. Check `og:url`, `og:image`, X/Twitter image, and Person JSON-LD.
6. Open `/robots.txt` and confirm its sitemap URL.
7. Open `/sitemap.xml` and confirm every URL uses the new origin.
8. Add or update the domain property in Google Search Console and resubmit the sitemap.

Purchasing the domain, changing DNS, confirming HTTPS, and verifying Search Console are owner actions outside this repository.

## Update the Open Graph image

Replace `public/og.png` while keeping the same filename unless metadata is updated at the same time. The current metadata declares a 1672×941 image; if the replacement has different dimensions, update `siteConfig.socialImage.width` and `siteConfig.socialImage.height` in `data/site.ts` in the same change.

Recommended specifications:

- 1200×630 pixels;
- PNG or another metadata-supported web format;
- compressed to a practical web size;
- ivory, charcoal, maroon, and brass visual language;
- readable title at small preview sizes;
- no unverified logo, seal, social handle, or claim.

After replacement, open `/og.png` on the deployed site and test the absolute `og:image` URL. Social platforms cache images, so their preview-debug tools may need to be used to request a refresh.

## Final content check

- [ ] Current title and contact details match the owner's approved record.
- [ ] Every changed claim has a primary source.
- [ ] Every publication link opens the exact intended paper.
- [ ] No duplicate publication IDs or featured ranks were introduced.
- [ ] All five routes render correctly.
- [ ] Metadata contains no `localhost`, `undefined`, `null`, or placeholder domain.
- [ ] Lint, typecheck, tests, and production build pass.
