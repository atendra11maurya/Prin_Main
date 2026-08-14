import { Hero } from "@/components/home/Hero";
import { ResearchGrid } from "@/components/research/ResearchGrid";
import { PublicationList } from "@/components/research/PublicationList";
import { InfrastructureStory } from "@/components/leadership/InfrastructureStory";
import { Timeline } from "@/components/academic/Timeline";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { KineticGraphic } from "@/components/ui/KineticGraphic";
import { PortraitFrame } from "@/components/ui/PortraitFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profile, profileRoles } from "@/data/profile";
import { researchOverview } from "@/data/research";
import { featuredPublications, publicationIndex, publications } from "@/data/publications";
import {
  governance,
  leadershipTransition,
  studentDevelopment,
  studentDevelopmentThemes,
  visionForEducation,
  visionThemes,
} from "@/data/leadership";
import { teachingOverview, teachingThemes } from "@/data/teaching";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />

      <section className="role-strip" aria-label="Current academic and institutional roles">
        <div className="role-strip-inner">
          {profileRoles.map((role, index) => (
            <div className="role-item" key={role.id}>
              <span>0{index + 1}</span>
              <strong>{role.label}</strong>
              <p>{role.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vision-section" aria-labelledby="vision-title">
        <div className="section-shell">
          <SectionLabel index="01">Vision / Education</SectionLabel>
          <div className="vision-grid">
            <Reveal className="vision-headline">
              <h2 id="vision-title">Education<br /><span>beyond</span><br />information.</h2>
            </Reveal>
            <div className="vision-body">
              <Reveal>
                <p className="large-copy">{visionForEducation.summary}</p>
              </Reveal>
              <div className="vision-themes">
                {visionThemes.map((theme, index) => (
                  <Reveal className="vision-theme" key={theme.id} delay={index * 70}>
                    <span>0{index + 1}</span>
                    <h3>{theme.title}</h3>
                    <p>{theme.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <Reveal className="vision-statement">
            <p>{visionForEducation.secondaryStatement}</p>
          </Reveal>
        </div>
      </section>

      <section className="research-intro" aria-labelledby="research-title">
        <div className="section-shell">
          <SectionLabel index="02">Scholarship / Chemistry</SectionLabel>
          <div className="research-intro-grid">
            <Reveal>
              <h2 id="research-title">{researchOverview.title}</h2>
              <p className="section-intro">{researchOverview.summary}</p>
              <ArrowLink href="/research" variant="text">Enter Research & Scholarship</ArrowLink>
            </Reveal>
            <Reveal delay={120}>
              <KineticGraphic />
            </Reveal>
          </div>
          <ResearchGrid compact />
        </div>
      </section>

      <section className="featured-research" aria-labelledby="featured-title">
        <div className="section-shell">
          <SectionLabel index="03" light>Featured / Research</SectionLabel>
          <div className="featured-grid">
            <Reveal className="featured-primary">
              <div className="featured-year">{featuredPublications[0]?.year}</div>
              <div className="featured-copy">
                <p className="blue-meta">NI(II) / KINETICS / COMPLEXATION</p>
                <h2 id="featured-title">{featuredPublications[0]?.title}</h2>
                <p>{featuredPublications[0]?.journal}</p>
                {featuredPublications[0]?.authors && (
                  <small>Authors include {featuredPublications[0].authors.join(" · ")}</small>
                )}
              </div>
            </Reveal>
            <div className="featured-supporting">
              {featuredPublications.slice(1).map((publication, index) => (
                <Reveal className="featured-support" key={publication.id} delay={index * 90}>
                  <span>{publication.year}</span>
                  <h3>{publication.title}</h3>
                  <p>{publication.journal}</p>
                </Reveal>
              ))}
              <ArrowLink href="/research#publication-index" variant="light">View Publication Index</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="publication-preview" aria-labelledby="publication-title">
        <div className="section-shell">
          <div className="section-title-row">
            <div>
              <SectionLabel index="04">Bibliography / Selected</SectionLabel>
              <h2 id="publication-title">Selected research.</h2>
            </div>
            <p>{publicationIndex.note}</p>
          </div>
          <PublicationList items={publications} limit={4} />
          <div className="section-end-link"><ArrowLink href="/research#publication-index" variant="outline">Complete Selected Index</ArrowLink></div>
        </div>
      </section>

      <section className="leadership-transition" aria-labelledby="leadership-transition-title">
        <div className="transition-grid" aria-hidden="true" />
        <div className="section-shell">
          <SectionLabel index="05" light>{leadershipTransition.label}</SectionLabel>
          <Reveal>
            <h2 id="leadership-transition-title">From scholarship<br />to institution<br /><span>building.</span></h2>
          </Reveal>
          <Reveal className="transition-copy" delay={120}>
            <p>{leadershipTransition.summary}</p>
            <ArrowLink href="/leadership" variant="light">Leadership & Vision</ArrowLink>
          </Reveal>
        </div>
      </section>

      <InfrastructureStory />

      <section className="institution-section" aria-labelledby="institution-title">
        <div className="section-shell">
          <SectionLabel index="07">Institution / MLNC</SectionLabel>
          <div className="institution-grid">
            <Reveal className="institution-image">
              <PortraitFrame src="/images/mlnc-campus.jpg" alt="Motilal Nehru College campus" campus />
            </Reveal>
            <div className="institution-copy">
              <Reveal>
                <p className="coordinate">28.5386° N · 77.1688° E</p>
                <h2 id="institution-title">An institution<br />in motion.</h2>
                <p>Motilal Nehru College provides the institutional context for a leadership outlook that brings academics, student culture, sport, governance and development into one educational environment.</p>
              </Reveal>
              <div className="institution-keywords" aria-label="Institutional themes">
                <span>Academics</span><span>Culture</span><span>Sport</span><span>Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="governance-section" aria-labelledby="governance-title">
        <div className="section-shell governance-grid">
          <div className="governance-index" aria-hidden="true"><span>G</span><i /></div>
          <Reveal className="governance-copy">
            <SectionLabel index="08">{governance.label}</SectionLabel>
            <h2 id="governance-title">{governance.role}</h2>
            <h3>{governance.body}<br />{governance.institution}</h3>
            <p>{governance.description}</p>
          </Reveal>
          <div className="governance-roles">
            <span>Principal</span><i /><span>Member Secretary</span><i /><span>Professor</span>
          </div>
        </div>
      </section>

      <section className="academic-section" aria-labelledby="academic-title">
        <div className="section-shell">
          <SectionLabel index="09">Academic / Journey</SectionLabel>
          <div className="academic-heading-grid">
            <Reveal><h2 id="academic-title">Teaching &<br />academic life.</h2></Reveal>
            <Reveal delay={100}>
              <p>{teachingOverview.summary}</p>
              <ArrowLink href="/academic" variant="text">Academic Journey</ArrowLink>
            </Reveal>
          </div>
          <div className="teaching-themes">
            {teachingThemes.map((theme) => (
              <article key={theme.id}>
                <span>{theme.index}</span>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </article>
            ))}
          </div>
          <Timeline limit={4} />
        </div>
      </section>

      <section className="beyond-section" aria-labelledby="beyond-title">
        <div className="section-shell">
          <SectionLabel index="10" light>Student / Development</SectionLabel>
          <div className="beyond-heading">
            <Reveal><h2 id="beyond-title">Beyond the<br />classroom.</h2></Reveal>
            <p>{studentDevelopment.summary}</p>
          </div>
          <div className="beyond-concepts">
            {studentDevelopmentThemes.map((theme) => (
              <div key={theme.id}><span>{theme.index}</span><strong>{theme.title}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="synthesis-section">
        <div className="section-shell synthesis-grid">
          <SectionLabel index="11">Academic Identity</SectionLabel>
          <Reveal className="synthesis-statement">
            <p>Research informs teaching.<br />Teaching informs leadership.<br /><span>Leadership creates the conditions for both.</span></p>
          </Reveal>
          <div className="synthesis-links">
            <ArrowLink href="/research" variant="outline">Research & Scholarship</ArrowLink>
            <ArrowLink href="/leadership" variant="outline">Institutional Leadership</ArrowLink>
            <ArrowLink href="/academic" variant="outline">Academic Journey</ArrowLink>
          </div>
        </div>
      </section>

      <section id="correspondence" className="contact-section" aria-labelledby="contact-title">
        <div className="section-shell contact-shell">
          <SectionLabel index="12" light>Correspondence</SectionLabel>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2 id="contact-title">Academic &<br />institutional<br />correspondence.</h2>
            </div>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <div className="contact-email-inner">
                <span className="contact-email-label">Principal&apos;s Office</span>
                <strong className="contact-email-address">{profile.email}</strong>
              </div>
              <span className="contact-email-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
