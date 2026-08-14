import { profile } from "./profile";

export type NavigationLink = {
  id: "home" | "research" | "leadership" | "academic";
  label: string;
  href: "/" | "/research" | "/leadership" | "/academic";
};

export type FeaturedLink = {
  id: string;
  label: string;
  href: NavigationLink["href"];
};

export type ContactLink = {
  id: "principal-office-email";
  label: string;
  value: string;
  href: string;
  kind: "email";
};

export type AcademicProfilePlatform = "researchGate" | "academia" | "mlnc" | "googleScholar" | "orcid" | "scopus";

export type AcademicProfileLink = {
  platform: AcademicProfilePlatform;
  label: string;
  href: string;
};

export const navigationLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "research", label: "Research", href: "/research" },
  { id: "leadership", label: "Leadership", href: "/leadership" },
  { id: "academic", label: "Academic", href: "/academic" },
] as const satisfies readonly NavigationLink[];

export const featuredLinks = [
  { id: "academic-profile", label: "Explore Academic Profile", href: "/academic" },
  { id: "research-scholarship", label: "View Research & Scholarship", href: "/research" },
  { id: "institutional-leadership", label: "View Institutional Leadership", href: "/leadership" },
] as const satisfies readonly FeaturedLink[];

export const contactLinks = [
  {
    id: "principal-office-email",
    label: "Contact the Principal's Office",
    value: profile.email,
    href: `mailto:${profile.email}`,
    kind: "email",
  },
] as const satisfies readonly ContactLink[];

export const principalOfficeEmailLink = contactLinks[0];

// Add profile records only when their exact public URLs have been verified.
export const academicProfileLinks = [] as const satisfies readonly AcademicProfileLink[];
