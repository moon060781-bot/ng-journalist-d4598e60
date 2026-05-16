import { Youtube, Newspaper } from "lucide-react";

const sections = [
  {
    range: "0:00 – 1:30",
    title: "INTRO",
    body: `[SCREEN: dark newsroom with monitors flickering]
ناظرین ! آج کی video ہر اس person کے لیے ہے جو journalism کرتا ہے، یا karna chahta ہے۔
[PAUSE 2s]
کیونکہ آنے والے 6 مہینوں میں Urdu media کی پوری economy بدلنے والی ہے — اور 90% لوگوں کو پتہ بھی نہیں۔
[CUT TO ANCHOR]
میں آج آپ کو وہ بتانے والا ہوں جو کوئی mainstream channel نہیں بتائے گا۔`,
  },
  {
    range: "1:30 – 5:00",
    title: "SECTION 1 — Asal masla kya hai",
    body: `OpenAI، Google، اور Meta — تینوں Urdu data کے پیچھے دوڑ رہے ہیں۔
کیوں؟ کیونکہ Urdu، world کی top 10 spoken languages میں ہے۔
[GRAPHIC: world map with Urdu speaker counts]
لیکن AI models کے پاس Urdu کا quality reporting بہت کم ہے۔
یہاں سے Pakistani aur diaspora journalists کے لیے ایک نیا dor شروع ہو رہا ہے۔`,
  },
  {
    range: "5:00 – 10:00",
    title: "SECTION 2 — Platform aur policy ka khel",
    body: `YouTube نے News Shelf algorithm launch کر دی۔
Meta نے creator monetization کا new tier نکالا۔
اور Pakistan میں PECA کی نئی ترامیم آ رہی ہیں۔
[CUT TO: split screen of headlines]
ہر تبدیلی ایک message دے رہی ہے — independent journalism کی قیمت بڑھ رہی ہے، لیکن خطرہ بھی۔`,
  },
  {
    range: "10:00 – 15:00",
    title: "SECTION 3 — Aap ke liye real moves",
    body: `اگر آپ student ہیں — abhi se AI tools seekho.
اگر freelancer ہیں — apne niche pe focus karo، general news chhoro.
اگر newsroom کا حصہ ہیں — workflow automation seekho.
[GRAPHIC: 3 personas with action steps]
Pakistani Urdu digital media ecosystem میں next 12 months opportunity ka tsunami leke aane wale hain.`,
  },
  {
    range: "15:00 – End",
    title: "OUTRO",
    body: `[CUT TO: anchor calm tone]
دیکھیں — journalism marti nahi، sirf shape badalti hai.
آنے والا dor unka ہے جو information ko story banana janta hai، aur AI ko tool banata ہے، threat نہیں.
[PAUSE]
اگر آپ Urdu media کا future samajhna chahte ہیں — channel subscribe کریں، اور notification on کریں۔
ملتے ہیں اگلی video میں۔`,
  },
];

export function LongForm() {
  return (
    <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
      {/* YouTube long-form */}
      <article className="overflow-hidden rounded-xl border border-border bg-surface dark">
        <header className="flex items-center justify-between border-b border-border bg-editorial/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <Youtube className="h-4 w-4 text-editorial" />
            <span className="text-sm font-semibold text-editorial">
              Section 04 — Long YouTube Video
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            10–20 min · Media Industry Deep Dive
          </span>
        </header>

        <div className="space-y-5 p-5">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Title
            </div>
            <h4
              dir="rtl"
              className="font-urdu mt-1 text-2xl font-bold leading-snug text-foreground"
            >
              اردو journalism کی نئی economy — کیا آپ تیار ہیں؟
            </h4>
            <p className="mt-1 text-sm italic text-muted-foreground">
              English subtitle: The new Urdu journalism economy — are you ready?
            </p>
          </div>

          <div className="rounded-md border border-border bg-background/60 p-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-editorial">
              Thumbnail concept
            </div>
            <ul className="space-y-1 text-xs text-foreground/90">
              <li>
                <b className="text-muted-foreground">Expression —</b> Anchor staring straight,
                concerned but confident
              </li>
              <li>
                <b className="text-muted-foreground">Text overlay —</b>{" "}
                <span className="font-urdu">اردو میڈیا کا نیا دور</span> + red "$250M" badge
              </li>
              <li>
                <b className="text-muted-foreground">Background —</b> Dark newsroom monitor wall
                with OpenAI / Google / Meta logos faintly glowing
              </li>
              <li>
                <b className="text-muted-foreground">Object —</b> Microphone foreground, AI chip on
                desk
              </li>
              <li>
                <b className="text-muted-foreground">Mood —</b> Charcoal black + intelligence blue,
                gold accent on text
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Script outline with dialogue
            </div>
            <div className="space-y-3">
              {sections.map((s) => (
                <div
                  key={s.range}
                  className="rounded-md border border-border bg-background/60 p-3"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="rounded bg-editorial/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-editorial">
                      {s.range}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      {s.title}
                    </span>
                  </div>
                  <pre
                    dir="rtl"
                    className="font-urdu whitespace-pre-wrap text-sm leading-loose text-foreground/95"
                  >
                    {s.body}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter */}
      <article className="overflow-hidden rounded-xl border border-border bg-surface dark">
        <header className="flex items-center gap-2 border-b border-border bg-positive/10 px-5 py-3">
          <Newspaper className="h-4 w-4 text-positive" />
          <span className="text-sm font-semibold text-positive">
            Section 05 — Newsletter / Article
          </span>
        </header>
        <div className="space-y-4 p-5 text-sm">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Title
            </div>
            <h4 className="mt-1 text-lg font-bold leading-snug">
              Why Urdu Journalism Is Suddenly the Most Valuable Data on Earth
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Platform: LinkedIn + Substack · ~5 min read
            </p>
          </div>

          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-editorial">
              Opening hook
            </div>
            <p className="text-foreground/90">
              "Last week, a 24-year-old freelance reporter in Karachi made more from licensing one
              feature story to an AI company than her old TV job paid in six months. This isn't a
              one-off. It's the new Urdu media economy."
            </p>
          </div>

          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Key sections
            </div>
            <ol className="list-decimal space-y-1 pl-5 text-foreground/90">
              <li>Why AI suddenly needs Urdu newsrooms</li>
              <li>The platform shift — YouTube, Meta, X bidding for journalism</li>
              <li>Three business models for independent Urdu journalists</li>
              <li>What Pakistani newsrooms must do in the next 90 days</li>
            </ol>
          </div>

          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Closing thought
            </div>
            <p className="text-foreground/90">
              The next decade of journalism won't be won by the loudest voice — it'll be won by the
              one who owns their archive, their data, and their audience.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
