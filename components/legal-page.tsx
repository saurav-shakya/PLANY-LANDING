import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  intro: string;
  overline?: string;
  sections?: LegalSection[];
  paragraphs?: string[];
};

export function LegalPage({
  title,
  intro,
  overline = "Legal",
  sections,
  paragraphs,
}: LegalPageProps) {
  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main className="flex flex-1 flex-col px-4 pb-20 pt-28 md:px-6 md:pt-36">
        <article className="mx-auto w-full max-w-2xl">
          <Link
            href="/"
            className="text-sm text-plany-secondary transition-colors hover:text-plany-primary"
          >
            ← Back to home
          </Link>

          <p className="text-overline mt-8 text-plany-secondary">{overline}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-plany-secondary md:text-lg">
            {intro}
          </p>

          {paragraphs?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mt-5 text-base leading-relaxed text-plany-secondary"
            >
              {paragraph}
            </p>
          ))}

          {sections && sections.length > 0 && (
            <div className="mt-12 space-y-10">
              {sections.map((section, index) => (
                <section key={section.title}>
                  <h2 className="text-lg font-medium text-plany-primary">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-plany-secondary">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
