import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { DownloadHero } from "@/components/download-hero";
import { Metadata } from "next";

const BASE_URL = "https://www.tryplany.com";

export const metadata: Metadata = {
  title: "Download Plany App for iOS & Android | Visual Timeline & Planner",
  description:
    "Get Plany on iOS and Android. Organize your day on a visual timeline, set smart reminders, and stay consistent with better routines.",
  alternates: {
    canonical: `${BASE_URL}/download`,
  },
  openGraph: {
    title: "Download Plany | Visual Timeline & Daily Planner App",
    description: "Get Plany on iOS and Android. Plan your day visually with effortless timelines.",
    url: `${BASE_URL}/download`,
    siteName: "Plany",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function DownloadPage() {
  const downloadSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Plany",
    operatingSystem: "iOS, Android",
    applicationCategory: "ProductivityApplication",
    description: "Plan your day on a visual timeline and build consistent daily routines.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadSchema) }}
      />
      <div className="page-grid relative flex min-h-full flex-col">
        <Nav />
        <main className="flex flex-1 flex-col px-4 pb-0 pt-24 md:px-6 md:pt-28 lg:min-h-0 lg:px-8 lg:pb-8 lg:pt-28">
          <DownloadHero />
        </main>
        <Footer />
      </div>
    </>
  );
}
