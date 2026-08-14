export type MilestoneKind = "appointment" | "partnership" | "construction" | "governance";

export type InstitutionalMilestone = {
  id: string;
  period: string;
  sortYear: number;
  kind: MilestoneKind;
  title: string;
  description: string;
  date?: string;
  status: "recorded" | "current";
};

export type InfrastructureFocus = {
  id: "auditorium" | "academic-expansion" | "hostel" | "phased-development";
  index: string;
  title: string;
  description: string;
  status: "planned" | "approach";
};

export const infrastructureMilestone = {
  label: "Infrastructure Development Partnership",
  title: "Infrastructure for the next chapter",
  displayValue: "₹213 CR",
  value: "₹213 crore",
  agreementDate: "December 2024",
  partners: ["NBCC (India) Limited", "Motilal Nehru College"],
  partnershipLine: "NBCC × Motilal Nehru College",
  attribution:
    "During Prof. Yogeshwar Sharma's principalship, Motilal Nehru College entered a ₹213 crore infrastructure-development partnership with NBCC (India) Limited.",
  summary:
    "The agreement covers a new auditorium, expansion of academic buildings and modern hostel facilities, with development intended to proceed in phases.",
  scope: [
    {
      id: "auditorium",
      index: "01",
      title: "Auditorium",
      description: "A new auditorium is included in the planned development.",
      status: "planned",
    },
    {
      id: "academic-expansion",
      index: "02",
      title: "Academic Expansion",
      description: "Expansion of academic buildings forms part of the agreement.",
      status: "planned",
    },
    {
      id: "hostel",
      index: "03",
      title: "Hostel Facilities",
      description: "Modern hostel facilities are included in the planned development.",
      status: "planned",
    },
    {
      id: "phased-development",
      index: "04",
      title: "Phased Development",
      description: "Implementation is intended to take place across multiple phases.",
      status: "approach",
    },
  ] satisfies readonly InfrastructureFocus[],
} as const;

export const institutionalMilestones = [
  {
    id: "officiating-principal-2023",
    period: "2023",
    sortYear: 2023,
    kind: "appointment",
    title: "Officiating Principal",
    description: "Appointed Officiating Principal of Motilal Nehru College with effect from 6 February 2023.",
    date: "2023-02-06",
    status: "recorded",
  },
  {
    id: "nbcc-partnership-2024",
    period: "December 2024",
    sortYear: 2024,
    kind: "partnership",
    title: "Infrastructure development partnership",
    description:
      "Motilal Nehru College and NBCC (India) Limited signed a memorandum of understanding valued at ₹213 crore for major infrastructure development during his principalship.",
    status: "recorded",
  },
  {
    id: "auditorium-foundation-2025",
    period: "February 2025",
    sortYear: 2025,
    kind: "construction",
    title: "Auditorium foundation-stone milestone",
    description:
      "The college's official notice archive records a foundation-stone ceremony for construction of the auditorium.",
    status: "recorded",
  },
  {
    id: "principal-governance-current",
    period: "Current",
    sortYear: 9999,
    kind: "governance",
    title: "Principal & Member Secretary",
    description: "Current Motilal Nehru College records list Prof. Yogeshwar Sharma as Principal and Member Secretary of the Governing Body.",
    status: "current",
  },
] as const satisfies readonly InstitutionalMilestone[];

export const principalshipTimeline = institutionalMilestones;
