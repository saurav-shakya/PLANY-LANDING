import { PhoneFrame } from "@/components/phone-frame";
import { SCREENSHOTS } from "@/lib/screenshots";

export function PhoneMockup() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,150,149,0.12),transparent_70%)] blur-2xl"
        aria-hidden
      />
      <PhoneFrame
        src={SCREENSHOTS.timeline}
        alt="Plany timeline with Walk, Pan card apply, and daily tasks on a color-coded schedule"
        priority
        size="lg"
        className="relative z-10"
      />
    </div>
  );
}
