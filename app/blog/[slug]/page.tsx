import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { BlogPostLayout } from "@/components/blog-layout";
import { getPost, getPostSlugs } from "@/lib/blog/posts";
import { SITE_URL } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Article Not Found | Plany" };
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.ogImage ?? {
    url: "/screenshots/timeline.png",
    width: 459,
    height: 1024,
  };

  return {
    title: `${post.title} | Plany Blog`,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: postUrl,
      publishedTime: post.date,
      authors: ["Saurav", "Dampi Pal"],
      images: [
        {
          url: ogImage.url.startsWith("http") ? ogImage.url : `${SITE_URL}${ogImage.url}`,
          width: ogImage.width,
          height: ogImage.height,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@sauravv_x",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.ogImage?.url
    ? post.ogImage.url.startsWith("http")
      ? post.ogImage.url
      : `${SITE_URL}${post.ogImage.url}`
    : `${SITE_URL}/screenshots/timeline.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: postUrl,
    image: [imageUrl],
    author: [
      {
        "@type": "Person",
        name: "Saurav",
        url: "https://x.com/sauravv_x",
      },
      {
        "@type": "Person",
        name: "Dampi Pal",
        url: "https://x.com/paldampi",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Plany",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout post={post} />
    </>
  );
}