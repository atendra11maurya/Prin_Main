import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { verifiedSources } from "@/data/sources";
import type { SourceCategory } from "@/data/sources";
import { SourceLink } from "@/components/ui/SourceLink";

export const metadata: Metadata = {
  title: "Sources & Verification",
  description:
    "Institutional, academic and publication sources supporting the factual record presented across this portfolio.",
};

const categoryOrder: SourceCategory[] = [
  "CURRENT APPOINTMENTS",
  "HISTORICAL APPOINTMENTS",
  "GOVERNANCE",
  "INSTITUTIONAL DEVELOPMENT",
  "RESEARCH & ACADEMIC",
];

export default function SourcesPage() {
  const groupedSources = verifiedSources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = [];
    }
    acc[source.category].push(source);
    return acc;
  }, {} as Record<SourceCategory, typeof verifiedSources[number][]>);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Verification / Appendix"
        title="Sources & Verification"
        intro="Institutional, academic and publication sources supporting the factual record presented across this portfolio."
        code="V / 04"
        illustrationType="academic"
      />

      {categoryOrder.map((category, index) => {
        const sources = groupedSources[category];
        if (!sources || sources.length === 0) return null;

        return (
          <section className="page-section sources-section" key={category} aria-labelledby={`cat-${index}`}>
            <div className="section-shell">
              <SectionLabel index={`0${index + 1}`}>{category}</SectionLabel>
              <div className="sources-list">
                {sources.map((source) => (
                  <article className="source-record" key={source.id}>
                    <h3>{source.claim}</h3>
                    <div className="source-meta">
                      <div className="source-meta-row">
                        <span>Source</span>
                        <strong>{source.organization}</strong>
                      </div>
                      <div className="source-meta-row">
                        <span>Type</span>
                        <strong>{source.sourceType}</strong>
                      </div>
                      {source.date && (
                        <div className="source-meta-row">
                          <span>Date</span>
                          <strong>{source.date}</strong>
                        </div>
                      )}
                    </div>
                    <div className="source-action">
                      <SourceLink href={source.url} label="View Source" ariaLabel={`View source for ${source.claim}`} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
