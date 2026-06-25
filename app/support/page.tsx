import Link from "next/link";

export const metadata = {
  title: "Support | Plany",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24">
      <Link href="/" className="text-sm text-plany-secondary hover:text-plany-primary">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-3xl font-medium">Support</h1>
      <p className="mt-4 text-plany-secondary leading-relaxed">
        Need help with Plany? Email us at{" "}
        <a
          href="mailto:support@plany.space"
          className="text-plany-primary underline underline-offset-4"
        >
          support@plany.space
        </a>{" "}
        or reach out on{" "}
        <a
          href="https://x.com/sauravv_x"
          target="_blank"
          rel="noopener noreferrer"
          className="text-plany-primary underline underline-offset-4"
        >
          @sauravv_x
        </a>
        .
      </p>
    </div>
  );
}
