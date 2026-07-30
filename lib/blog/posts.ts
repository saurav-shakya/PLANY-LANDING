import { howToDeleteAccountPost } from "./content/how-to-delete-your-plany-timeline-account";
import { howToJoinBetaPost } from "./content/how-to-join-plany-timeline-beta";
import type { BlogPost } from "./types";

const POSTS: BlogPost[] = [howToJoinBetaPost, howToDeleteAccountPost];

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return POSTS.map((post) => post.slug);
}

export function getAdjacentPosts(slug: string): {
  prev?: BlogPost;
  next?: BlogPost;
} {
  const sorted = getAllPosts();
  const index = sorted.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? sorted[index - 1] : undefined,
    next: index < sorted.length - 1 ? sorted[index + 1] : undefined,
  };
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
