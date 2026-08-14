import { infrastructureMilestone } from "@/data/milestones";
import { Reveal } from "@/components/ui/Reveal";

export function InfrastructureStory({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={`infrastructure${standalone ? " infrastructure--standalone" : ""}`} aria-labelledby="infrastructure-title">
      <div className="infrastructure-shell">
        <div className="infrastructure-sticky">
          <p className="dark-label">{infrastructureMilestone.agreementDate}</p>
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
            <span>Institutional milestone · not a personal metric</span>
          </div>
        </div>
      </div>
    </section>
  );
}
