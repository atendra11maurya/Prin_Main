import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { KineticGraphic } from "@/components/ui/KineticGraphic";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ResearchGrid } from "@/components/research/ResearchGrid";
import { PublicationList } from "@/components/research/PublicationList";
import { JsonLd } from "@/components/seo/JsonLd";
import { featuredPublications, publicationIndex, publications } from "@/data/publications";
import { researchMethods, researchOverview, researchSpecies } from "@/data/research";
import { profile } from "@/data/profile";
import { createPageMetadata, sitePages } from "@/data/site";
import { researchStructuredData } from "@/data/structured-data";

export const metadata = createPageMetadata(sitePages.research);

export default function ResearchPage() {
  const featuredStudy = featuredPublications[0] ?? publications[0];

  return (
    <main id="main-content" tabIndex={-1}>
      {researchStructuredData && <JsonLd data={researchStructuredData} />}
      <PageHero
        eyebrow="Chemistry / Scholarship"
        title="Research & Scholarship"
        intro="Research across chemical kinetics, complexation and mechanistic studies, involving nickel, cobalt and copper transition-metal systems."
        code="R / 01"
        illustrationType="research"
      />

      <section className="page-section research-focus-section" aria-labelledby="research-focus-title">
        <div className="section-shell">
          <SectionLabel index="01">Research / Focus</SectionLabel>
          <div className="page-section-heading">
            <Reveal><h2 id="research-focus-title">Understanding interaction<br />through kinetics.</h2></Reveal>
            <p>{researchOverview.summary}</p>
          </div>
          <ResearchGrid />
        </div>
      </section>

      <section className="reaction-section" aria-labelledby="reaction-title">
        <div className="section-shell reaction-grid">
          <div>
            <SectionLabel index="02" light>Concept / Pathway</SectionLabel>
            <Reveal><h2 id="reaction-title">Reactants.<br />Interaction.<br /><span>Complex.</span></h2></Reveal>
            <div className="species-row">
              {researchSpecies.map((species) => <span key={species}>{species}</span>)}
            </div>
          </div>
          <Reveal delay={100}>
            <KineticGraphic light />
            <p className="graphic-note">A conceptual, non-quantitative reaction pathway.</p>
          </Reveal>
        </div>
      </section>

      <section className="page-section featured-study" aria-labelledby="study-title">
        <div className="section-shell">
          <SectionLabel index="03">Featured / Study</SectionLabel>
          <div className="study-grid">
            <div className="study-index"><span>{featuredStudy.year}</span><i /></div>
            <Reveal>
              <p className="blue-meta">{featuredStudy.journal.toUpperCase()}</p>
              <h2 id="study-title">{featuredStudy.title}</h2>
              <p className="study-authors">{featuredStudy.authors?.join(" · ")}</p>
              <div className="publication-tags">
                {featuredStudy.tags?.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="publication-index" className="page-section publication-index-section" aria-labelledby="publication-index-title">
        <div className="section-shell">
          <div className="section-title-row">
            <div>
              <SectionLabel index="04">Index / Publications</SectionLabel>
              <h2 id="publication-index-title">Research publications.</h2>
            </div>
            <p>{publicationIndex.note}</p>
          </div>
          <PublicationList />
        </div>
      </section>

      <section className="methods-section" aria-labelledby="methods-title">
        <div className="section-shell">
          <SectionLabel index="05" light>Methods / High Level</SectionLabel>
          <div className="methods-grid">
            <Reveal><h2 id="methods-title">Kinetic observation.<br />Mechanistic interpretation.</h2></Reveal>
            <div className="method-list">
              {researchMethods.map((method, index) => (
                <article key={method.id}>
                  <span>0{index + 1}</span>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-contact-rail" aria-labelledby="research-contact-title">
        <div className="section-shell">
          <div>
            <h2 id="research-contact-title" className="page-contact-heading">Academic correspondence</h2>
            <a className="page-contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <ArrowLink href={`mailto:${profile.email}`} variant="primary">Contact the Principal&apos;s Office</ArrowLink>
        </div>
      </section>
    </main>
  );
}
