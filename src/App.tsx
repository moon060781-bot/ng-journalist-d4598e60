import { useEffect, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Sidebar } from "@/components/Sidebar";
import { BriefHero } from "@/components/BriefHero";
import { TrendingToday } from "@/components/TrendingToday";
import { ReelBriefs } from "@/components/ReelBriefs";
import { LongForm } from "@/components/LongForm";
import { QuickWins } from "@/components/QuickWins";

export default function App() {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setLastUpdated(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const fmt = (d: Date) =>
    d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) +
    " · " +
    d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="min-h-screen bg-background text-[var(--page-foreground)]">
      <TopBar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <BriefHero />
          <div className="space-y-10 px-6 py-8">
            <TrendingToday />
            <ReelBriefs />
            <LongForm />
            <QuickWins />
            <footer className="border-t border-border pt-6 text-center text-[11px] uppercase tracking-widest text-muted-foreground">
              <div>Media Intelligence · Urdu Newsroom Operating System · End of Brief</div>
              <div className="mt-2">
                © {new Date().getFullYear()} NoorGee Enterprise · Last updated {fmt(lastUpdated)}
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
