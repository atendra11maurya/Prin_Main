type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  light?: boolean;
};

export function SectionLabel({ index, children, light = false }: SectionLabelProps) {
  return (
    <div className={`section-label${light ? " section-label--light" : ""}`}>
      {index && <span>{index}</span>}
      <p>{children}</p>
    </div>
  );
}
