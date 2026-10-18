import { LegalPage } from "@/components/legal-page";
import { Metadata } from "next";

const BASE_URL = "https://www.tryplany.com";
export const metadata: Metadata = {
  title: "Terms of Service | Plany",
  description: "Read Plany's Terms of Service. By using Plany, you agree to simple guidelines to help you stay consistent and use our service responsibly.",
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
  openGraph: {
    title: "Terms of Service | Plany",
    description: "Plany Terms of Service and user usage agreement.",
    url: `${BASE_URL}/terms`,
    siteName: "Plany",
    type: "website",
  },
};
export default function TermsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Plany Terms of Service",
    url: `${BASE_URL}/terms`,
    publisher: {
      "@type": "Organization",
      name: "Plany",
      url: BASE_URL,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <LegalPage
        title="Terms of Service"
        intro="By using Plany, you agree to a simple promise: we help you stay consistent, and you use Plany responsibly."
        sections={[
          {
            title: "Using Plany",
            body: "Plany provides AI-powered planning, coaching, insights and productivity tools. You agree to use Plany legally and respectfully without abusing its systems.",
          },
          {
            title: "Accounts",
            body: "You are responsible for maintaining the confidentiality of your account. You must provide accurate information and follow standard security practices.",
          },
          {
            title: "Subscription",
            body: "Some Plany features may require a subscription. Payments are recurring, and you may cancel anytime with no penalties. Refund policies follow regional regulations.",
          },
          {
            title: "AI Features",
            body: "Plany’s AI coach provides suggestions, but final decisions are always yours. AI output is not a substitute for professional or legal advice.",
          },
          {
            title: "Termination",
            body: "You may stop using Plany anytime. We reserve the right to suspend accounts that violate these terms or misuse the platform.",
          },
          {
            title: "Changes",
            body: "We may update these terms occasionally to improve clarity or match new features. We will notify you of major changes in advance.",
          },
        ]}
      />
    </>
  );
}
