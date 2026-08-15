import { infrastructureMilestone } from "@/data/milestones";
import { nbccInfrastructureSource } from "@/data/sources";
import { Reveal } from "@/components/ui/Reveal";
import { SourceLink } from "@/components/ui/SourceLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function InfrastructureStory({
  standalone = false,
  index = "06",
}: {
  standalone?: boolean;
  index?: string;
}) {
  return (
    <section className={`infrastructure${standalone ? " infrastructure--standalone" : ""}`} aria-labelledby="infrastructure-title">
      <div className="infrastructure-shell">
        <div className="infrastructure-sticky">
          {index && (
            <SectionLabel index={index} light>
              Development / Infrastructure
            </SectionLabel>
          )}
          <p className="dark-label" style={{ marginTop: index ? "24px" : undefined }}>
            {infrastructureMilestone.agreementDate}
          </p>
          <h2 id="infrastructure-title">
            <span className="rupee">₹</span>213<span>CR</span>
          </h2>
          <p className="infrastructure-label">{infrastructureMilestone.label}</p>
          <p className="infrastructure-attribution">{infrastructureMilestone.attribution}</p>
          <div className="partner-line"><i />{infrastructureMilestone.partnershipLine}</div>
        </div>
        <div className="infrastructure-steps">
          {infrastructureMilestone.scope.map((item, index) => (
            <Reveal className="infrastructure-step" key={item.id} delay={index * 60}>
              <span>{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
          <div className="infrastructure-context">
            <p>{infrastructureMilestone.summary}</p>
            <SourceLink href={nbccInfrastructureSource.url} label="Source" ariaLabel="View source for the ₹213 crore infrastructure development MoU" />
          </div>
        </div>
      </div>
    </section>
  );
}
