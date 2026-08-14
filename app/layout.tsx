import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo";
import "@fontsource-variable/inter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Prof. Yogeshwar Sharma | Principal, Motilal Nehru College",
    template: "%s | Prof. Yogeshwar Sharma",
  },
  description:
    "The academic profile of Prof. Yogeshwar Sharma, Principal of Motilal Nehru College, University of Delhi, Professor of Chemistry, researcher and institutional leader.",
  applicationName: "Prof. Yogeshwar Sharma",
  authors: [{ name: "Prof. Yogeshwar Sharma" }],
  keywords: [
    "Prof. Yogeshwar Sharma",
    "Motilal Nehru College",
    "University of Delhi",
    "Professor of Chemistry",
    "chemical kinetics",
    "academic leadership",
  ],
  openGraph: {
    type: "profile",
    title: "Prof. Yogeshwar Sharma",
    description:
      "Principal · Motilal Nehru College · Professor of Chemistry · University of Delhi",
    siteName: "Prof. Yogeshwar Sharma",
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "Prof. Yogeshwar Sharma — Principal, Motilal Nehru College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Yogeshwar Sharma",
    description:
      "Academic · Researcher · Institutional Leader",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#5B1725",
  colorScheme: "light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yogeshwar Sharma",
  honorificPrefix: "Prof.",
  jobTitle: ["Principal", "Professor of Chemistry"],
  affiliation: [
    {
      "@type": "CollegeOrUniversity",
      name: "Motilal Nehru College",
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "University of Delhi",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Chemical Kinetics",
    "Reaction Kinetics",
    "Coordination Chemistry",
    "Higher Education",
    "Academic Leadership",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
