import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      path: "/download",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/pricing",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/blog",
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/support",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      path: "/privacy",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      path: "/terms",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      path: "/delete-account",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // 2. Dynamic Blog Post Routes
  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => {
    const parsedDate = new Date(`${post.date}T12:00:00Z`);
    const validDate = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;

    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: validDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...postRoutes];
}