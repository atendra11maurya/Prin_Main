import { publications, type Publication } from "@/data/publications";

type PublicationListProps = {
  items?: readonly Publication[];
  limit?: number;
  light?: boolean;
};

export function PublicationList({ items = publications, limit, light = false }: PublicationListProps) {
  const visible = typeof limit === "number" ? items.slice(0, limit) : items;
  return (
    <div className={`publication-list${light ? " publication-list--light" : ""}`}>
      <div className="publication-head" aria-hidden="true">
        <span>Year</span>
        <span>Title / Authors</span>
        <span>Venue</span>
        <span>Record</span>
      </div>
      {visible.map((publication) => (
        <article className="publication-row" key={publication.id}>
          <time>{publication.year ?? "—"}</time>
          <div className="publication-title">
            <h3>{publication.title}</h3>
            {publication.authors && (
              <p>{publication.authorListStatus === "partial" ? "Authors include: " : ""}{publication.authors.join(" · ")}</p>
            )}
            {publication.tags && (
              <div className="publication-tags">
                {publication.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            )}
          </div>
          <p className="publication-venue">{publication.journal ?? "Publicly indexed work"}</p>
          <div className="publication-action">
            {publication.url ? (
              <a href={publication.url} target="_blank" rel="noreferrer" aria-label={`Open publication record for ${publication.title}`}>Open <span aria-hidden="true">↗</span></a>
            ) : (
              <span>Indexed</span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
