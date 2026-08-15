import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource/dm-mono/latin-400.css";
import "@fontsource/dm-mono/latin-500.css";
import "@fontsource/dm-mono/latin-400-italic.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { personStructuredData } from "@/data/structured-data";
import { createPageMetadata, siteConfig, sitePages } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  ...createPageMetadata(sitePages.home),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Prof. Yogeshwar Sharma",
    "Motilal Nehru College",
    "University of Delhi",
    "Professor of Chemistry",
    "chemical kinetics",
    "academic leadership",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#5B1725",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <JsonLd data={personStructuredData} />
        <Analytics />
      </body>
    </html>
  );
}
