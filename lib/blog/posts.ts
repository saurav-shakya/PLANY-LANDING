import { howToDeleteAccountPost } from "./content/how-to-delete-your-plany-timeline-account";
import type { BlogPost } from "./types";

const POSTS: BlogPost[] = [howToDeleteAccountPost];

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return POSTS.map((post) => post.slug);
}

export function formatPostDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00Z`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
