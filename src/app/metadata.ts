import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kartik Patel",
  description:
    "Software Developer | CS student @ UofR | GitHub Campus Expert | Core @ URGDG",
  metadataBase: new URL("https://kpatel0170.github.io"),
  openGraph: {
    title: "Kartik Patel — Software Developer",
    description:
      "Portfolio and timeline of Kartik Patel — software developer, hackathon organizer, and GitHub Campus Expert.",
    url: "https://kpatel0170.github.io",
    siteName: "Kartik Patel",
    images: [
      {
        url: "/profile-new.png",
        width: 1200,
        height: 630,
        alt: "Kartik Patel"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Patel",
    description:
      "Portfolio and timeline of Kartik Patel — software developer, hackathon organizer, and GitHub Campus Expert.",
    images: ["/profile-new.png"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default metadata;
