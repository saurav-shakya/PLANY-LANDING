import Image from "next/image";
import Link from "next/link";

export function AwsStartupsBadge() {
  return (
    <Link
      href="https://aws.amazon.com/startups/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card group inline-flex flex-col items-center gap-3 px-6 py-4 transition-all hover:border-white/20 hover:bg-white/[0.07] sm:flex-row sm:gap-4 sm:px-8 sm:py-5"
      aria-label="backed by AWS Startups"
    >
      <span className="text-base font-medium text-plany-primary sm:text-lg">
         Backed by
      </span>
      <Image
        src="/aws-startups-cropped.png"
        alt="AWS Startups"
        width={450}
        height={111}
        className="h-10 w-auto object-contain sm:h-12 md:h-14"
        priority
      />
    </Link>
  );
}