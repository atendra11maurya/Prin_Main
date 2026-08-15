import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Timeline } from "@/components/academic/Timeline";
import { PublicationList } from "@/components/research/PublicationList";
import { publications } from "@/data/publications";
import { researchOverview } from "@/data/research";
import { academicPhilosophy, teachingOverview, teachingThemes } from "@/data/teaching";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Academic Journey",
  description:
    "The academic journey of Prof. Yogeshwar Sharma as Professor of Chemistry, researcher, educator and Principal of Motilal Nehru College.",
};

export default function AcademicPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Academic / Chemistry"
        title="Academic Journey"
        intro="A public academic record shaped by Chemistry, kinetic and mechanistic research, teaching, and an evolving responsibility for institutional leadership."
        code="A / 03"
        illustrationType="academic"
      />

      <section className="page-section professor-section" aria-labelledby="professor-title">
        <div className="section-shell">
          <SectionLabel index="01">Professor / Chemistry</SectionLabel>
          <div className="professor-grid">
            <Reveal>
              <h2 id="professor-title">
                Professor<br />
                of<br />
                <span>Chemistry.</span>
              </h2>
            </Reveal>
            <div className="professor-copy">
              <p>{teachingOverview.summary}</p>
              <div className="professor-meta">
                <span>Department</span><strong>{profile.department}</strong>
                <span>Institution</span><strong>{profile.college}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teaching-page-section" aria-labelledby="teaching-page-title">
        <div className="section-shell">
          <SectionLabel index="02" light>Teaching / Academic Life</SectionLabel>
          <div className="page-section-heading page-section-heading--light">
            <h2 id="teaching-page-title">Concept. Evidence.<br />Interpretation.</h2>
            <p>Teaching is presented here without invented course lists: through the intellectual practices that connect chemical observation to scientific understanding.</p>
          </div>
          <div className="teaching-page-grid">
            {teachingThemes.map((theme) => (
              <article key={theme.id}>
                <span>{theme.index}</span>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section research-evolution" aria-labelledby="evolution-title">
        <div className="section-shell">
          <SectionLabel index="03">Research / Evolution</SectionLabel>
          <div className="page-section-heading">
            <Reveal><h2 id="evolution-title">Scholarship across<br />chemical interaction.</h2></Reveal>
            <div><p>{researchOverview.summary}</p><ArrowLink href="/research" variant="text">Research & Scholarship</ArrowLink></div>
          </div>
          <PublicationList items={publications.filter((publication) => [1997, 2008, 2017, 2018].includes(publication.year ?? 0))} limit={4} />
        </div>
      </section>

      <section className="academic-timeline-page" aria-labelledby="journey-title">
        <div className="section-shell">
          <SectionLabel index="04" light>Journey / Public Record</SectionLabel>
          <div className="page-section-heading page-section-heading--light">
            <h2 id="journey-title">Scholarship to<br />principalship.</h2>
            <p>Principalship appears as part of an academic journey—not as a replacement for the work of Chemistry, research and teaching.</p>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="page-section philosophy-section" aria-labelledby="philosophy-title">
        <div className="section-shell">
          <SectionLabel index="05">Academic / Philosophy</SectionLabel>
          <div className="philosophy-grid">
            <Reveal><h2 id="philosophy-title">{academicPhilosophy.title}.</h2></Reveal>
            <div>
              <p className="large-copy">{academicPhilosophy.summary}</p>
              <p className="editorial-note">This is editorially paraphrased from the institutional outlook expressed through the Principal&apos;s Desk; it is not presented as a direct quotation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-contact-rail">
        <div className="section-shell">
          <div><span>Academic & institutional correspondence</span><h2>{profile.email}</h2></div>
          <ArrowLink href={`mailto:${profile.email}`} variant="primary">Contact the Principal&apos;s Office</ArrowLink>
        </div>
      </section>
    </main>
  );
}
