import Link from "next/link";
import type { BlogBlock } from "@/lib/blog/types";

function InlineText({ text }: { text: string }) {
  // Support simple **bold** markers in list/paragraph copy
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-medium text-plany-primary">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mt-10 space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="text-lg font-medium tracking-tight text-plany-primary md:text-xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p
                key={index}
                className="text-base leading-relaxed text-plany-secondary"
              >
                <InlineText text={block.text} />
              </p>
            );
          case "ol":
            return (
              <ol
                key={index}
                className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-plany-secondary"
              >
                {block.items.map((item) => (
                  <li key={item} className="pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "ul":
            return (
              <ul
                key={index}
                className="list-disc space-y-3 pl-5 text-base leading-relaxed text-plany-secondary"
              >
                {block.items.map((item) => (
                  <li key={item} className="pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "note":
            return (
              <aside
                key={index}
                className="rounded-xl border border-plany-border bg-plany-surface/60 px-4 py-3.5 text-sm leading-relaxed text-plany-secondary md:px-5"
              >
                <span className="font-medium text-plany-primary">Note: </span>
                <InlineText text={block.text} />
              </aside>
            );
          case "table":
            return (
              <div
                key={index}
                className="overflow-x-auto rounded-xl border border-plany-border"
              >
                <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-plany-border bg-plany-surface/80">
                      {block.headers.map((header) => (
                        <th
                          key={header}
                          className="px-4 py-3 font-medium text-plany-primary"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map(([topic, detail]) => (
                      <tr
                        key={topic}
                        className="border-b border-plany-border/80 last:border-0"
                      >
                        <td className="align-top px-4 py-3 font-medium text-plany-primary">
                          {topic}
                        </td>
                        <td className="align-top px-4 py-3 leading-relaxed text-plany-secondary">
                          {detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "faq":
            return (
              <div key={index} className="space-y-6">
                {block.items.map((item) => (
                  <div key={item.question}>
                    <p className="font-medium text-plany-primary">
                      {item.question}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-plany-secondary">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            );
          case "links":
            return (
              <ul key={index} className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                {block.items.map((item) => {
                  const className =
                    "text-sm font-medium text-plany-primary underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50";
                  if (item.external || item.href.startsWith("mailto:")) {
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className={className}
                          {...(item.href.startsWith("http")
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={item.href}>
                      <Link href={item.href} className={className}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
