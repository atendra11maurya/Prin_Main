export function KineticGraphic({ light = false }: { light?: boolean }) {
  return (
    <div className={`kinetic-graphic${light ? " kinetic-graphic--light" : ""}`} role="img" aria-label="Conceptual reaction pathway from reactants to complex">
      <div className="kinetic-axis kinetic-axis--x" />
      <div className="kinetic-axis kinetic-axis--y" />
      <div className="kinetic-path kinetic-path--one" />
      <div className="kinetic-path kinetic-path--two" />
      <span className="kinetic-node kinetic-node--one" />
      <span className="kinetic-node kinetic-node--two" />
      <span className="kinetic-node kinetic-node--three" />
      <div className="kinetic-caption kinetic-caption--one">Reactants</div>
      <div className="kinetic-caption kinetic-caption--two">Interaction</div>
      <div className="kinetic-caption kinetic-caption--three">Complex</div>
      <div className="kinetic-code">R → I → C</div>
    </div>
  );
}
