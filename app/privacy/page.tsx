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
          body: "Your data is used to improve your experience — to help you stay consistent, accountable, and aligned with your goals. Plany never sells your data or uses it for external advertising.",
        },
        {
          title: "AI Processing",
          body: "AI-driven insights and coaching are generated using your personal planning data. All processing respects the highest privacy standards and follows industry-grade security.",
        },
        {
          title: "Your Control",
          body: "You can export, view, or delete your data anytime. Plany is built to give you full ownership over your digital life and routines.",
        },
        {
          title: "Security",
          body: "We protect your data with industry-standard security practices, including encryption in transit and access controls. If you have a security concern, contact support@plany.space.",
        },
      ]}
    />
  );
}
