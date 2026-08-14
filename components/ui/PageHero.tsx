import { SectionLabel } from "./SectionLabel";
import { HeroIllustration } from "./HeroIllustration";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  code: string;
  illustrationType?: "research" | "leadership" | "academic";
};

export function PageHero({ eyebrow, title, intro, code, illustrationType }: PageHeroProps) {
  const type: "research" | "leadership" | "academic" =
    illustrationType ??
    (code.startsWith("R") ? "research" : code.startsWith("L") ? "leadership" : "academic");

  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="page-hero-copy">
          <SectionLabel index={code}>{eyebrow}</SectionLabel>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="page-hero-illustration-wrap">
          <HeroIllustration type={type} />
        </div>
      </div>
    </section>
  );
}
