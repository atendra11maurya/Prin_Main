export type ResearchArea = {
  id:
    | "chemical-kinetics"
    | "reaction-mechanisms"
    | "metal-ligand-complexation"
    | "stopped-flow-studies"
    | "coordination-chemistry";
  index: string;
  title: string;
  summary: string;
  notation?: readonly string[];
};

export type ResearchMethod = {
  id: string;
  title: string;
  description: string;
};

export type ReactionPathwayStep = {
  id: string;
  index: string;
  label: string;
};

export const researchOverview = {
  label: "Chemistry / Scholarship",
  title: "Understanding chemical interaction through kinetics.",
  summary:
    "Research spanning the kinetics and mechanisms of metal–ligand complexation, including studies involving nickel, cobalt and copper systems.",
  transitionLabel: "Scholarship / Chemistry",
  transitionTitle: "Scholarship remains at the centre of the academic identity.",
} as const;

export const researchAreas = [
  {
    id: "chemical-kinetics",
    index: "01",
    title: "Chemical Kinetics",
    summary: "The study of reaction rates and the factors that influence them.",
  },
  {
    id: "reaction-mechanisms",
    index: "02",
    title: "Reaction Mechanisms",
    summary: "Kinetic and mechanistic interpretation of chemical interactions.",
  },
  {
    id: "metal-ligand-complexation",
    index: "03",
    title: "Metal–Ligand Complexation",
    summary: "Studies of interactions between transition-metal ions and ligands.",
    notation: ["Ni(II)", "Co(II)", "Cu(II)"],
  },
  {
    id: "stopped-flow-studies",
    index: "04",
    title: "Stopped-Flow Studies",
    summary: "Stopped-flow methods and spectrophotometry in kinetic investigation.",
  },
  {
    id: "coordination-chemistry",
    index: "05",
    title: "Coordination Chemistry",
    summary: "Complexation research involving nickel, cobalt and copper systems.",
    notation: ["Ni(II)", "Co(II)", "Cu(II)"],
  },
] as const satisfies readonly ResearchArea[];

export const researchMethods = [
  {
    id: "stopped-flow",
    title: "Stopped-Flow Spectrophotometry",
    description:
      "Application of stopped-flow techniques for the rapid observation and measurement of reaction kinetics.",
  },
  {
    id: "spectrophotometry",
    title: "Spectrophotometric Observation",
    description:
      "Spectrophotometric methods utilized to monitor complex formation and deduce kinetic parameters.",
  },
  {
    id: "kinetic-analysis",
    title: "Mechanistic Interpretation",
    description:
      "Determination of reaction rates and the mechanistic interpretation of metal-ligand complex formation.",
  },
] as const satisfies readonly ResearchMethod[];

export const conceptualReactionPathway = [
  { id: "reactants", index: "01", label: "Reactants" },
  { id: "interaction", index: "02", label: "Interaction" },
  { id: "transition", index: "03", label: "Transition" },
  { id: "complex", index: "04", label: "Complex" },
] as const satisfies readonly ReactionPathwayStep[];

export const researchSpecies = ["Ni(II)", "Co(II)", "Cu(II)"] as const;
