// Markdown export of the daily intelligence brief.
// Keep this in sync with content shown across the dashboard components.

const trending = [
  {
    rank: "01",
    badge: "BREAKING",
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
    title: "YouTube's new 'News Shelf' algorithm boosts short-form journalism 38%",
    urdu: "YouTube algorithm نے short journalism reels کو 38% زیادہ reach دی",
    region: "Global",
    source: "Nieman Lab",
    why: "Independent Urdu creators can now outrank big TV channels on breaking news clips.",
    angle: "Tutorial: how to format a 60-sec news reel for the new shelf",
  },
];

const quickWins = [
  { topic: "Inside the CPJ 2025 killed-journalists report", hook: "'124 in one year — the deadliest year for journalism since records began'", platform: "Instagram" },
  { topic: "How to verify a viral video in 60 seconds", hook: "'5 free tools every Urdu journalist must bookmark'", platform: "YouTube" },
  { topic: "Newsroom layoffs 2025 — global map", hook: "'18,000 journalism jobs gone — yahan ja rahe hain'", platform: "TikTok" },
  { topic: "ICFJ + Google fellowship deadlines this month", hook: "'$25,000 fellowships open — apply karne ka tareeqa'", platform: "LinkedIn" },
  { topic: "Why Substack just acquired a podcast network", hook: "'Independent journalism's new playbook — thread inside'", platform: "X / Twitter" },
];

export function buildBriefMarkdown(): string {
  const now = new Date();
  const pkt = now.toLocaleString("en-GB", { timeZone: "Asia/Karachi" });

  const lines: string[] = [];
  lines.push(`# Daily Intelligence Brief — Edition 142`);
  lines.push(`*Generated: ${pkt} PKT · NoorGee Enterprise · Media Intelligence*`);
  lines.push("");
  lines.push(`## Snapshot`);
  lines.push(`- Stories Tracked: 284 (+18 today)`);
  lines.push(`- Sources Active: 27/30 (3 syncing)`);
  lines.push(`- Press-Freedom Alerts: 5 (2 critical)`);
  lines.push(`- AI / Tech Signals: 42`);
  lines.push("");

  lines.push(`## Section 01 — Trending Today`);
  for (const s of trending) {
    lines.push(`### ${s.rank} · [${s.badge}] ${s.title}`);
    lines.push(`> ${s.urdu}`);
    lines.push(`- **Region:** ${s.region}`);
    lines.push(`- **Source:** ${s.source}`);
    lines.push(`- **Why it matters:** ${s.why}`);
    lines.push(`- **Content angle:** ${s.angle}`);
    lines.push("");
  }

  lines.push(`## Section 02 — Today's Reels`);
  lines.push(`See dashboard for full thumbnail concepts, captions, hashtags, and word-for-word scripts.`);
  lines.push("");
  lines.push(`- Reel 01 — OpenAI's $250M South Asian news licensing deal (60–90s)`);
  lines.push(`- Reel 02 — 3 free AI tools every Urdu journalist must use this week (60–90s)`);
  lines.push("");

  lines.push(`## Section 04 — Long YouTube Video`);
  lines.push(`**Title:** اردو journalism کی نئی economy — کیا آپ تیار ہیں؟`);
  lines.push(`*The new Urdu journalism economy — are you ready?*`);
  lines.push("");
  lines.push(`Outline:`);
  lines.push(`1. Intro (0:00–1:30) — hook + framing`);
  lines.push(`2. Asal masla kya hai (1:30–5:00) — OpenAI, Google, Meta and Urdu data`);
  lines.push(`3. Platform aur policy ka khel (5:00–10:00) — YouTube News Shelf, Meta tiers, PECA`);
  lines.push(`4. Aap ke liye real moves (10:00–15:00) — student / freelancer / newsroom playbooks`);
  lines.push(`5. Outro (15:00–End) — journalism shape badalti hai, marti nahi`);
  lines.push("");

  lines.push(`## Section 05 — Newsletter / Article`);
  lines.push(`**Title:** Why Urdu Journalism Is Suddenly the Most Valuable Data on Earth`);
  lines.push(`Platform: LinkedIn + Substack · ~5 min read`);
  lines.push("");
  lines.push(`Sections: AI needs Urdu newsrooms · Platform shift · 3 business models · 90-day playbook for Pakistani newsrooms`);
  lines.push("");

  lines.push(`## Section 06 — Quick Wins`);
  for (let i = 0; i < quickWins.length; i++) {
    const w = quickWins[i];
    lines.push(`- **Idea 0${i + 1} · ${w.platform}** — ${w.topic}`);
    lines.push(`  - Hook: ${w.hook}`);
  }
  lines.push("");

  lines.push(`---`);
  lines.push(`© ${now.getFullYear()} NoorGee Enterprise · news.noorgee.com`);

  return lines.join("\n");
}

export function downloadBriefMarkdown() {
  const md = buildBriefMarkdown();
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `media-brief-${stamp}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
