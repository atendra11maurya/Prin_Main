export function HeroIllustration({ type }: { type: "research" | "leadership" | "academic" }) {
  if (type === "research") {
    return (
      <div className="hero-illustration hero-illustration--research" aria-hidden="true">
        <svg viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
          {/* Grid lines */}
          <line x1="30" y1="40" x2="310" y2="40" stroke="rgba(176,141,87,0.25)" strokeDasharray="3 3" />
          <line x1="30" y1="120" x2="310" y2="120" stroke="rgba(176,141,87,0.25)" strokeDasharray="3 3" />
          <line x1="30" y1="200" x2="310" y2="200" stroke="rgba(176,141,87,0.25)" strokeDasharray="3 3" />
          <line x1="30" y1="280" x2="310" y2="280" stroke="rgba(176,141,87,0.25)" strokeDasharray="3 3" />
          
          <line x1="60" y1="20" x2="60" y2="290" stroke="rgba(176,141,87,0.2)" strokeDasharray="3 3" />
          <line x1="170" y1="20" x2="170" y2="290" stroke="rgba(176,141,87,0.2)" strokeDasharray="3 3" />
          <line x1="280" y1="20" x2="280" y2="290" stroke="rgba(176,141,87,0.2)" strokeDasharray="3 3" />

          {/* Molecular Ring 1 (Hexagon) */}
          <polygon points="120,70 155,50 190,70 190,110 155,130 120,110" stroke="#5b1725" strokeWidth="2.5" fill="rgba(91,23,37,0.06)" />
          <circle cx="155" cy="90" r="22" stroke="#b08d57" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Metal Node Ni(II) */}
          <circle cx="155" cy="90" r="7" fill="#5b1725" />
          <text x="155" y="93.5" textAnchor="middle" fill="#f5f0e7" fontSize="8" fontFamily="var(--mono)" fontWeight="bold">Ni</text>

          {/* Ligand Bond Lines */}
          <line x1="155" y1="50" x2="155" y2="25" stroke="#b08d57" strokeWidth="1.5" />
          <circle cx="155" cy="22" r="4" fill="#b08d57" />

          <line x1="190" y1="110" x2="230" y2="135" stroke="#b08d57" strokeWidth="1.5" />
          <circle cx="233" cy="137" r="4" fill="#b08d57" />

          <line x1="120" y1="110" x2="80" y2="135" stroke="#b08d57" strokeWidth="1.5" />
          <circle cx="77" cy="137" r="4" fill="#b08d57" />

          {/* Kinetic Curve */}
          <path d="M 40 240 Q 90 240, 130 170 T 220 220 T 300 160" fill="none" stroke="#5b1725" strokeWidth="2.5" />
          <path d="M 40 240 Q 90 240, 130 170 T 220 220 T 300 160" fill="none" stroke="#b08d57" strokeWidth="1" strokeDasharray="4 4" />

          {/* Kinetic Energy Nodes */}
          <circle cx="130" cy="170" r="5" fill="#b08d57" />
          <circle cx="220" cy="220" r="4" fill="#5b1725" />
          <circle cx="300" cy="160" r="6" fill="#5b1725" stroke="#b08d57" strokeWidth="2" />

          {/* Annotations */}
          <text x="130" y="156" textAnchor="middle" fill="#5b1725" fontSize="9" fontFamily="var(--mono)" fontWeight="600">Ea (Transition State)</text>
          <text x="235" y="270" fill="#263b4d" fontSize="9" fontFamily="var(--mono)">k_1 / k_-1 kinetics</text>
          <text x="40" y="270" fill="#5b1725" fontSize="9" fontFamily="var(--mono)" fontWeight="700">[Ni(IDA)(H₂O)₃]</text>
        </svg>
        <div className="illustration-caption">
          <span>CHEMICAL KINETICS & MECHANISMS</span>
          <small>TRANSITION METAL COMPLEXATION</small>
        </div>
      </div>
    );
  }

  if (type === "leadership") {
    return (
      <div className="hero-illustration hero-illustration--leadership" aria-hidden="true">
        <svg viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
          {/* Background grid */}
          <line x1="30" y1="50" x2="310" y2="50" stroke="rgba(176,141,87,0.2)" strokeDasharray="3 3" />
          <line x1="30" y1="140" x2="310" y2="140" stroke="rgba(176,141,87,0.2)" strokeDasharray="3 3" />
          <line x1="30" y1="230" x2="310" y2="230" stroke="rgba(176,141,87,0.2)" strokeDasharray="3 3" />

          {/* Institutional Architecture Façade */}
          <polygon points="170,35 60,95 280,95" fill="rgba(91,23,37,0.06)" stroke="#5b1725" strokeWidth="2" />
          <rect x="75" y="95" width="190" height="12" fill="rgba(176,141,87,0.2)" stroke="#b08d57" strokeWidth="1.5" />

          {/* Pillars */}
          <rect x="90" y="107" width="16" height="110" fill="none" stroke="#5b1725" strokeWidth="1.5" />
          <rect x="135" y="107" width="16" height="110" fill="none" stroke="#5b1725" strokeWidth="1.5" />
          <rect x="189" y="107" width="16" height="110" fill="none" stroke="#5b1725" strokeWidth="1.5" />
          <rect x="234" y="107" width="16" height="110" fill="none" stroke="#5b1725" strokeWidth="1.5" />

          {/* Base */}
          <rect x="65" y="217" width="210" height="10" fill="#5b1725" />
          <rect x="50" y="227" width="240" height="6" fill="#b08d57" />

          {/* Growth Arc & Shield motif */}
          <path d="M 40 270 Q 170 190, 300 270" fill="none" stroke="#b08d57" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="170" cy="68" r="14" fill="#f5f0e7" stroke="#b08d57" strokeWidth="1.5" />
          <path d="M 170 60 L 178 68 L 170 76 L 162 68 Z" fill="#5b1725" />

          {/* Annotations */}
          <text x="170" y="260" textAnchor="middle" fill="#5b1725" fontSize="9" fontFamily="var(--mono)" fontWeight="700">MOTILAL NEHRU COLLEGE</text>
          <text x="170" y="278" textAnchor="middle" fill="#b08d57" fontSize="8" fontFamily="var(--mono)" letterSpacing="0.12em">GOVERNANCE & STEWARDSHIP</text>
        </svg>
        <div className="illustration-caption">
          <span>INSTITUTIONAL GOVERNANCE</span>
          <small>PRINCIPALSHIP & STAKEHOLDER VISION</small>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-illustration hero-illustration--academic" aria-hidden="true">
      <svg viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
        {/* Concentric Knowledge Rays */}
        <circle cx="170" cy="140" r="110" stroke="rgba(176,141,87,0.18)" strokeDasharray="4 4" />
        <circle cx="170" cy="140" r="80" stroke="rgba(91,23,37,0.15)" strokeDasharray="3 3" />
        <circle cx="170" cy="140" r="50" stroke="rgba(176,141,87,0.3)" strokeDasharray="2 2" />

        {/* Academic Manuscript / Book geometry */}
        <path d="M 90 170 Q 170 150, 170 120 Q 170 150, 250 170 L 250 220 Q 170 200, 170 170 Q 170 200, 90 220 Z" fill="rgba(91,23,37,0.06)" stroke="#5b1725" strokeWidth="2" />
        <line x1="170" y1="120" x2="170" y2="170" stroke="#b08d57" strokeWidth="2" />

        {/* Page text lines representation */}
        <line x1="110" y1="175" x2="155" y2="170" stroke="rgba(91,23,37,0.3)" strokeWidth="1.5" />
        <line x1="110" y1="185" x2="155" y2="180" stroke="rgba(91,23,37,0.3)" strokeWidth="1.5" />
        <line x1="110" y1="195" x2="155" y2="190" stroke="rgba(91,23,37,0.3)" strokeWidth="1.5" />

        <line x1="185" y1="170" x2="230" y2="175" stroke="rgba(91,23,37,0.3)" strokeWidth="1.5" />
        <line x1="185" y1="180" x2="230" y2="185" stroke="rgba(91,23,37,0.3)" strokeWidth="1.5" />
        <line x1="185" y1="190" x2="230" y2="195" stroke="rgba(91,23,37,0.3)" strokeWidth="1.5" />

        {/* Graduation / Flame of Knowledge emblem */}
        <polygon points="170,55 205,75 170,95 135,75" fill="#5b1725" stroke="#b08d57" strokeWidth="1.5" />
        <line x1="205" y1="75" x2="215" y2="105" stroke="#b08d57" strokeWidth="1.5" />
        <circle cx="215" cy="107" r="3" fill="#b08d57" />

        {/* Pedagogical Triad Node */}
        <path d="M 70 265 L 170 265 L 270 265" stroke="#b08d57" strokeWidth="1.5" />
        <circle cx="70" cy="265" r="5" fill="#5b1725" />
        <circle cx="170" cy="265" r="5" fill="#b08d57" />
        <circle cx="270" cy="265" r="5" fill="#5b1725" />

        <text x="70" y="285" textAnchor="middle" fill="#5b1725" fontSize="8" fontFamily="var(--mono)" fontWeight="700">CONCEPT</text>
        <text x="170" y="285" textAnchor="middle" fill="#b08d57" fontSize="8" fontFamily="var(--mono)" fontWeight="700">EVIDENCE</text>
        <text x="270" y="285" textAnchor="middle" fill="#5b1725" fontSize="8" fontFamily="var(--mono)" fontWeight="700">INTERPRETATION</text>
      </svg>
      <div className="illustration-caption">
        <span>ACADEMIC & TEACHING RECORD</span>
        <small>DEPARTMENT OF CHEMISTRY · UNIVERSITY OF DELHI</small>
      </div>
    </div>
  );
}
