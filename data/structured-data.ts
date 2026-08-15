import { profile, profileSeo } from "@/data/profile";
import { publications } from "@/data/publications";
import { absoluteUrl, siteConfig } from "@/data/site";

const personId = `${absoluteUrl("/")}#person`;
const collegeId = "https://www.mlncdu.ac.in/#organization";
const universityId = "https://www.du.ac.in/#organization";

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  honorificPrefix: "Prof.",
  url: absoluteUrl("/"),
  image: absoluteUrl("/images/portrait.jpg"),
  jobTitle: [profile.currentRole, `${profile.academicRole} of Chemistry`],
  worksFor: {
    "@type": "CollegeOrUniversity",
    "@id": collegeId,
    name: profile.college,
    url: "https://www.mlncdu.ac.in/",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      "@id": universityId,
      name: profile.university,
      url: "https://www.du.ac.in/",
    },
  },
  affiliation: {
    "@id": collegeId,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  knowsAbout: profileSeo.knowsAbout,
  mainEntityOfPage: absoluteUrl("/"),
} as const;

const verifiedArticle = publications.find(
  (publication) =>
    publication.doi &&
    publication.authors?.length &&
    publication.volume &&
    publication.issue &&
    publication.pages,
);

export const researchStructuredData = verifiedArticle
  ? {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "@id": verifiedArticle.doi,
      headline: verifiedArticle.title,
      datePublished: String(verifiedArticle.year),
      author: verifiedArticle.authors?.map((name) => ({
        "@type": "Person",
        ...(name === profile.name ? { "@id": personId } : {}),
        name,
      })),
      isPartOf: {
        "@type": "Periodical",
        name: verifiedArticle.journal,
      },
      volumeNumber: verifiedArticle.volume,
      issueNumber: verifiedArticle.issue,
      pagination: verifiedArticle.pages,
      sameAs: verifiedArticle.doi,
      mainEntityOfPage: verifiedArticle.publisherUrl,
      inLanguage: siteConfig.language,
    }
  : null;
