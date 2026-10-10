import Image from "next/image";
import Link from "next/link";

const logoLink =
  "inline-flex items-center opacity-85 transition-opacity hover:opacity-100 focus-visible:opacity-100";

export function BackedByBadge() {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <span className="text-xs font-medium text-plany-secondary sm:text-[13px]">
        Backed by
      </span>
      <div className="inline-flex items-center gap-3 rounded-full border border-plany-border bg-plany-surface/70 px-4 py-2 sm:gap-3.5 sm:px-5">
        <Link
          href="https://aws.amazon.com/startups/"
          target="_blank"
          rel="noopener noreferrer"
          className={logoLink}
          aria-label="AWS Startups"
        >
          <Image
            src="/aws-startups-cropped.png"
            alt="AWS Startups"
            width={450}
            height={111}
            className="h-5 w-auto object-contain sm:h-6"
            preload
          />
        </Link>
        <span className="h-4 w-px bg-white/15" aria-hidden />
        <Link
          href="https://www.anthropic.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={logoLink}
          aria-label="Anthropic"
        >
          <Image
            src="/anthropic-wordmark.png"
            alt="Anthropic"
            width={1348}
            height={164}
            className="h-3 w-auto object-contain sm:h-3.5"
            preload
          />
        </Link>
      </div>
    </div>
  );
}
