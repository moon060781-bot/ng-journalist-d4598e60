import { useEffect, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Sidebar } from "@/components/Sidebar";
import { BriefHero } from "@/components/BriefHero";
import { TrendingToday } from "@/components/TrendingToday";
import { ReelBriefs } from "@/components/ReelBriefs";
import { LongForm } from "@/components/LongForm";
import { QuickWins } from "@/components/QuickWins";

export default function App() {
  const [lastUpdate, setLastUpdate] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const pkt = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
      setLastUpdate(
        pkt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) +
          " · " +
          pkt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) +
          " PKT",
      );
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <footer className="border-t border-border pt-6 pb-4 text-center text-[11px] uppercase tracking-widest text-muted-foreground space-y-2">
              <div>Media Intelligence · Urdu Newsroom Operating System · End of Brief</div>
              <div className="text-[10px] normal-case tracking-normal">
                &copy; {new Date().getFullYear()} NoorGee Enterprise · Last updated {lastUpdate}
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
