import { TrendingUp, MapPin, ExternalLink, Bookmark } from "lucide-react";

const trending = [
  {
    rank: "01",
    badge: "BREAKING",
    badgeTone: "breaking",
    title: "OpenAI signs $250M licensing deal with three South Asian news groups",
    urdu: "OpenAI نے جنوبی ایشیا کے بڑے میڈیا ادارے کے ساتھ معاہدہ کر لیا",
    region: "Global · South Asia",
    source: "Semafor Media",
    why: "AI training data deals are quietly redrawing newsroom economics — this is the first major Urdu-language data set ever licensed.",
    angle: "Explain why this changes the value of Urdu journalism overnight",
  },
  {
    rank: "02",
    badge: "PRESS FREEDOM",
    badgeTone: "warning",
    title: "Pakistan's draft PECA amendments could criminalize newsroom encryption",
    urdu: "پاکستان میں PECA ترامیم سے صحافیوں پر دباؤ بڑھ سکتا ہے",
    region: "Pakistan",
    source: "CPJ + Press Gazette",
    why: "Affects every working journalist, freelancer, and YouTuber in Pakistan and the diaspora covering home affairs.",
    angle: "Reel: 'Aapka source ab safe nahi' — explain in 60 seconds",
  },
  {
    rank: "03",
    badge: "PLATFORM",
    badgeTone: "intel",
    title: "YouTube's new 'News Shelf' algorithm boosts short-form journalism 38%",
    urdu: "YouTube algorithm نے short journalism reels کو 38% زیادہ reach دی",
    region: "Global",
    source: "Nieman Lab",
    why: "Independent Urdu creators can now outrank big TV channels on breaking news clips.",
    angle: "Tutorial: how to format a 60-sec news reel for the new shelf",
  },
];

export function TrendingToday() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-intel">
            <TrendingUp className="h-3.5 w-3.5" /> Section 01 — Trending Today
          </div>
          <h3 className="mt-1 text-xl font-bold">Top 3 stories shaping the global newsroom</h3>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
          Auto-ranked by signal strength
        </span>
      </div>

      <div className="space-y-3">
        {trending.map((s) => (
          <article
            key={s.rank}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition hover:border-intel/40 hover:bg-surface dark"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex shrink-0 flex-row items-center gap-3 md:w-32 md:flex-col md:items-start">
                <span className="font-mono text-3xl font-bold text-muted-foreground/40">
                  {s.rank}
                </span>
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    s.badgeTone === "breaking"
                      ? "bg-breaking/15 text-breaking"
                      : s.badgeTone === "warning"
                        ? "bg-warning/15 text-warning"
                        : "bg-intel/15 text-intel"
                  }`}
                >
                  {s.badgeTone === "breaking" && (
                    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-breaking align-middle pulse-breaking" />
                  )}
                  {s.badge}
                </span>
              </div>

              <div className="flex-1">
                <h4 className="text-base font-semibold leading-snug text-foreground group-hover:text-intel">
                  {s.title}
                </h4>
                <p className="font-urdu mt-2 text-lg text-muted-foreground" dir="rtl">
                  {s.urdu}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {s.region}
                  </span>
                  <span>·</span>
                  <span className="text-intel">Source: {s.source}</span>
                </div>

                <div className="mt-3 grid gap-3 rounded-md border border-border bg-background/40 p-3 text-xs leading-relaxed md:grid-cols-2">
                  <div>
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Why it matters
                    </div>
                    <p className="text-foreground/90">{s.why}</p>
                  </div>
                  <div>
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-editorial">
                      Content angle
                    </div>
                    <p className="text-foreground/90">{s.angle}</p>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 flex-row gap-2 md:flex-col">
                <button className="rounded-md border border-border bg-surface-elevated p-2 text-muted-foreground hover:text-foreground">
                  <Bookmark className="h-4 w-4" />
                </button>
                <button className="rounded-md border border-border bg-surface-elevated p-2 text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
