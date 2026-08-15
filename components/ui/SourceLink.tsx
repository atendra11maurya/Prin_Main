type SourceLinkProps = {
  href: string;
  label?: string;
  ariaLabel?: string;
};

export function SourceLink({ href, label = "Official Record", ariaLabel }: SourceLinkProps) {
  const accessibleLabel = ariaLabel || `External source for ${label}`;

  return (
    <a
      href={href}
      className="source-link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${accessibleLabel} (opens in a new tab)`}
    >
      <span>{label}</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    </a>
  );
}
