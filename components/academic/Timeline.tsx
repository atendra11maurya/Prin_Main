import { academicJourney, type AcademicJourneyEntry } from "@/data/teaching";
import { institutionalMilestones, type InstitutionalMilestone } from "@/data/milestones";
import { Reveal } from "@/components/ui/Reveal";

type TimelineProps = {
  mode?: "academic" | "institutional";
  limit?: number;
};

type TimelineEntry = AcademicJourneyEntry | InstitutionalMilestone;

export function Timeline({ mode = "academic", limit }: TimelineProps) {
  const source: readonly TimelineEntry[] = mode === "institutional" ? institutionalMilestones : academicJourney;
  const entries = typeof limit === "number" ? source.slice(-limit) : source;
  return (
    <div className={`timeline timeline--${mode}`}>
      {entries.map((entry, index) => (
        <Reveal className="timeline-entry" key={entry.id} delay={index * 60}>
          <div className="timeline-period">{entry.period}</div>
          <div className="timeline-marker"><span /></div>
          <div className="timeline-copy">
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
