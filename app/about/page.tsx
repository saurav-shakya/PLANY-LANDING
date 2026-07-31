import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "About | Plany",
  description:
    "Plany helps you organise your days with clarity, build better routines, and stay consistent with what truly matters.",
};

export default function AboutPage() {
  return (
    <LegalPage
      overline="Company"
      title="About Plany"
      intro="Plany helps you organise your days with clarity, build better routines, and stay consistent with what truly matters."
      paragraphs={[
        "We believe that planning should feel simple, calm, and meaningful. Plany is designed to make your daily workflow more intentional: from structuring your goals to keeping track of your habits and progress, all in a way that feels natural and effortless.",
      ]}
    />
  );
}
