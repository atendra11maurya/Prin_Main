export type SourceCategory =
  | "CURRENT APPOINTMENTS"
  | "HISTORICAL APPOINTMENTS"
  | "GOVERNANCE"
  | "INSTITUTIONAL DEVELOPMENT"
  | "RESEARCH & ACADEMIC";

export type Source = {
  id: string;
  claim: string;
  organization: string;
  sourceType: string;
  url: string;
  category: SourceCategory;
  date?: string;
};

export const nbccInfrastructureSource = {
  id: "src-nbcc",
  claim: "₹213 crore infrastructure MoU",
  organization: "NBCC (India) Ltd.",
  sourceType: "Official Corporate Press / News Release",
  url: "https://nbccindia.in/webEnglish/Archivalnews",
  category: "INSTITUTIONAL DEVELOPMENT",
  date: "December 2024",
} as const satisfies Source;

export const verifiedSources = [
  {
    id: "src-principal",
    claim: "Principal — Motilal Nehru College",
    organization: "Motilal Nehru College",
    sourceType: "Official institutional record",
    url: "https://www.mlncdu.ac.in/principal.html",
    category: "CURRENT APPOINTMENTS",
    date: undefined,
  },
  {
    id: "src-officiating",
    claim: "Officiating Principal",
    organization: "Motilal Nehru College",
    sourceType: "Official MLNC archive",
    url: "https://www.mlncdu.ac.in/news.html",
    category: "HISTORICAL APPOINTMENTS",
    date: "Effective 6 February 2023",
  },
  {
    id: "src-governance",
    claim: "Member Secretary — Governing Body",
    organization: "Motilal Nehru College",
    sourceType: "Official institutional record",
    url: "https://www.mlncdu.ac.in/governing_body.html",
    category: "GOVERNANCE",
    date: undefined,
  },
  nbccInfrastructureSource,
  {
    id: "src-pub-2018",
    claim: "A Kinetic Studies of Interaction of Ni(II) with d-2,2-(Ethylenediimino)-di-1-butanol",
    organization: "Asian Journal of Chemistry",
    sourceType: "Academic Journal",
    url: "https://doi.org/10.14233/ajchem.2018.20987",
    category: "RESEARCH & ACADEMIC",
    date: "February 2018",
  },
] as const satisfies readonly Source[];
