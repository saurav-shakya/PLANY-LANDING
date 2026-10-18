import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Plany | Your day on a timeline",
    template: "%s | Plany",
  },
  description:
    "Tasks on a timeline. Reminders that make sense. An AI that follows up when you don't. Build better daily routines with smart location nudges.",
  keywords: [
    "daily planner",
    "timeline planner",
    "routine tracker",
    "AI reminder app",
    "time management app",
    "habit tracker",
    "location reminders",
    "Plany app",
  ],
  authors: [
    { name: "Saurav", url: "https://x.com/sauravv_x" },
    { name: "Dampi Pal", url: "https://x.com/paldampi" },
  ],
  creator: "Plany",
  publisher: "Plany",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Plany | Your day on a timeline",
    description:
      "Plan your day visually. Smart reminders, location nudges, and AI accountability.",
    url: SITE_URL,
    siteName: "Plany",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Plany: Your day on a timeline",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plany | Your day on a timeline",
    description:
      "Plan your day visually. Smart reminders, location nudges, and AI accountability.",
    creator: "@sauravv_x",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/plany-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Plany",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/plany-icon.png`,
        },
        description:
          "Plany helps you organize your days with clarity, build routines, and stay consistent with a visual timeline.",
        email: "hq@plany.space",
        founder: [
          {
            "@type": "Person",
            name: "Saurav",
            email: "saurav@plany.space",
            sameAs: "https://x.com/sauravv_x",
          },
          {
            "@type": "Person",
            name: "Dampi Pal",
            email: "dampi@plany.space",
            sameAs: "https://x.com/paldampi",
          },
        ],
        sameAs: ["https://x.com/sauravv_x", "https://x.com/paldampi"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Plany",
        description: "Your day on a timeline",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-plany-neutral text-plany-primary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}