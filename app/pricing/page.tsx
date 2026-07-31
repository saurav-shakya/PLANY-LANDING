import { headers } from "next/headers";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { PricingContent } from "@/components/pricing-content";
import { resolvePricingCurrency } from "@/lib/constants";

export const metadata = {
  title: "Pricing | Plany",
  description: "Free to start. Pro when you want more.",
};

export const dynamic = "force-dynamic";

export default async function PricingPage() {
  const h = await headers();
  const { currency, fromGeo } = resolvePricingCurrency({
    vercelCountry: h.get("x-vercel-ip-country"),
    acceptLanguage: h.get("accept-language"),
  });

  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main className="flex flex-1 flex-col px-4 pb-24 pt-28 md:px-6 md:pt-36">
        <PricingContent currency={currency} allowClientFallback={!fromGeo} />
      </main>
      <Footer />
    </div>
  );
}
