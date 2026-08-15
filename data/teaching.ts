export type TeachingTheme = {
  id: "conceptual-understanding" | "scientific-reasoning" | "kinetic-thinking" | "observation-interpretation";
  index: string;
  title: string;
  description: string;
};

export type AcademicJourneyEntry = {
  id: string;
  period: string;
  sortYear: number;
  title: string;
  description: string;
  category: "research" | "teaching" | "leadership";
};

export type TeachingProfile = {
  label: string;
  title: string;
  summary: string;
  courses?: readonly string[];
};

export const teachingOverview = {
  label: "Academic / Chemistry",
  title: "Teaching & Academic Life",
  summary:
    "As a Professor of Chemistry, Prof. Yogeshwar Sharma's academic identity is presented through conceptual understanding, scientific reasoning, kinetic and mechanistic thinking, and the relationship between experimental observation and chemical interpretation.",
} as const satisfies TeachingProfile;

export const teachingThemes = [
  {
    id: "conceptual-understanding",
    index: "01",
    title: "Conceptual Understanding",
    description: "Chemistry education grounded in clear relationships between concepts and phenomena.",
  },
  {
    id: "scientific-reasoning",
    index: "02",
    title: "Scientific Reasoning",
    description: "Evidence, interpretation and critical inquiry as foundations of academic work.",
  },
  {
    id: "kinetic-thinking",
    index: "03",
    title: "Kinetic & Mechanistic Thinking",
    description: "Attention to how reactions proceed, how rates are understood and how mechanisms are interpreted.",
  },
  {
    id: "observation-interpretation",
    index: "04",
    title: "Observation & Interpretation",
    description: "Connecting experimental observation with careful chemical interpretation.",
  },
] as const satisfies readonly TeachingTheme[];

export const academicJourney = [
  {
    id: "coordination-research-1997",
    period: "1997",
    sortYear: 1997,
    title: "Coordination Chemistry Research",
    description:
      "A study examining the complexation of nickel, cobalt and copper(II) with L-pyrrolidine-2-carboxylic acid.",
    category: "research",
  },
  {
    id: "pharmaceutical-biology-2004",
    period: "2004",
    sortYear: 2004,
    title: "Publication in Pharmaceutical Biology",
    description: "Research investigating phytoconstituents from the rhizomes of Curculigo orchioides.",
    category: "research",
  },
  {
    id: "kinetic-research-2017-2018",
    period: "2017–2018",
    sortYear: 2017,
    title: "Kinetic and mechanistic studies",
    description:
      "Research examined interactions and complexation involving nickel, cobalt and copper systems.",
    category: "research",
  },
  {
    id: "officiating-principal-2023",
    period: "2023",
    sortYear: 2023,
    title: "Officiating Principal",
    description: "Appointed Officiating Principal of Motilal Nehru College with effect from 6 February 2023.",
    category: "leadership",
  },
  {
    id: "principal-professor-current",
    period: "Current",
    sortYear: 9999,
    title: "Principal & Professor of Chemistry",
    description:
      "Current college records list Prof. Yogeshwar Sharma as Principal and as a faculty member in the Department of Chemistry.",
    category: "leadership",
  },
] as const satisfies readonly AcademicJourneyEntry[];

export const academicPhilosophy = {
  title: "Education beyond the degree",
  summary:
    "Education is framed as a holistic institutional experience in which intellectual development is strengthened by communication, culture, sport, responsibility and leadership.",
} as const;
