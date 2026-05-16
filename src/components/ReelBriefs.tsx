import { Film, Sparkles, Hash, Clock, Image as ImageIcon, Megaphone } from "lucide-react";

const reels = [
  {
    no: "Reel 01",
    type: "Media News Reel",
    accent: "breaking",
    duration: "60–90s",
    topic: "OpenAI's $250M South Asian news licensing deal",
    hook: "Shock + FOMO — 'Aapki Urdu journalism ki keemat raat o raat badal gayi'",
    thumb: {
      text: "URDU JOURNALISM = $250M؟",
      face: "Surprised, leaning into camera, raised eyebrows",
      bg: "Newsroom monitor wall, OpenAI logo + currency overlay, red breaking strap",
      visual: "Split screen — anchor + scrolling deal headline",
    },
    caption:
      "OpenAI نے Urdu news data خریدنا شروع کر دیا ہے۔\nاب ہر Urdu newsroom کی asli value badal rahi hai۔\nPakistani media ke liye yeh moment kya hai؟\nکمنٹ میں MEDIA لکھیں، مکمل رپورٹ بھیج دوں گا۔",
    hashtags: ["#UrduMedia", "#Journalism", "#AIinMedia", "#Newsroom", "#OpenAI", "#PakistanMedia"],
    script: `[SCREEN: Black frame, ticker chalti hui]
ناظرین ! ایک خبر جو پوری Urdu journalism کو بدل سکتی ہے۔
[ZOOM IN]
OpenAI نے جنوبی ایشیا کے تین بڑے news groups کے ساتھ $250 million کا licensing deal sign کر لیا ہے۔
[CUT TO: Anchor]
سوال یہ ہے کہ Urdu content کی asli قیمت کیا ہے؟
آج سے پہلے ہم سمجھتے تھے کہ Urdu journalism کم قیمت ہے۔
[GRAPHIC: dollar signs flowing into "اردو" text]
لیکن AI models کو train کرنے کے لیے Urdu data، خاص طور پر news reporting، sone se zyada qeemti ban gayi ہے۔
[PAUSE]
اس کا مطلب کیا ہے؟
ہر چھوٹا newsroom، ہر freelance journalist، اور ہر Urdu YouTuber اب ایک نئی economy کا حصہ ہے۔
[CUT TO: Map of South Asia with pulse dots]
لیکن ایک خطرہ بھی ہے۔
اگر آپ اپنا content بغیر سوچے AI کو دے رہے ہیں، آپ apni asli قیمت کھو رہے ہیں۔
[SCREEN: bold Urdu text "Apna Data Apni Taqat"]
2025 کا rule simple ہے — جو journalist apne data ko samjhega، wahi survive کرے گا۔
[CTA SCREEN]
کمنٹ میں MEDIA لکھیں، میں آپ کو پوری رپورٹ بھیجوں گا۔`,
  },
  {
    no: "Reel 02",
    type: "AI in Media / Tool Reel",
    accent: "intel",
    duration: "60–90s",
    topic: "3 free AI tools every Urdu journalist must use this week",
    hook: "Secret knowledge — '95% Urdu journalists ye 3 tools nahi jaante'",
    thumb: {
      text: "3 AI TOOLS — صحافیوں کے لیے",
      face: "Pointing finger, intense eye contact, half-smile",
      bg: "Dark newsroom desk, 3 glowing tool logos arranged like cards",
      visual: "Numbered 1-2-3 stack, neon intel-blue borders",
    },
    caption:
      "صرف 5 منٹ، 3 AI tools، اور آپ کی reporting کا level بدل جائے گا۔\nہر Urdu journalist ko ye pata hona chahiye۔\nPakistani newsrooms ابھی تک manually kaam kar rahe hain۔\nFollow karo agar serious journalism seekhni hai۔\nکمنٹ میں TOOLS لکھیں۔",
    hashtags: ["#JournalismTools", "#AIforJournalists", "#UrduJournalism", "#NewsroomAI", "#FactChecking"],
    script: `[SCREEN: Bold text "3 AI TOOLS صحافیوں کے لیے"]
ناظرین! اگر آپ journalism کرتے ہیں اور ابھی تک یہ 3 tools استعمال نہیں کر رہے، آپ اپنا time waste کر رہے ہیں۔
[CUT TO: Tool 1 demo screen]
پہلا tool — Perplexity۔
یہ ایک AI search engine ہے جو ہر فیکٹ کے ساتھ source بھی دیتا ہے۔
30 منٹ کی research آپ 3 منٹ میں مکمل کر سکتے ہیں۔
[ZOOM IN: source citations]
[CUT TO: Tool 2 demo]
دوسرا — Otter.ai۔
کسی بھی interview کو real time میں transcribe کرتا ہے، Urdu English mix بھی۔
آپ کا 2 گھنٹے کا کام 10 منٹ میں۔
[GRAPHIC: timer counting down]
[CUT TO: Tool 3 demo]
تیسرا اور سب سے طاقتور — InVID Verification Tool۔
یہ آپ کو بتاتا ہے کہ کوئی بھی video asli ہے یا fake۔
آج کل misinformation کا دور ہے، ہر journalist کو verification آنی چاہیے۔
[PAUSE]
[SCREEN: bold "FREE" stamp]
تینوں tools free ہیں۔
ابھی try کریں اور اپنی reporting کو professional level پر لے جائیں۔
[CTA]
کمنٹ میں TOOLS لکھیں، میں مکمل tutorial بھیجوں گا۔`,
  },
];

export function ReelBriefs() {
  return (
    <section>
      <div className="mb-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-intel">
          <Film className="h-3.5 w-3.5" /> Section 02 — Today's Reels
        </div>
        <h3 className="mt-1 text-xl font-bold">Production briefs for camera-ready shoots</h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {reels.map((r) => (
          <article
            key={r.no}
            className="overflow-hidden rounded-xl border border-border bg-surface/80"
          >
            <header
              className={`flex items-center justify-between border-b border-border px-5 py-3 ${
                r.accent === "breaking" ? "bg-breaking/10" : "bg-intel/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {r.no}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    r.accent === "breaking" ? "text-breaking" : "text-intel"
                  }`}
                >
                  {r.type}
                </span>
              </div>
              <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                <Clock className="h-3 w-3" /> {r.duration}
              </span>
            </header>

            <div className="space-y-4 p-5">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Topic
                </div>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{r.topic}</p>
              </div>

              <div className="rounded-md bg-surface/50 p-3">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-editorial">
                  <Sparkles className="h-3 w-3" /> Hook strategy
                </div>
                <p className="mt-1 text-sm text-foreground/90">{r.hook}</p>
              </div>

              {/* Thumbnail concept */}
              <div className="rounded-md border border-border bg-surface/60 p-3">
                <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  <ImageIcon className="h-3 w-3" /> Thumbnail concept
                </div>
                <div className="space-y-1.5 text-xs">
                  <Row k="On-screen text" v={r.thumb.text} urdu />
                  <Row k="Expression" v={r.thumb.face} />
                  <Row k="Background" v={r.thumb.bg} />
                  <Row k="Visual element" v={r.thumb.visual} />
                </div>
              </div>

              {/* Caption */}
              <div>
                <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  <Megaphone className="h-3 w-3" /> Caption
                </div>
                <pre
                  dir="rtl"
                  className="font-urdu whitespace-pre-wrap rounded-md border border-border bg-surface/60 p-3 text-sm leading-loose text-foreground/95"
                >
                  {r.caption}
                </pre>
              </div>

              {/* Hashtags */}
              <div>
                <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  <Hash className="h-3 w-3" /> Hashtags
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {r.hashtags.map((h) => (
                    <span
                      key={h}
                      className="rounded bg-intel/10 px-2 py-0.5 font-mono text-[11px] text-intel"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Script */}
              <details className="group rounded-md border border-border bg-surface/60">
                <summary className="flex cursor-pointer items-center justify-between px-3 py-2 text-[11px] font-semibold uppercase tracking-widest text-foreground">
                  <span>Full script — word for word</span>
                  <span className="font-mono text-muted-foreground group-open:rotate-180 transition">▾</span>
                </summary>
                <pre
                  dir="rtl"
                  className="font-urdu max-h-96 overflow-auto whitespace-pre-wrap border-t border-border p-4 text-sm leading-loose text-foreground/95"
                >
                  {r.script}
                </pre>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Row({ k, v, urdu }: { k: string; v: string; urdu?: boolean }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-2">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</span>
      <span
        dir={urdu ? "rtl" : "ltr"}
        className={urdu ? "font-urdu text-foreground" : "text-foreground/90"}
      >
        {v}
      </span>
    </div>
  );
}
