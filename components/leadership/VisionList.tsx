import { visionThemes, type VisionTheme } from "@/data/leadership";

type VisionListProps = {
  items?: readonly VisionTheme[];
  light?: boolean;
};

export function VisionList({ items = visionThemes, light = false }: VisionListProps) {
  return (
    <div className={`publication-list${light ? " publication-list--light" : ""}`}>
      <div className="publication-head" aria-hidden="true">
        <span>Theme</span>
        <span>Dimension / Focus</span>
        <span>Domain</span>
        <span>Record</span>
      </div>
      {items.map((theme, index) => (
        <article className="publication-row" key={theme.id}>
          <time>0{index + 1}</time>
          <div className="publication-title">
            <h3>{theme.title}</h3>
            <p>{theme.description}</p>
            {theme.tags && (
              <div className="publication-tags">
                {theme.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
          <p className="publication-venue">{theme.domain ?? "Institutional Outlook"}</p>
          <div className="publication-action">
            <span>{theme.status ?? "Pillar"}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
