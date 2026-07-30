import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { formatPostDate, getAdjacentPosts } from "@/lib/blog/posts";
import type { BlogPost } from "@/lib/blog/types";
import { BlogBlocks } from "@/components/blog-blocks";
import { BlogShare } from "@/components/blog-share";

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
  const { prev, next } = getAdjacentPosts(post.slug);

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

          <div className="mt-14 border-t border-plany-border pt-8">
            <BlogShare title={post.title} slug={post.slug} />
          </div>

          {(prev || next) && (
            <nav
              aria-label="More articles"
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group rounded-2xl border border-plany-border bg-plany-surface/40 p-5 transition-all hover:border-plany-border-strong hover:bg-plany-surface"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-plany-secondary">
                    ← Newer
                  </span>
                  <span className="mt-2 block text-sm font-medium leading-snug text-plany-primary transition-colors group-hover:text-plany-accent">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group rounded-2xl border border-plany-border bg-plany-surface/40 p-5 text-right transition-all hover:border-plany-border-strong hover:bg-plany-surface"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-plany-secondary">
                    Older →
                  </span>
                  <span className="mt-2 block text-sm font-medium leading-snug text-plany-primary transition-colors group-hover:text-plany-accent">
                    {next.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
