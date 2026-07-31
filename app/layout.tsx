import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plany | Your day on a timeline",
  description:
    "Tasks on a timeline. Reminders that make sense. An AI that follows up when you don't.",
  // Canonical host is www (apex redirects); OG crawlers follow this for absolute image URLs
  metadataBase: new URL("https://www.plany.space"),
  openGraph: {
    title: "Plany | Your day on a timeline",
    description:
      "Plan your day visually. Smart reminders, location nudges, and AI accountability.",
    url: "https://www.plany.space",
    siteName: "Plany",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Plany: your day on a timeline",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-plany-neutral text-plany-primary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
