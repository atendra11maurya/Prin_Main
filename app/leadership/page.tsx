import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { InfrastructureStory } from "@/components/leadership/InfrastructureStory";
import { VisionGrid } from "@/components/leadership/VisionGrid";
import { Timeline } from "@/components/academic/Timeline";
import {
  governance,
  leadershipNarrative,
  studentDevelopment,
  studentDevelopmentThemes,
  visionForEducation,
} from "@/data/leadership";
import { profile } from "@/data/profile";
import { createPageMetadata, sitePages } from "@/data/site";

export const metadata = createPageMetadata(sitePages.leadership);

export default function LeadershipPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        eyebrow="Leadership / Institution"
        title="Leadership grounded in education."
        intro="Principalship framed through educational purpose, formal governance, student development and the conditions in which scholarship can flourish."
        code="L / 02"
        illustrationType="leadership"
      />

      <section className="page-section leadership-vision" aria-labelledby="leadership-vision-title">
        <div className="section-shell">
          <SectionLabel index="01">Vision / Education</SectionLabel>
          <div className="vision-intro-grid">
            <Reveal className="vision-headline">
              <h2 id="leadership-vision-title">
                Education<br />
                beyond<br />
                information.
              </h2>
            </Reveal>
            <Reveal className="vision-intro-copy" delay={120}>
              <p>{visionForEducation.summary}</p>
            </Reveal>
          </div>
          <VisionGrid />
        </div>
      </section>

      <section className="pinned-narrative" aria-labelledby="narrative-title">
        <div className="section-shell pinned-grid">
          <div className="pinned-title">
            <SectionLabel index="02" light>Institution / Building</SectionLabel>
            <h2 id="narrative-title">A leadership<br />sequence.</h2>
            <p>Five connected dimensions of institutional work.</p>
          </div>
          <div className="pinned-steps">
            {leadershipNarrative.map((step) => (
              <Reveal className="pinned-step" key={step.id}>
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InfrastructureStory standalone />

      <section className="page-section governance-page-section" aria-labelledby="governance-page-title">
        <div className="section-shell">
          <SectionLabel index="04">Governance / Structure</SectionLabel>
          <div className="governance-page-grid">
            <Reveal className="governance-copy">
              <h2 id="governance-page-title">{governance.role}</h2>
              <h3>{governance.body} · {governance.institution}</h3>
              <p>{governance.description}</p>
            </Reveal>
            <div className="governance-roles">
              <div className="governance-role-item">
                <span>Office</span>
                <strong>Principal</strong>
              </div>
              <div className="governance-roles-divider" />
              <div className="governance-role-item">
                <span>Governance Role</span>
                <strong>Member Secretary</strong>
              </div>
              <div className="governance-roles-divider" />
              <div className="governance-role-item">
                <span>Governing Structure</span>
                <strong>Governing Body · MLNC</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-student-section" aria-labelledby="student-title">
        <div className="section-shell">
          <SectionLabel index="05" light>Student / Development</SectionLabel>
          <div className="beyond-heading">
            <Reveal><h2 id="student-title">Growth beyond<br />degree attainment.</h2></Reveal>
            <p>{studentDevelopment.summary}</p>
          </div>
          <div className="beyond-concepts">
            {studentDevelopmentThemes.map((theme) => (
              <div key={theme.id}><span>{theme.index}</span><strong>{theme.title}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section leadership-timeline" aria-labelledby="leadership-timeline-title">
        <div className="section-shell">
          <SectionLabel index="06">Timeline / Institution</SectionLabel>
          <div className="page-section-heading">
            <h2 id="leadership-timeline-title">Principalship &<br />institutional milestones.</h2>
            <p>Selected milestones in institutional development and administration.</p>
          </div>
          <Timeline mode="institutional" />
        </div>
      </section>

      <section className="page-contact-rail page-contact-rail--maroon" aria-labelledby="leadership-contact-title">
        <div className="section-shell">
          <div>
            <h2 id="leadership-contact-title" className="page-contact-heading">Institutional correspondence</h2>
            <a className="page-contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <ArrowLink href={`mailto:${profile.email}`} variant="light">Contact the Principal&apos;s Office</ArrowLink>
        </div>
      </section>
    </main>
  );
}
