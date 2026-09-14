"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "plany-blog-theme";
const listeners = new Set<() => void>();

function getBlogTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "light";
  } catch {
    return false;
  }
}

function applyBlogTheme(light: boolean) {
  document
    .querySelector("[data-blog-theme-scope]")
    ?.classList.toggle("blog-light", light);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setBlogTheme(light: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, light ? "light" : "dark");
  } catch {
    /* ignore write failures */
  }
  applyBlogTheme(light);
  listeners.forEach((listener) => listener());
}

export function BlogThemeToggle() {
  const isLight = useSyncExternalStore(subscribe, getBlogTheme, () => false);

  if (typeof document !== "undefined") {
    applyBlogTheme(isLight);
  }

  const toggle = () => {
    setBlogTheme(!isLight);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="fixed right-4 top-24 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-plany-border bg-plany-surface/90 text-plany-secondary shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:text-plany-primary md:right-6 md:top-28"
    >
      {isLight ? (
        <svg
          viewBox="0 0 24 24"
          className="h-4.5 w-4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-4.5 w-4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}
