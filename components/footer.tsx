import { Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons = {
  x: XIcon,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
} as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-plany-border px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => {
            const Icon = socialIcons[link.id];
            return (
              <Link
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-plany-border bg-plany-surface/60 text-plany-secondary transition-all hover:border-white/20 hover:bg-white/5 hover:text-plany-primary"
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <Image
              src="/plany-icon.png"
              alt="Plany"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="text-sm text-plany-secondary">
              Made by Saurav in India
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-plany-secondary transition-colors hover:text-plany-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}