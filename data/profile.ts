export type EducationRecord = {
  qualification: string;
  institution?: string;
  year?: number;
};

export type PreviousPosition = {
  title: string;
  institution?: string;
  startYear?: number;
  endYear?: number;
};

export type Profile = {
  name: string;
  displayName: string;
  firstName: string;
  lastName: string;
  currentRole: string;
  academicRole: string;
  department: string;
  college: string;
  university: string;
  location: string;
  email: string;
  governanceRole: string;
  education?: readonly EducationRecord[];
  phone?: string;
  googleScholar?: string;
  orcid?: string;
  scopus?: string;
  linkedin?: string;
  awards?: readonly string[];
  supervisedStudents?: readonly string[];
  courses?: readonly string[];
  previousPositions?: readonly PreviousPosition[];
};

export type ProfileRole = {
  id: "principal" | "professor" | "governance" | "research";
  label: string;
  detail: string;
};

export const profile = {
  name: "Yogeshwar Sharma",
  displayName: "Prof. Yogeshwar Sharma",
  firstName: "Yogeshwar",
  lastName: "Sharma",
  currentRole: "Principal",
  academicRole: "Professor",
  department: "Department of Chemistry",
  college: "Motilal Nehru College",
  university: "University of Delhi",
  location: "New Delhi, India",
  email: "principal@mln.du.ac.in",
  governanceRole: "Member Secretary, Governing Body",
} as const satisfies Profile;

export const profileRoles = [
  {
    id: "principal",
    label: "Principal",
    detail: profile.college,
  },
  {
    id: "professor",
    label: "Professor",
    detail: profile.department,
  },
  {
    id: "governance",
    label: "Governance",
    detail: profile.governanceRole,
  },
  {
    id: "research",
    label: "Research",
    detail: "Chemical & Reaction Kinetics",
  },
] as const satisfies readonly ProfileRole[];

export const profileIntro = {
  institutionalLabel: "Principal · Professor of Chemistry",
  institutionLine: "Motilal Nehru College · University of Delhi",
  identityLine: "Academic · Researcher · Institutional Leader",
  summary:
    "Professor of Chemistry and Principal of Motilal Nehru College, working across scholarship, education and institutional leadership.",
} as const;

export const profileSeo = {
  title: "Prof. Yogeshwar Sharma | Principal, Motilal Nehru College",
  description:
    "Prof. Yogeshwar Sharma is Principal of Motilal Nehru College, University of Delhi, and Professor of Chemistry, with a public academic profile spanning research and institutional leadership.",
  knowsAbout: [
    "Chemical Kinetics",
    "Reaction Kinetics",
    "Coordination Chemistry",
    "Higher Education",
    "Academic Leadership",
  ],
} as const;
