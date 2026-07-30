import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { DownloadHero } from "@/components/download-hero";

export const metadata = {
  title: "Download | Plany",
  description: "Get Plany on iOS and Android. Plan your day on a visual timeline.",
};

export default function DownloadPage() {
  return (
    <div className="page-grid relative flex min-h-full flex-col">
      <Nav />

      <main className="flex flex-1 flex-col px-4 pb-0 pt-24 md:px-6 md:pt-28 lg:min-h-0 lg:px-8 lg:pb-8 lg:pt-28">
        <DownloadHero />
      </main>

      <Footer />
    </div>
  );
}
