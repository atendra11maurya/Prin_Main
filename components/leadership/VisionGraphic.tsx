export function VisionGraphic({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`kinetic-graphic${light ? " kinetic-graphic--light" : ""}`}
      role="img"
      aria-label="Conceptual educational development schema across inquiry, communication, culture and leadership"
    >
      <div className="kinetic-axis kinetic-axis--x" />
      <div className="kinetic-axis kinetic-axis--y" />
      
      {/* Schematic geometric paths */}
      <div className="kinetic-path kinetic-path--one" />
      <div className="kinetic-path kinetic-path--two" />
      
      <span className="kinetic-node kinetic-node--one" />
      <span className="kinetic-node kinetic-node--two" />
      <span className="kinetic-node kinetic-node--three" />
      
      <div className="kinetic-caption kinetic-caption--one">Inquiry</div>
      <div className="kinetic-caption kinetic-caption--two">Engagement</div>
      <div className="kinetic-caption kinetic-caption--three">Leadership</div>
      <div className="kinetic-code">E · C · C · L</div>
    </div>
  );
}
