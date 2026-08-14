export type PublicationType = "journal" | "chapter" | "conference";

export type Publication = {
  id: string;
  title: string;
  authors?: readonly string[];
  authorListStatus?: "complete" | "partial";
  year?: number;
  journal?: string;
  type?: PublicationType;
  url?: string;
  doi?: string;
  tags?: readonly string[];
  featured?: boolean;
  featuredRank?: number;
};

export const publications: readonly Publication[] = [
  {
    id: "ni-ethylenediimino-butanol-2018",
    title:
      "A Kinetic Studies of Interaction of Ni(II) with d-2,2-(Ethylenediimino)-di-1-butanol",
    authors: ["Yogeshwar Sharma", "Harish C. Malhotra", "Gian C. Sharma"],
    authorListStatus: "partial",
    year: 2018,
    journal: "Asian Journal of Chemistry",
    type: "journal",
    tags: ["Ni(II)", "Kinetics", "Complexation", "Stopped flow"],
    featured: true,
    featuredRank: 1,
  },
  {
    id: "co-aminobenzoic-acid-2017",
    title: "Kinetics and mechanism of complexation of Co(II) with 2-aminobenzoic acid",
    year: 2017,
    journal: "The Pharma Innovation Journal",
    type: "journal",
    tags: ["Co(II)", "Kinetics", "Complexation"],
    featured: true,
    featuredRank: 2,
  },
  {
    id: "cu-ethylenediimino-butanol-2017",
    title:
      "A kinetic study on interaction of Cu(II) with d-2,2-(Ethylenediimino)-di-1-butanol",
    year: 2017,
    tags: ["Cu(II)", "Kinetics", "Complexation"],
  },
  {
    id: "ni-gamma-aminobenzoic-acid-2017",
    title: "A comprehensive kinetic study on interaction of Ni(II) with γ-aminobenzoic acid",
    year: 2017,
    journal: "The Pharma Innovation Journal",
    type: "journal",
    tags: ["Ni(II)", "Kinetics", "Complexation"],
  },
  {
    id: "co-ethylenediimino-butanol-2017",
    title:
      "A comprehensive kinetic study on interaction of Co(II) with d-2,2-(Ethylenediimino)-di-1-butanol",
    year: 2017,
    journal: "International Journal of Applied Research",
    type: "journal",
    tags: ["Co(II)", "Kinetics", "Complexation"],
    featured: true,
    featuredRank: 3,
  },
  {
    id: "cu-glutamyl-cysteinylglycine-2017",
    title: "Kinetics and mechanism of complexation of Cu(II) with γ-L-glutamyl-L-cysteinylglycine",
    year: 2017,
    tags: ["Cu(II)", "Kinetics", "Complexation"],
  },
  {
    id: "curculigo-orchioides-2008",
    title: "New Phytoconstituents from the Rhizomes of Curculigo orchioides",
    year: 2008,
    journal: "Pharmaceutical Biology",
    type: "journal",
    tags: ["Phytoconstituents"],
  },
  {
    id: "metal-pyrrolidine-carboxylic-acid-1997",
    title:
      "Complexation of Nickel-, Cobalt- and Copper(II) with L-Pyrrolidine-2-carboxylic Acid",
    year: 1997,
    journal: "Journal of the Indian Chemical Society",
    type: "journal",
    tags: ["Ni(II)", "Co(II)", "Cu(II)", "Complexation"],
  },
] as const;

export const featuredPublications = publications
  .filter((publication) => publication.featured)
  .sort(
    (a, b) =>
      (a.featuredRank ?? Number.POSITIVE_INFINITY) -
      (b.featuredRank ?? Number.POSITIVE_INFINITY),
  );

export const publicationIndex = {
  label: "Research Publications",
  selectedLabel: "Selected Research",
  note:
    "This selected index reflects publicly visible work and is not presented as a complete count of Prof. Yogeshwar Sharma's scholarly output.",
} as const;
