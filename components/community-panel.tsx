"use client";

import { Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap = {
  x: XIcon,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
} as const;

type CommunityPanelProps = {
  className?: string;
  onLinkClick?: () => void;
};

export function CommunityPanel({ className, onLinkClick }: CommunityPanelProps) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {SOCIAL_LINKS.map((link) => {
        const Icon = iconMap[link.id];
        return (
          <Link
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="glass-card group flex items-center gap-4 p-4 transition-all hover:border-white/20 hover:bg-white/[0.07]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
              <Icon className="h-5 w-5 text-plany-primary" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{link.label}</p>
              <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-plany-secondary">
                {link.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}