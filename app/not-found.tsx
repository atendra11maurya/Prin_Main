import type { Metadata } from "next";
import { ArrowLink } from "@/components/ui/ArrowLink";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Prof. Yogeshwar Sharma" },
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page" tabIndex={-1}>
      <div className="section-shell not-found-shell">
        <p className="not-found-code">404 / PAGE NOT FOUND</p>
        <h1>The page has moved<br />beyond this address.</h1>
        <p className="not-found-copy">
          The requested page is unavailable. Return to the academic profile or
          continue to the research index.
        </p>
        <div className="not-found-actions">
          <ArrowLink href="/" variant="outline-light">Return Home</ArrowLink>
          <ArrowLink href="/research" variant="light">View Research</ArrowLink>
        </div>
      </div>
    </main>
  );
}
