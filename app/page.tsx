import { Audience } from "@/components/audience";
import { AiToneDemo } from "@/components/ai-tone-demo";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Nav } from "@/components/nav";
import { Problem } from "@/components/problem";
import { ProductTimeline } from "@/components/product-timeline";
import { SocialProof } from "@/components/social-proof";

export default function Home() {
  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main>
        <Hero />
        <Audience />
        <Problem />
        <Features />
        <ProductTimeline />
        <AiToneDemo />
        <HowItWorks />
        <SocialProof />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
