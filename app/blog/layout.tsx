import type { ReactNode } from "react";
import { BlogThemeToggle } from "@/components/blog-theme-toggle";

// Runs before paint on full page loads so a saved light preference never flashes dark
const themeScript = `try{if(localStorage.getItem("plany-blog-theme")==="light"){document.currentScript.parentElement.classList.add("blog-light")}}catch(e){}`;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    // The inline script may add "blog-light" before hydration, so className
    // intentionally differs between server HTML and the hydrated DOM
    <div data-blog-theme-scope className="contents" suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <BlogThemeToggle />
      {children}
    </div>
  );
}
