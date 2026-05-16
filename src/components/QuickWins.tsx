import { Zap } from "lucide-react";

const wins = [
  {
    topic: "Inside the CPJ 2025 killed-journalists report",
    hook: "'124 in one year — the deadliest year for journalism since records began'",
    why: "Hard data + human story = unbeatable engagement on press freedom",
    platform: "Instagram",
    color: "breaking",
  },
  {
    topic: "How to verify a viral video in 60 seconds",
    hook: "'5 free tools every Urdu journalist must bookmark'",
    why: "Practical skill — high save + share rate",
    platform: "YouTube",
    color: "intel",
  },
  {
    topic: "Newsroom layoffs 2025 — global map",
    hook: "'18,000 journalism jobs gone — yahan ja rahe hain'",
    why: "Visual data story, fits TikTok scroll behaviour",
    platform: "TikTok",
    color: "warning",
  },
  {
    topic: "ICFJ + Google fellowship deadlines this month",
    hook: "'$25,000 fellowships open — apply karne ka tareeqa'",
    why: "Career-impact = aggressive sharing in journalism networks",
    platform: "LinkedIn",
    color: "positive",
  },
  {
    topic: "Why Substack just acquired a podcast network",
    hook: "'Independent journalism's new playbook — thread inside'",
    why: "Media-business insider take performs strongly here",
    platform: "X / Twitter",
    color: "editorial",
  },
];

const platformBg: Record<string, string> = {
  Instagram: "from-pink-500/20 to-purple-500/10",
  YouTube: "from-red-500/20 to-red-500/5",
  TikTok: "from-cyan-500/20 to-pink-500/10",
  LinkedIn: "from-blue-500/20 to-blue-500/5",
  "X / Twitter": "from-slate-500/20 to-slate-700/10",
};

export function QuickWins() {
  return (
    <section>
      <div className="mb-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-intel">
          <Zap className="h-3.5 w-3.5" /> Section 06 — Quick Wins
        </div>
        <h3 className="mt-1 text-xl font-bold">5 backup ideas if today's main brief stalls</h3>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {wins.map((w, i) => (
          <article
            key={i}
            className={`relative overflow-hidden rounded-xl border border-border bg-gradient-to-br ${platformBg[w.platform]} bg-surface p-4 transition hover:border-intel/40 dark`}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Idea 0{i + 1}
              </span>
              <span
                className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  w.color === "breaking"
                    ? "bg-breaking/15 text-breaking"
                    : w.color === "intel"
                      ? "bg-intel/15 text-intel"
                      : w.color === "warning"
                        ? "bg-warning/15 text-warning"
                        : w.color === "positive"
                          ? "bg-positive/15 text-positive"
                          : "bg-editorial/15 text-editorial"
                }`}
              >
                {w.platform}
              </span>
            </div>

            <h4 className="text-sm font-semibold leading-snug text-foreground">{w.topic}</h4>

            <div className="mt-3 space-y-2 text-xs">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-editorial">
                  Hook
                </div>
                <p className="text-foreground/90">{w.hook}</p>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Why people click
                </div>
                <p className="text-foreground/90">{w.why}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
