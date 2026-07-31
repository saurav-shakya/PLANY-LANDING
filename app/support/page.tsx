import Link from "next/link";
import { Mail, MessageCircle, HelpCircle, UserX } from "lucide-react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { STORE_LINKS } from "@/lib/constants";

const CHANNELS = [
  {
    icon: Mail,
    title: "Email",
    description: "Bugs, account help, or feature ideas. We read every note.",
    href: "mailto:support@plany.space",
    cta: "support@plany.space",
    external: false,
  },
  {
    icon: MessageCircle,
    title: "X / Twitter",
    description: "Quick questions and product updates from the founder.",
    href: "https://x.com/sauravv_x",
    cta: "@sauravv_x",
    external: true,
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Common answers about timelines, reminders, and AI check-ins.",
    href: "/#faq",
    cta: "Browse FAQ",
    external: false,
  },
  {
    icon: UserX,
    title: "Delete account",
    description:
      "Steps to delete your Plany Timeline account, restore window, and what data is removed.",
    href: "/blog/how-to-delete-your-plany-timeline-account",
    cta: "Read the guide",
    external: false,
  },
] as const;

export const metadata = {
  title: "Support | Plany",
  description: "Get help with Plany: email, social, or FAQ.",
};

export default function SupportPage() {
  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main className="flex flex-1 flex-col px-4 pb-24 pt-28 md:px-6 md:pt-36">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <p className="text-overline text-plany-secondary">Support</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              How can we help?
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-plany-secondary md:text-lg">
              Small team, real humans. Pick a channel. We usually reply within
              a day.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex flex-col rounded-2xl border border-white/[0.08] bg-[#0d0e10]/80 p-5 transition-all hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-plany-primary transition-colors group-hover:border-white/20">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <h2 className="mt-5 text-base font-medium text-plany-primary">
                    {channel.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-plany-secondary">
                    {channel.description}
                  </p>
                  <span className="mt-5 text-sm font-medium text-plany-primary underline decoration-white/20 underline-offset-4 transition-colors group-hover:decoration-white/50">
                    {channel.cta}
                  </span>
                </a>
              );
            })}
          </div>

          <p className="mt-12 text-center text-sm text-plany-secondary">
            Looking for the app?{" "}
            <Link
              href={STORE_LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-plany-primary underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50"
            >
              Download Plany
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
