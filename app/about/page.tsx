import { LegalPage } from "@/components/legal-page";
import { Metadata } from "next";

const BASE_URL = "https://www.tryplany.com";

export const metadata: Metadata = {
  title: "About Plany | Routine & Timeline App",
  description: "Plany helps you organize your days with clarity, build daily routines, and stay consistent with goals, habit tracking, and effortless workflows.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Plany | Productivity & Routines",
    description: "Discover how Plany makes daily workflows calm, simple, and intentional.",
    url: `${BASE_URL}/about`,
    siteName: "Plany",
    type: "website",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Plany",
    url: `${BASE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Plany",
      url: BASE_URL,
      logo: `${BASE_URL}/icon.png`,
      description: "Plany helps you organize your days with clarity, build routines, and track habits effortlessly.",
      founder: [
        {
          "@type": "Person",
          name: "Dampi Pal",
          email: "dampi@plany.space",
          sameAs: "https://x.com/paldampi",
        },
        {
          "@type": "Person",
          name: "Saurav",
          email: "saurav@plany.space",
          sameAs: "https://x.com/sauravv_x",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hq@plany.space",
        contactType: "customer support",
      },
    },
  };

  return (<>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
    />
    <LegalPage
      overline="Company"
      title="About Plany"
      intro="Plany helps you organise your days with clarity, build better routines, and stay consistent with what truly matters."
      paragraphs={[
        "We believe that planning should feel simple, calm, and meaningful. Plany is designed to make your daily workflow more intentional: from structuring your goals to keeping track of your habits and progress, all in a way that feels natural and effortless.",
      ]}
      sections={[
        {
          title: "Get in touch",
          body: (
            <>
              <p>
                Want to connect, share feedback, or reach our support team?
                We&apos;d love to hear from you.
              </p>
              <p>
                Support:{" "}
                <a
                  href="mailto:hq@plany.space"
                  className="text-plany-primary underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50"
                >
                  hq@plany.space
                </a>
              </p>
              <p>
                Founder:{" "}
                <a
                  href="mailto:saurav@plany.space"
                  className="text-plany-primary underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50"
                >
                  saurav@plany.space
                </a>
              </p>
            </>
          ),
        },
      ]}
    />
  </>
  );
}
