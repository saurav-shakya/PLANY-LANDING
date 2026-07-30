import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { formatPostDate } from "@/lib/blog/posts";
import type { BlogPost } from "@/lib/blog/types";
import { BlogBlocks } from "@/components/blog-blocks";

export function BlogIndexLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main className="flex flex-1 flex-col px-4 pb-20 pt-28 md:px-6 md:pt-36">
        <div className="mx-auto w-full max-w-3xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export function BlogPostLayout({ post }: { post: BlogPost }) {
  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main className="flex flex-1 flex-col px-4 pb-20 pt-28 md:px-6 md:pt-36">
        <article className="mx-auto w-full max-w-2xl">
          <Link
            href="/blog"
            className="text-sm text-plany-secondary transition-colors hover:text-plany-primary"
          >
            ← Back to articles
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-plany-secondary">
            <span className="inline-flex items-center rounded-full border border-plany-border bg-plany-surface/60 px-2.5 py-0.5 text-xs font-medium text-plany-primary">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 border-l-2 border-plany-accent/70 pl-4 text-base leading-relaxed text-plany-secondary md:text-lg">
            {post.lede}
          </p>

          <BlogBlocks blocks={post.blocks} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
