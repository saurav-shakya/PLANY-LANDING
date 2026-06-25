import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Plany",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24">
      <Link href="/" className="text-sm text-plany-secondary hover:text-plany-primary">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-3xl font-medium">Terms of Service</h1>
      <p className="mt-4 text-plany-secondary leading-relaxed">
        By using Plany, you agree to use the app responsibly. Plany is provided
        as-is. We may update features over time. For questions, contact
        support@plany.space.
      </p>
    </div>
  );
}
