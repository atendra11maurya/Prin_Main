import { researchAreas, type ResearchArea } from "@/data/research";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchGrid({ compact = false }: { compact?: boolean }) {
  const areas: readonly ResearchArea[] = compact ? researchAreas.slice(0, 4) : researchAreas;
  return (
    <div className={`research-grid${compact ? " research-grid--compact" : ""}`}>
      {areas.map((area, index) => (
        <Reveal key={area.id} className="research-area" delay={index * 70}>
          <div className="research-area-head">
            <span>{area.index}</span>
            <i />
          </div>
          <h3>{area.title}</h3>
          <p>{area.summary}</p>
          {area.notation && (
            <div className="notation-row">
              {area.notation.map((notation) => <span key={notation}>{notation}</span>)}
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
