import Link from "next/link";
import { BlogIndexLayout } from "@/components/blog-layout";
import { formatPostDate, getAllPosts } from "@/lib/blog/posts";

export const metadata = {
  title: "Blog | Plany",
  description:
    "Guides and updates for Plany Timeline — account help, product tips, and more.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <BlogIndexLayout>
      <div className="text-center sm:text-left">
        <p className="text-overline text-plany-secondary">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Guides & updates
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-plany-secondary md:text-lg">
          Practical help for Plany Timeline — account settings, privacy, and
          getting the most from your day plan.
        </p>
      </div>

      <ul className="mt-12 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-plany-border bg-plany-surface/40 p-5 transition-all hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-plany-secondary">
                <span className="inline-flex items-center rounded-full border border-plany-border bg-plany-neutral/60 px-2.5 py-0.5 text-xs font-medium text-plany-primary">
                  {post.category}
                </span>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              </div>
              <h2 className="mt-3 text-lg font-medium text-plany-primary transition-colors group-hover:text-white md:text-xl">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-plany-secondary md:text-base">
                {post.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-plany-primary underline decoration-white/20 underline-offset-4 transition-colors group-hover:decoration-white/50">
                Read full article
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </BlogIndexLayout>
  );
}
