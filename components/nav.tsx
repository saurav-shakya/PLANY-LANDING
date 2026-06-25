"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between radius-card border px-4 transition-all duration-300 md:px-6",
          scrolled
            ? "border-plany-border bg-plany-surface/90 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "border-plany-border/50 bg-plany-surface/40 backdrop-blur-md"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/plany-icon.png"
            alt="Plany"
            width={28}
            height={28}
            className="rounded-md"
            priority
          />
          <span className="text-base font-medium tracking-tight">Plany</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-plany-secondary transition-colors hover:text-plany-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() =>
            document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Download
        </Button>
      </nav>
    </header>
  );
}