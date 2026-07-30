import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { PricingContent } from "@/components/pricing-content";

export const metadata = {
  title: "Pricing | Plany",
  description: "Free to start. Pro when you want more.",
};

export default function PricingPage() {
  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main className="flex flex-1 flex-col px-4 pb-24 pt-28 md:px-6 md:pt-36">
        <PricingContent />
      </main>
      <Footer />
    </div>
  );
}
