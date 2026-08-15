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
        <span>Journal</span>
        <span>Record</span>
      </div>
      {visible.map((publication) => (
        <article className="publication-row" key={publication.id}>
          <time>{publication.year ?? "—"}</time>
          <div className="publication-title">
            <h3>{publication.title}</h3>
            {publication.authors && (
              <p>{publication.authors.join(" · ")}</p>
            )}
            {publication.tags && (
              <div className="publication-tags">
                {publication.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            )}
          </div>
          <p className="publication-venue">
            {publication.journal}
            {publication.volume && ` · Vol. ${publication.volume}`}
            {publication.issue && ` · Issue ${publication.issue}`}
            {publication.pages && ` · pp. ${publication.pages}`}
          </p>
          <div className="publication-action">
            {publication.doi ? (
              <a href={publication.doi} target="_blank" rel="noopener noreferrer" aria-label={`View DOI record for ${publication.title} (opens in a new tab)`}>
                DOI <span aria-hidden="true">↗</span>
              </a>
            ) : publication.publisherUrl ? (
              <a href={publication.publisherUrl} target="_blank" rel="noopener noreferrer" aria-label={`View journal record for ${publication.title} (opens in a new tab)`}>
                Journal <span aria-hidden="true">↗</span>
              </a>
            ) : publication.articleUrl ? (
              <a href={publication.articleUrl} target="_blank" rel="noopener noreferrer" aria-label={`View paper for ${publication.title} (opens in a new tab)`}>
                Paper <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span>Verified</span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
