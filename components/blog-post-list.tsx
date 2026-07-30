"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatPostDate } from "@/lib/blog/posts";
import type { BlogPost } from "@/lib/blog/types";
import { cn } from "@/lib/utils";

const ALL_CATEGORY = "All";

export function BlogPostList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORY);

  const categories = useMemo(
    () => [
      ALL_CATEGORY,
      ...Array.from(new Set(posts.map((post) => post.category))),
    ],
    [posts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory =
        category === ALL_CATEGORY || post.category === category;
      const matchesQuery =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div className="mt-12">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-plany-secondary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="w-full rounded-xl border border-plany-border bg-plany-surface/60 py-3 pl-11 pr-4 text-sm text-plany-primary placeholder:text-plany-secondary/70 outline-none transition-colors focus:border-plany-border-strong"
          />
        </div>

        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  category === item
                    ? "border-plany-accent/60 bg-plany-accent/15 text-plany-primary"
                    : "border-plany-border bg-plany-surface/60 text-plany-secondary hover:text-plany-primary"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-plany-border bg-plany-surface/40 p-8 text-center text-sm text-plany-secondary">
          No articles found. Try a different search or category.
        </p>
      ) : (
        <ul className="mt-8 space-y-4">
          {filtered.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-plany-border bg-plany-surface/40 p-5 transition-all hover:border-plany-border-strong hover:bg-plany-surface sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-plany-secondary">
                  <span className="inline-flex items-center rounded-full border border-plany-border bg-plany-neutral/60 px-2.5 py-0.5 text-xs font-medium text-plany-primary">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </div>
                <h2 className="mt-3 text-lg font-medium text-plany-primary transition-colors group-hover:text-plany-accent md:text-xl">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-plany-secondary md:text-base">
                  {post.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-plany-primary underline decoration-plany-secondary/40 underline-offset-4 transition-colors group-hover:decoration-plany-secondary">
                  Read full article
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
