import {
  Flame,
  Scale,
  ShieldAlert,
  Cpu,
  ShieldCheck,
  Banknote,
  Layers,
  Sparkles,
  GraduationCap,
  Search,
  LayoutDashboard,
} from "lucide-react";

type NavItem = {
  icon: typeof Flame;
  name: string;
  count: number | null;
  href: string;
  active?: boolean;
  accent?: "breaking" | "intel" | "editorial" | "positive";
};

const sections: { label: string; items: NavItem[] }[] = [
  {
    label: "Briefing",
    items: [
      { icon: LayoutDashboard, name: "Daily Brief", count: null, href: "#brief", active: true },
      { icon: Flame, name: "Breaking News", count: 7, href: "#trending", accent: "breaking" },
    ],
  },
  {
    label: "Beats",
    items: [
      { icon: Scale, name: "Media Policy", count: 12, href: "#longform" },
      { icon: ShieldAlert, name: "Press Freedom", count: 9, href: "#trending" },
      { icon: Cpu, name: "AI in Media", count: 24, href: "#reels", accent: "intel" },
      { icon: ShieldCheck, name: "Journalist Safety", count: 5, href: "#quickwins" },
      { icon: Banknote, name: "Newsroom Economy", count: 14, href: "#longform" },
      { icon: Layers, name: "Platform Changes", count: 18, href: "#trending" },
    ],
  },
  {
    label: "Pipeline",
    items: [
      { icon: Sparkles, name: "Opportunities", count: 6, href: "#quickwins", accent: "positive" },
      { icon: GraduationCap, name: "Fellowships", count: 4, href: "#quickwins" },
      { icon: Search, name: "Investigations", count: 3, href: "#longform", accent: "editorial" },
    ],
  },
];

function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-border bg-sidebar dark lg:block">
      <nav className="sticky top-[97px] flex h-[calc(100vh-97px)] flex-col gap-6 overflow-y-auto px-3 py-5">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {section.label}
            </div>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const accentColor =
                  item.accent === "breaking"
                    ? "text-breaking"
                    : item.accent === "intel"
                      ? "text-intel"
                      : item.accent === "editorial"
                        ? "text-editorial"
                        : item.accent === "positive"
                          ? "text-positive"
                          : "text-muted-foreground";
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNav(e, item.href)}
                      className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition ${
                        item.active
                          ? "bg-intel/10 text-foreground ring-1 ring-intel/30"
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className={`h-4 w-4 ${item.active ? "text-intel" : accentColor}`} />
                        {item.name}
                      </span>
                      {item.count !== null && (
                        <span
                          className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                            item.accent === "breaking"
                              ? "bg-breaking/15 text-breaking"
                              : "bg-surface text-muted-foreground"
                          }`}
                        >
                          {item.count}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div className="mt-auto rounded-lg border border-border bg-surface p-3">
          <div className="mb-1.5 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-positive">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-positive" />
            Signal Strong
          </div>
          <p className="text-xs leading-snug text-muted-foreground">
            27 sources monitored · 4 regions · last sync 12s ago
          </p>
        </div>
      </nav>
    </aside>
  );
}
