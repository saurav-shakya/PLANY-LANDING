import Image from "next/image";
import Link from "next/link";

export function AwsStartupsBadge() {
  return (
    <Link
      href="https://aws.amazon.com/startups/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card group inline-flex items-center gap-2 px-3 py-1.5 transition-all hover:border-white/20 hover:bg-white/[0.07] sm:gap-2.5 sm:px-3.5 sm:py-2"
      aria-label="Backed by AWS Startups"
    >
      <span className="text-xs font-medium text-plany-secondary sm:text-[13px]">
        Backed by
      </span>
      <Image
        src="/aws-startups-cropped.png"
        alt="AWS Startups"
        width={450}
        height={111}
        className="h-5 w-auto object-contain sm:h-6"
        priority
      />
    </Link>
  );
}