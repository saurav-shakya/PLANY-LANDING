"use client";

import Link from "next/link";
import { PlanyBrand } from "@/components/plany-logo";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CommunityPanel } from "@/components/community-panel";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const communityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setCommunityOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (communityRef.current && !communityRef.current.contains(e.target as Node)) {
        setCommunityOpen(false);
      }
    };
    if (communityOpen) {
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }
  }, [communityOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="relative mx-auto max-w-5xl" ref={communityRef}>
        <nav
          className={cn(
            "flex h-14 items-center justify-between radius-card border px-4 transition-all duration-300 md:px-6",
            scrolled || communityOpen
              ? "border-plany-border bg-plany-surface/90 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "border-plany-border/50 bg-plany-surface/40 backdrop-blur-md"
          )}
        >
          <Link href="/" aria-label="Plany home" className="transition-opacity hover:opacity-90">
            <PlanyBrand markSize={34} />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors hover:text-plany-primary",
                  isActive(link.href)
                    ? "text-plany-primary underline decoration-plany-primary underline-offset-8"
                    : "text-plany-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setCommunityOpen((open) => !open)}
              className={cn(
                "text-sm transition-colors hover:text-plany-primary",
                communityOpen
                  ? "text-plany-primary underline decoration-plany-primary underline-offset-8"
                  : "text-plany-secondary"
              )}
              aria-expanded={communityOpen}
              aria-haspopup="true"
            >
              Community
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button href="/download" variant="primary" size="sm" className="hidden sm:inline-flex">
              Start with PLANY
            </Button>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-plany-border text-plany-secondary transition-colors hover:text-plany-primary md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
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
          </div>
        </nav>

        {communityOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+8px)] radius-card border border-plany-border bg-plany-surface/80 p-4 shadow-xl shadow-black/40 backdrop-blur-2xl">
            <CommunityPanel onLinkClick={() => setCommunityOpen(false)} />
          </div>
        )}

        {mobileOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+8px)] radius-card border border-plany-border bg-plany-surface/95 p-4 shadow-xl shadow-black/40 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5",
                    isActive(link.href) ? "text-plany-primary" : "text-plany-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <p className="mt-2 px-3 text-overline text-plany-secondary">Community</p>
              <CommunityPanel
                className="mt-2 grid-cols-1"
                onLinkClick={() => setMobileOpen(false)}
              />
              <Button href="/download" variant="primary" size="md" className="mt-3 w-full">
                Start with PLANY
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}