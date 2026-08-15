export type VisionTheme = {
  id: "intellectual-excellence" | "communication" | "culture" | "leadership";
  title: string;
  description: string;
  domain?: string;
  tags?: readonly string[];
  status?: string;
};

export type LeadershipNarrativeStep = {
  id: "vision" | "governance" | "infrastructure" | "student-development" | "academic-environment";
  index: string;
  title: string;
  description: string;
};

export type StudentDevelopmentTheme = {
  id: "scholarship" | "culture" | "sport" | "leadership";
  index: string;
  title: string;
};

export const visionForEducation = {
  label: "Vision / 01",
  title: "Education beyond information.",
  secondaryStatement: "Knowledge. Culture. Communication. Leadership.",
  summary:
    "Prof. Yogeshwar Sharma's institutional outlook places education beyond the accumulation of information. It emphasizes intellectual development, communication, cultural engagement, responsibility and opportunities for students to grow through academics, sports and leadership.",
} as const;

export const visionThemes = [
  {
    id: "intellectual-excellence",
    title: "Intellectual Excellence",
    description: "Knowledge developed through inquiry, critical engagement and reflection.",
    domain: "Academic & Scholarly Inquiry",
    tags: ["Inquiry", "Critical Engagement", "Reflection"],
    status: "Pillar",
  },
  {
    id: "communication",
    title: "Communication",
    description: "The capacity to articulate ideas and participate constructively in academic life.",
    domain: "Constructive Discourse",
    tags: ["Articulation", "Academic Dialogue", "Expression"],
    status: "Pillar",
  },
  {
    id: "culture",
    title: "Culture",
    description: "Education understood within a wider culture of participation and development.",
    domain: "Institutional Environment",
    tags: ["Participation", "Community", "Holistic Growth"],
    status: "Pillar",
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Opportunities for responsibility, introspection and student growth.",
    domain: "Student Development",
    tags: ["Responsibility", "Introspection", "Governance"],
    status: "Pillar",
  },
] as const satisfies readonly VisionTheme[];

export const leadershipTransition = {
  label: "Institution / Leadership",
  title: "From scholarship to institution building.",
  summary:
    "Academic leadership extends beyond administration—it shapes the conditions in which scholarship, teaching and student development can flourish.",
} as const;

export const governance = {
  label: "Institutional Governance",
  role: "Principal & Member Secretary",
  body: "Governing Body",
  institution: "Motilal Nehru College",
  description:
    "The role places the Principal within the college's formal governance structure alongside the Governing Body.",
} as const;

export const leadershipNarrative = [
  {
    id: "vision",
    index: "01",
    title: "Vision",
    description: "Education framed as intellectual, cultural and personal development.",
  },
  {
    id: "governance",
    index: "02",
    title: "Governance",
    description: "Principalship situated within the college's formal governance structure.",
  },
  {
    id: "infrastructure",
    index: "03",
    title: "Infrastructure",
    description: "Institutional planning for academic, cultural and residential facilities.",
  },
  {
    id: "student-development",
    index: "04",
    title: "Student development",
    description: "Growth through scholarship, communication, culture, sport and leadership.",
  },
  {
    id: "academic-environment",
    index: "05",
    title: "Academic environment",
    description: "Conditions in which teaching, research and student life can develop together.",
  },
] as const satisfies readonly LeadershipNarrativeStep[];

export const studentDevelopmentThemes = [
  { id: "scholarship", index: "01", title: "Scholarship" },
  { id: "culture", index: "02", title: "Culture" },
  { id: "sport", index: "03", title: "Sport" },
  { id: "leadership", index: "04", title: "Leadership" },
] as const satisfies readonly StudentDevelopmentTheme[];

export const studentDevelopment = {
  label: "Beyond the Classroom",
  summary:
    "The institutional philosophy recognizes student development as broader than degree attainment, with communication, culture, sport and leadership complementing scholarship.",
} as const;
