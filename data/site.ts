import type { Metadata } from "next";

export const productionSiteUrl = "https://prin-main.vercel.app";

function getRawSiteUrl(): string | undefined {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)
  );
}

function resolveSiteUrl(rawUrl?: string): string {
  const candidate = rawUrl?.trim() || productionSiteUrl;

  try {
    const withProtocol =
      candidate.startsWith("http://") || candidate.startsWith("https://")
        ? candidate
        : `https://${candidate}`;
    const url = new URL(withProtocol);
    if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
      return productionSiteUrl;
    }
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return productionSiteUrl;
    }
    return url.origin;
  } catch {
    return productionSiteUrl;
  }
}

export const siteConfig = {
  name: "Prof. Yogeshwar Sharma",
  personName: "Yogeshwar Sharma",
  url: resolveSiteUrl(getRawSiteUrl()),
  locale: "en_IN",
  language: "en-IN",
  institution: "Motilal Nehru College",
  university: "University of Delhi",
  defaultDescription:
    "Principal of Motilal Nehru College, University of Delhi; Professor of Chemistry, researcher and institutional leader.",
  socialImage: {
    path: "/og.png",
    width: 1672,
    height: 941,
    alt: "Prof. Yogeshwar Sharma — Principal, Motilal Nehru College",
  },
} as const;

export type SitePage = {
  path: "/" | "/research" | "/leadership" | "/academic" | "/sources";
  title: string;
  description: string;
};

export const sitePages = {
  home: {
    path: "/",
    title: "Prof. Yogeshwar Sharma | Principal & Professor of Chemistry",
    description: siteConfig.defaultDescription,
  },
  research: {
    path: "/research",
    title: "Research & Scholarship | Prof. Yogeshwar Sharma",
    description:
      "Research and publications across chemical kinetics, metal–ligand complexation, coordination chemistry and mechanistic studies.",
  },
  leadership: {
    path: "/leadership",
    title: "Leadership & Institution | Prof. Yogeshwar Sharma",
    description:
      "Academic leadership, governance and institutional development at Motilal Nehru College, University of Delhi.",
  },
  academic: {
    path: "/academic",
    title: "Academic Journey | Prof. Yogeshwar Sharma",
    description:
      "Academic work spanning Chemistry, teaching, research and institutional leadership.",
  },
  sources: {
    path: "/sources",
    title: "Sources & Verification | Prof. Yogeshwar Sharma",
    description:
      "Institutional, academic and publication sources supporting the factual record presented across this portfolio.",
  },
} as const satisfies Record<string, SitePage>;

export const publicRoutes = Object.values(sitePages).map((page) => page.path);

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, `${siteConfig.url}/`).toString();
}

export function createPageMetadata(page: SitePage): Metadata {
  const canonical = absoluteUrl(page.path);
  const image = absoluteUrl(siteConfig.socialImage.path);

  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: image,
          width: siteConfig.socialImage.width,
          height: siteConfig.socialImage.height,
          alt: siteConfig.socialImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}
