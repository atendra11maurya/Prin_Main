import { visionThemes } from "@/data/leadership";
import { Reveal } from "@/components/ui/Reveal";

export function VisionGrid() {
  return (
    <div className="research-grid research-grid--compact">
      {visionThemes.map((theme, index) => (
        <Reveal key={theme.id} className="research-area" delay={index * 70}>
          <div className="research-area-head">
            <span>0{index + 1}</span>
            <i />
          </div>
          <h3>{theme.title}</h3>
          <p>{theme.description}</p>
        </Reveal>
      ))}
    </div>
  );
}
