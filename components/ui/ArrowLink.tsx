import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "text" | "light" | "outline-light";
  external?: boolean;
};

export function ArrowLink({ href, children, variant = "text", external = false }: ArrowLinkProps) {
  const className = `arrow-link arrow-link--${variant}`;
  const content = <>{children}<span aria-hidden="true">↗</span></>;

  if (external) {
    return <a className={className} href={href} target="_blank" rel="noreferrer">{content}</a>;
  }
  return <a className={className} href={href}>{content}</a>;
}
