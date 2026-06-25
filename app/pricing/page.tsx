import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Pricing — Plany",
  description: "Simple pricing for planning your day. Free to start, Pro when you need more.",
};

export default function PricingPage() {
  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main className="flex flex-1 flex-col px-4 pb-24 pt-28 md:px-6 md:pt-36">
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center">
            <p className="text-overline text-plany-secondary">Pricing</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Simple plans, no surprises
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-plany-secondary md:text-lg">
              Pricing is still being finalized — these tiers are placeholders while we
              shape the Pro experience.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "glass-card flex flex-col p-6 md:p-8",
                  tier.highlighted &&
                    "border-white/20 bg-white/[0.06] shadow-[0_0_60px_rgba(255,255,255,0.04)]"
                )}
              >
                <div>
                  <h2 className="text-lg font-medium">{tier.name}</h2>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-sm text-plany-secondary">{tier.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-plany-secondary">{tier.description}</p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-plany-secondary"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-plany-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/download"
                  variant={tier.highlighted ? "primary" : "ghost"}
                  size="md"
                  className="mt-8 w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}