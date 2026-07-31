import { Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS, STORE_LINKS } from "@/lib/constants";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Timeline", href: "/#product" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "X / Twitter", href: "https://x.com/planydotspace", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/planydotspace/", external: true },
      { label: "Instagram", href: "https://instagram.com/plany.space", external: true },
      { label: "YouTube", href: "https://youtube.com/@planyspace", external: true },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Contact Support", href: "mailto:support@plany.space", external: true },
      {
        label: "Delete account",
        href: "/blog/how-to-delete-your-plany-timeline-account",
      },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: "Get the app", href: STORE_LINKS.playStore, external: true },
      { label: "Plany for Android", href: STORE_LINKS.playStore, external: true },
    ],
  },
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

const socialBrandClass = {
  x: "hover:border-white/25 hover:bg-white/10 hover:text-white",
  linkedin: "hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/15 hover:text-[#0A66C2]",
  instagram: "hover:border-[#E1306C]/40 hover:bg-[#E1306C]/15 hover:text-[#E1306C]",
  youtube: "hover:border-[#FF0000]/40 hover:bg-[#FF0000]/15 hover:text-[#FF0000]",
} as const;

function FooterNavLink({ link }: { link: FooterLink }) {
  const className =
    "text-sm text-plany-secondary transition-colors hover:text-plany-primary";

  if (link.external) {
    return (
      <a
        href={link.href}
        className={className}
        {...(link.href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-plany-border bg-plany-neutral px-4 pt-14 pb-10 md:px-6 md:pt-16">
      <div className="mx-auto max-w-5xl">
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8"
        >
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-overline text-plany-primary">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <FooterNavLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-14 border-t border-plany-border pt-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-sm text-plany-secondary">
              © {new Date().getFullYear()} Plany Space. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.id];
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-plany-border bg-plany-surface/40 text-plany-secondary transition-all ${socialBrandClass[link.id]}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
