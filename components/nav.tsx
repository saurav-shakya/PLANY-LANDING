"use client";

import Link from "next/link";
import { PlanyBrand } from "@/components/plany-logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, STORE_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const mobileOpen = openForPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenForPath(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div className="relative mx-auto max-w-6xl">
        <nav
          className={cn(
            "flex h-12 items-center justify-between rounded-full border px-3 transition-all duration-300 md:h-[52px] md:px-4",
            scrolled || mobileOpen
              ? "border-plany-border bg-plany-surface/90 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "border-white/[0.07] bg-plany-surface/35 backdrop-blur-md"
          )}
        >
          <Link href="/" aria-label="Plany home" className="transition-opacity hover:opacity-90">
            <PlanyBrand markSize={52} textClassName="text-[15px]" />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[15px] tracking-tight transition-colors hover:text-plany-primary",
                  isActive(link.href) ? "text-plany-primary" : "text-plany-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={STORE_LINKS.playStore}
              variant="primary"
              size="sm"
              className="ml-1 h-9 rounded-full px-4 text-[15px]"
            >
              Download
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-plany-border text-plany-secondary transition-colors hover:text-plany-primary md:hidden"
            onClick={() =>
              setOpenForPath((current) => (current === pathname ? null : pathname))
            }
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+8px)] rounded-2xl border border-plany-border bg-plany-surface/95 p-3 shadow-xl shadow-black/40 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-3 py-2.5 text-[15px] transition-colors hover:bg-white/5",
                    isActive(link.href) ? "text-plany-primary" : "text-plany-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href={STORE_LINKS.playStore} variant="primary" size="md" className="mt-2 w-full rounded-full">
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
