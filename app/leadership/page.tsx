import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { InfrastructureStory } from "@/components/leadership/InfrastructureStory";
import { Timeline } from "@/components/academic/Timeline";
import {
  governance,
  leadershipNarrative,
  studentDevelopment,
  studentDevelopmentThemes,
  visionForEducation,
  visionThemes,
} from "@/data/leadership";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Leadership & Institution",
  description:
    "Prof. Yogeshwar Sharma's educational vision, principalship, institutional governance and leadership at Motilal Nehru College.",
};

export default function LeadershipPage() {
  return (
    <main id="main-content">
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
          <div className="leadership-vision-grid">
            <Reveal><h2 id="leadership-vision-title">{visionForEducation.title}</h2></Reveal>
            <div>
              <p className="large-copy">{visionForEducation.summary}</p>
              <div className="leadership-theme-list">
                {visionThemes.map((theme, index) => (
                  <div key={theme.id}><span>0{index + 1}</span><strong>{theme.title}</strong><p>{theme.description}</p></div>
                ))}
              </div>
            </div>
          </div>
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
            <div className="governance-letter" aria-hidden="true">G</div>
            <Reveal>
              <h2 id="governance-page-title">{governance.role}</h2>
              <h3>{governance.body} · {governance.institution}</h3>
              <p>{governance.description}</p>
            </Reveal>
            <div className="governance-coordinate">
              <span>FORMAL ROLE</span><i /><span>CURRENT RECORD</span>
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
            <p>Selected public milestones are shown with institutional attribution and without implying sole authorship.</p>
          </div>
          <Timeline mode="institutional" />
        </div>
      </section>

      <section className="page-contact-rail page-contact-rail--maroon">
        <div className="section-shell">
          <div><span>Institutional correspondence</span><h2>{profile.email}</h2></div>
          <ArrowLink href={`mailto:${profile.email}`} variant="light">Contact the Principal&apos;s Office</ArrowLink>
        </div>
      </section>
    </main>
  );
}
