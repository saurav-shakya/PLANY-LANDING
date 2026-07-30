import { BlogIndexLayout } from "@/components/blog-layout";
import { BlogPostList } from "@/components/blog-post-list";
import { getAllPosts } from "@/lib/blog/posts";

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

      <BlogPostList posts={posts} />
    </BlogIndexLayout>
  );
}
