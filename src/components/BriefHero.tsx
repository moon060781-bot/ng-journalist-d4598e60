import { Calendar, Clock, FileDown, RefreshCw } from "lucide-react";

export function BriefHero() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const stats = [
    { label: "Stories Tracked", value: "284", change: "+18 today", tone: "intel" },
    { label: "Sources Active", value: "27/30", change: "3 syncing", tone: "positive" },
    { label: "Press-Freedom Alerts", value: "5", change: "2 critical", tone: "breaking" },
    { label: "AI / Tech Signals", value: "42", change: "Hot beat", tone: "editorial" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface grid-bg dark">
      <div className="scanlines pointer-events-none absolute inset-0" />
      <div className="relative px-6 py-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-intel">
              <span className="h-px w-8 bg-intel" />
              Daily Intelligence Brief — Edition 142
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Today's Newsroom Command —{" "}
              <span className="font-urdu text-editorial">میڈیا بریفنگ</span>
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {today}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> Generated 09:00 PKT
              </span>
              <span className="flex items-center gap-1.5">
                <span className="live-dot h-2 w-2 rounded-full bg-positive" /> Live monitoring
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground transition hover:bg-surface-elevated">
              <RefreshCw className="h-3.5 w-3.5" /> Re-sync sources
            </button>
            <button className="flex items-center gap-1.5 rounded-md bg-intel px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-intel/20 hover:bg-intel/90">
              <FileDown className="h-3.5 w-3.5" /> Export Brief
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-surface/80 p-4 backdrop-blur-sm"
            >
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-foreground">{s.value}</span>
                <span
                  className={`text-[10px] font-medium ${
                    s.tone === "breaking"
                      ? "text-breaking"
                      : s.tone === "positive"
                        ? "text-positive"
                        : s.tone === "editorial"
                          ? "text-editorial"
                          : "text-intel"
                  }`}
                >
                  {s.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
