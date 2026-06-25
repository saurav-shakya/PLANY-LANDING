import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plany | Your day on a timeline",
  description:
    "Tasks on a timeline. Reminders that make sense. An AI that follows up when you don't.",
  metadataBase: new URL("https://plany.space"),
  openGraph: {
    title: "Plany | Your day on a timeline",
    description:
      "Plan your day visually. Smart reminders, location nudges, and AI accountability.",
    url: "https://plany.space",
    siteName: "Plany",
    type: "website",
    images: [{ url: "/screenshots/app-preview.png", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plany | Your day on a timeline",
    description:
      "Plan your day visually. Smart reminders, location nudges, and AI accountability.",
    creator: "@sauravv_x",
    images: ["/screenshots/app-preview.png"],
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
      </body>
    </html>
  );
}
