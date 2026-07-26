import Link from "next/link";
import { PlanyMark } from "@/components/plany-logo";
import { STORE_LINKS } from "@/lib/constants";

/** Multi-color Google Play triangle (brand colors) */
function GooglePlayIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue — left face */}
      <path
        fill="#4285F4"
        d="M47.6 41.4C43.9 45.9 41.7 51.9 41.7 59.1v393.8c0 7.2 2.2 13.2 5.9 17.7l256.2-214.7L47.6 41.4z"
      />
      {/* Green — top-right */}
      <path
        fill="#34A853"
        d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z"
      />
      {/* Yellow — right tip */}
      <path
        fill="#FBBC04"
        d="M464.5 228.4 385 182.5l-59.7 51.8L385 286.1l79.5-45.7c11.4-6.6 11.4-23.1 0-29.7z"
      />
      {/* Red — bottom-right */}
      <path
        fill="#EA4335"
        d="M104.6 499l220.7-221.3 60.1 60.1L104.6 499z"
      />
    </svg>
  );
}

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 ${className}`}
    >
      <Link
        href={STORE_LINKS.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex h-14 items-center gap-3.5 rounded-xl border border-white/15 bg-black px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-white/30 hover:bg-zinc-950 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] active:scale-[0.98]"
        aria-label="Get it on Google Play"
      >
        <GooglePlayIcon className="h-8 w-8 shrink-0 transition-transform duration-200 group-hover:scale-105" />
        <div className="text-left leading-none">
          <div className="text-[10px] font-medium uppercase tracking-[0.06em] text-white/70">
            Get it on
          </div>
          <div className="mt-1 text-[17px] font-semibold tracking-tight text-white">
            Google Play
          </div>
        </div>
      </Link>
    </div>
  );
}

export function StoreBadgesCompact() {
  return (
    <div className="flex items-center gap-2 text-sm text-plany-secondary">
      <PlanyMark size={22} className="text-plany-primary" />
      <span>Available on Google Play</span>
    </div>
  );
}
