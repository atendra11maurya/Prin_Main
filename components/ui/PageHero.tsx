import { SectionLabel } from "./SectionLabel";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  code: string;
  accent?: string;
};

export function PageHero({ eyebrow, title, intro, code, accent }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="page-hero-copy">
          <SectionLabel index={code}>{eyebrow}</SectionLabel>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="page-hero-index" aria-hidden="true">
          <span>{accent ?? code}</span>
          <i />
          <small>PROF. YS / DU</small>
        </div>
      </div>
    </section>
  );
}
