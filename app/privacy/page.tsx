import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy | Plany",
  description:
    "Your privacy matters. Plany is designed to keep your personal data safe, secure, and fully within your control.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters. Plany is designed to keep your personal data safe, secure, and fully within your control."
      sections={[
        {
          title: "Data We Collect",
          body: "Plany only collects information needed to provide you with adaptive planning, coaching, insights and your personalized Life OS. This includes tasks, goals, schedules, and preferences you choose to provide.",
        },
        {
          title: "How We Use Your Data",
          body: "Your data is used to improve your experience: to help you stay consistent, accountable, and aligned with your goals. Plany never sells your data or uses it for external advertising.",
        },
        {
          title: "AI Processing",
          body: "AI-driven insights and coaching are generated using your personal planning data. All processing respects the highest privacy standards and follows industry-grade security.",
        },
        {
          title: "Your Control",
          body: (
            <>
              <p>
                You can export, view, or delete your data anytime. Plany is
                built to give you full ownership over your digital life and
                routines.
              </p>
              <p>
                To delete your Plany Timeline account, open the app and go to{" "}
                <strong className="font-medium text-plany-primary">
                  Settings → Profile Account → Delete account
                </strong>
                . After you confirm, you are signed out and your data is
                scheduled for removal. If you deleted by mistake, sign in again
                with the same email within{" "}
                <strong className="font-medium text-plany-primary">
                  10 minutes
                </strong>{" "}
                to restore your account. After about{" "}
                <strong className="font-medium text-plany-primary">
                  30 days
                </strong>
                , deleted account data is permanently removed.
              </p>
              <p>
                Full steps, what is deleted, and how to contact support:{" "}
                <Link
                  href="/blog/how-to-delete-your-plany-timeline-account"
                  className="font-medium text-plany-primary underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50"
                >
                  How to delete your Plany Timeline account
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          title: "Security",
          body: "We protect your data with industry-standard security practices, including encryption in transit and access controls. If you have a security concern, contact support@plany.space.",
        },
      ]}
    />
  );
}
