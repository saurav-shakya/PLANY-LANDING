import { headers } from "next/headers";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { PricingContent } from "@/components/pricing-content";
import { resolvePricingRegion } from "@/lib/constants";
import { Metadata } from "next";

const BASE_URL = "https://www.tryplany.com";

export const metadata: Metadata = {
  title: "Pricing & Plans | Plany",
  description:
    "Try Plany free for 14 days. Upgrade to Pro with monthly, yearly, or lifetime options for deeper follow-ups, smart memory, and unlimited features.",
  alternates: {
    canonical: `${BASE_URL}/pricing`,
  },
  openGraph: {
    title: "Plany Pricing | 14-Day Free Trial",
    description: "Simple, flexible pricing. Try free for 14 days or upgrade to Pro for deeper AI follow-ups.",
    url: `${BASE_URL}/pricing`,
    siteName: "Plany",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

export default async function PricingPage() {
  const h = await headers();
  const { region, fromGeo } = resolvePricingRegion({
    vercelCountry: h.get("x-vercel-ip-country"),
    acceptLanguage: h.get("accept-language"),
  });

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Plany Pro",
    description: "Visual timeline and daily routine planner app with AI follow-ups and memory.",
    brand: {
      "@type": "Brand",
      name: "Plany",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      offerCount: "3",
      description: "14-day free trial available. Monthly, Yearly, and Lifetime Pro plans.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <div className="page-grid relative min-h-full">
        <Nav />
        <main className="flex flex-1 flex-col px-4 pb-24 pt-28 md:px-6 md:pt-36">
          <PricingContent region={region} allowClientFallback={!fromGeo} />
        </main>
        <Footer />
      </div>
    </>
  );
}