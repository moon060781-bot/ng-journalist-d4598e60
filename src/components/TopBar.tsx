import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Languages, Radio, Bell, Search } from "lucide-react";

const tickerItems = [
  "BREAKING — Reuters Institute reports global trust in news drops to 40%",
  "Pakistan: Press freedom concerns rise after new digital regulation draft",
  "Meta rolls out new monetization tier for journalism creators",
  "OpenAI signs licensing deal with major South Asian news network",
  "CPJ: 124 journalists killed worldwide in 2025 — record high",
  "YouTube updates algorithm — short-form news content sees 38% lift",
  "Semafor launches new South Asia bureau focused on Urdu audiences",
];

export function TopBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const pkt = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
      setTime(
        pkt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) +
          " PKT",
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
      {/* Breaking ticker */}
      <div className="flex items-center border-b border-border bg-surface/60">
        <div className="flex shrink-0 items-center gap-2 bg-breaking px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-breaking-foreground">
          <span className="live-dot inline-block h-2 w-2 rounded-full bg-white" />
          Live Wire
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-ticker flex whitespace-nowrap py-1.5 text-xs text-muted-foreground">
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className="mx-8 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-intel" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-intel/15 text-intel">
            <Radio className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <h1 className="text-sm font-bold tracking-tight text-[var(--page-foreground)]">
              MEDIA INTELLIGENCE <span className="text-intel">/</span> اردو
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Global Newsroom Operating System
            </p>
          </div>
        </Link>

        <div className="hidden flex-1 max-w-md md:block">
          <div className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground">
            <Search className="h-4 w-4" />
            <input
              placeholder="Search stories, sources, regions…"
              className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            />
            <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs hover:bg-surface-elevated">
            <Globe className="h-3.5 w-3.5 text-intel" /> Global
          </button>
          <button className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs hover:bg-surface-elevated">
            <Languages className="h-3.5 w-3.5 text-intel" /> اردو / EN
          </button>
          <button className="relative rounded-md border border-border bg-surface p-2 hover:bg-surface-elevated">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-breaking opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-breaking" />
            </span>
          </button>
          <div className="ml-1 hidden text-right text-xs leading-tight md:block">
            <div className="font-mono font-semibold text-foreground">{time}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Karachi Bureau
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
