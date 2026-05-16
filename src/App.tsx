import { TopBar } from "@/components/TopBar";
import { Sidebar } from "@/components/Sidebar";
import { BriefHero } from "@/components/BriefHero";
import { TrendingToday } from "@/components/TrendingToday";
import { ReelBriefs } from "@/components/ReelBriefs";
import { LongForm } from "@/components/LongForm";
import { QuickWins } from "@/components/QuickWins";

export default function App() {
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
            <footer className="border-t border-border pt-6 text-center text-[11px] uppercase tracking-widest text-muted-foreground">
              Media Intelligence · Urdu Newsroom Operating System · End of Brief
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
