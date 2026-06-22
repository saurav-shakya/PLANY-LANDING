import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-plany-border px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
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
          <Link
            href="https://x.com/sauravv_x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-plany-secondary transition-colors hover:text-plany-primary"
          >
            @sauravv_x
          </Link>
        </nav>
      </div>
    </footer>
  );
}
