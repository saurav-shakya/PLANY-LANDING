import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Plany",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24">
      <Link href="/" className="text-sm text-plany-secondary hover:text-plany-primary">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-3xl font-medium">Privacy Policy</h1>
      <p className="mt-4 text-plany-secondary leading-relaxed">
        Plany respects your privacy. We collect only what&apos;s needed to run the
        app — your tasks, reminders, and account info. We don&apos;t sell your data.
        For full details, contact support@plany.space.
      </p>
    </div>
  );
}
