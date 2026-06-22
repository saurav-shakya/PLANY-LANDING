import { AiToneDemo } from "@/components/ai-tone-demo";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Problem } from "@/components/problem";
import { ProductTimeline } from "@/components/product-timeline";
import { SocialProof } from "@/components/social-proof";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <ProductTimeline />
        <Features />
        <AiToneDemo />
        <SocialProof />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
