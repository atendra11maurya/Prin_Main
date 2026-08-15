export type Publication = {
  id: string;
  year: number;
  title: string;
  authors?: readonly string[];
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  publisherUrl?: string;
  articleUrl?: string;
  tags?: readonly string[];
  featured?: boolean;
  featuredRank?: number;
};

export const publications: readonly Publication[] = [
  {
    id: "cu-gamma-aminobenzoic-acid-2019",
    year: 2019,
    title:
      "A kinetic study on the complexation of Cu(II) with γ-aminobenzoic acid",
    authors: ["Yogeshwar Sharma"],
    journal: "The Pharma Innovation Journal",
    volume: "8",
    issue: "5",
    pages: "773-778",
    publisherUrl:
      "https://www.thepharmajournal.com/archives/2019/vol8issue5/PartL/8-5-85-782.pdf",
    tags: ["Chemical Kinetics", "Complexation"],
  },
  {
    id: "momordica-charantia-2019",
    year: 2019,
    title:
      "A chemical and medicinal potency of Momordica charantia",
    authors: ["Yogeshwar Sharma"],
    journal: "The Pharma Innovation Journal",
    volume: "8",
    issue: "6",
    pages: "531-536",
    publisherUrl:
      "https://www.thepharmajournal.com/archives/2019/vol8issue6/PartI/8-6-40-906.pdf",
    tags: ["Phytochemistry", "Review"],
  },
  {
    id: "ni-ethylenediimino-butanol-2018",
    year: 2018,
    title:
      "A Kinetic Studies of Interaction of Ni(II) with d-2,2-(Ethylenediimino)-di-1-butanol",
    authors: ["Yogeshwar Sharma", "Harish C. Malhotra", "Gian C. Sharma"],
    journal: "Asian Journal of Chemistry",
    volume: "30",
    issue: "4",
    pages: "778-782",
    doi: "https://doi.org/10.14233/ajchem.2018.20942",
    publisherUrl: "https://asianpubs.org/index.php/ajchem/article/view/20942",
    tags: ["Chemical Kinetics", "Metal–Ligand Interaction"],
    featured: true,
    featuredRank: 1,
  },
  {
    id: "ginger-zingiber-officinale-2017",
    year: 2017,
    title:
      "Ginger (Zingiber officinale) — An elixir of life: A review",
    authors: ["Yogeshwar Sharma"],
    journal: "The Pharma Innovation Journal",
    volume: "6",
    issue: "10",
    pages: "22-27",
    publisherUrl:
      "https://www.thepharmajournal.com/archives/2017/vol6issue10/PartA/6-9-73-568.pdf",
    tags: ["Phytochemistry", "Review"],
  },
  {
    id: "co-aminobenzoic-acid-2017",
    year: 2017,
    title:
      "Kinetics and mechanism of complexation of Co(II) with 2-aminobenzoic acid",
    authors: ["Yogeshwar Sharma"],
    journal: "The Pharma Innovation Journal",
    volume: "6",
    issue: "11",
    pages: "494-501",
    publisherUrl:
      "https://www.thepharmajournal.com/archives/2017/vol6issue11/PartH/6-11-51-193.pdf",
    tags: ["Chemical Kinetics", "Complexation"],
    featured: true,
    featuredRank: 2,
  },
  {
    id: "ni-gamma-aminobenzoic-acid-2017",
    year: 2017,
    title:
      "A comprehensive kinetic study on interaction of Ni(II) with γ-aminobenzoic acid",
    authors: ["Yogeshwar Sharma"],
    journal: "The Pharma Innovation Journal",
    volume: "6",
    issue: "11",
    pages: "676-681",
    publisherUrl:
      "https://www.thepharmajournal.com/archives/2017/vol6issue11/PartJ/6-11-82-121.pdf",
    tags: ["Chemical Kinetics", "Complexation"],
  },
  {
    id: "co-ethylenediimino-butanol-2017",
    year: 2017,
    title:
      "A comprehensive kinetic study on interaction of Co(II) with d-2,2-(Ethylenediimino)-di-1-butanol",
    authors: ["Yogeshwar Sharma", "Harish C. Malhotra", "Gian C. Sharma"],
    journal: "International Journal of Applied Research",
    volume: "3",
    issue: "9",
    pages: "144-151",
    publisherUrl:
      "https://www.allresearchjournal.com/archives/2017/vol3issue9/PartC/3-8-59-747.pdf",
    tags: ["Chemical Kinetics", "Complexation"],
    featured: true,
    featuredRank: 3,
  },
  {
    id: "cu-alpha-aminobenzoic-acid-2017",
    year: 2017,
    title:
      "A kinetic study on the complexation of Cu(II) with α-aminobenzoic acid",
    authors: ["Yogeshwar Sharma"],
    journal: "International Journal of Advanced Research and Development",
    volume: "2",
    issue: "6",
    publisherUrl:
      "https://www.multireviewjournal.com/archives/2017/vol2/issue6",
    tags: ["Chemical Kinetics", "Complexation"],
  },
  {
    id: "curculigo-orchioides-2008",
    year: 2008,
    title:
      "New Phytoconstituents from the Rhizomes of Curculigo orchioides",
    journal: "Pharmaceutical Biology",
    tags: ["Phytochemistry"],
  },
  {
    id: "metal-pyrrolidine-carboxylic-acid-1997",
    year: 1997,
    title:
      "Complexation of Nickel-, Cobalt- and Copper(II) with L-Pyrrolidine-2-carboxylic Acid",
    journal: "Journal of the Indian Chemical Society",
    tags: ["Coordination Chemistry", "Complexation"],
  },
] as const satisfies readonly Publication[];

export const featuredPublications = publications
  .filter((p) => p.featured)
  .sort(
    (a, b) =>
      (a.featuredRank ?? Number.POSITIVE_INFINITY) -
      (b.featuredRank ?? Number.POSITIVE_INFINITY),
  );

export const publicationIndex = {
  note: "Selected peer-reviewed research publications and kinetic studies.",
} as const;
