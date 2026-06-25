import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { StoreBadges } from "@/components/store-badges";

export const metadata = {
  title: "Download — Plany",
  description: "Get Plany on iOS and Android. Plan your day on a visual timeline.",
};

export default function DownloadPage() {
  return (
    <div className="page-grid relative min-h-full">
      <Nav />
      <main className="flex flex-1 flex-col px-4 pb-24 pt-28 md:px-6 md:pt-36">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-overline text-plany-secondary">Download</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Start planning on a timeline
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-plany-secondary md:text-lg">
            Free to start. No credit card. Available on iOS and Android.
          </p>

          <div className="mx-auto mt-10 max-w-xl glass-card p-8 md:p-12">
            <h2 className="text-xl font-medium">Get the app</h2>
            <p className="mt-3 text-sm text-plany-secondary">
              Plan your first day in under a minute.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}