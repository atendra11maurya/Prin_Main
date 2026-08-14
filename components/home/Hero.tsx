import { profile, profileIntro } from "@/data/profile";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PortraitFrame } from "@/components/ui/PortraitFrame";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-maroon-plane" aria-hidden="true">
        <span>CHEMISTRY / LEADERSHIP</span>
      </div>
      <div className="hero-inner">
        <div className="hero-kicker hero-enter hero-enter--one">
          <span>{profileIntro.institutionalLabel}</span>
          <i />
          <span>{profile.location}</span>
        </div>

        <div className="hero-title-wrap">
          <h1 id="hero-title">
            <span className="hero-name hero-name--first"><span>{profile.firstName}</span></span>
            <span className="hero-name hero-name--last"><span>{profile.lastName}</span></span>
          </h1>
          <p className="hero-institution hero-enter hero-enter--three">{profileIntro.institutionLine}</p>
        </div>

        <div className="hero-portrait hero-enter hero-enter--portrait">
          <div className="portrait-coordinate" aria-hidden="true">28.54° N / 77.20° E</div>
          <PortraitFrame />
        </div>

        <div className="hero-summary hero-enter hero-enter--four">
          <p className="hero-identity">{profileIntro.identityLine}</p>
          <p>{profileIntro.summary}</p>
          <div className="hero-actions">
            <ArrowLink href="/academic" variant="primary">Explore Academic Profile</ArrowLink>
            <ArrowLink href="/research" variant="outline">Research & Publications</ArrowLink>
          </div>
          <ArrowLink href="/leadership" variant="text">Leadership & Vision</ArrowLink>
        </div>

        <div className="hero-side-note" aria-hidden="true">
          <span>PRINCIPAL / MLNC</span>
          <i />
          <small>01 — 04</small>
        </div>
      </div>
    </section>
  );
}
