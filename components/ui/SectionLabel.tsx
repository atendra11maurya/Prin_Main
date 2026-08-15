type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  light?: boolean;
  headingId?: string;
};

export function SectionLabel({ index, children, light = false, headingId }: SectionLabelProps) {
  return (
    <div className={`section-label${light ? " section-label--light" : ""}`}>
      {index && <span>{index}</span>}
      {headingId ? <h2 id={headingId}>{children}</h2> : <p>{children}</p>}
    </div>
  );
}
