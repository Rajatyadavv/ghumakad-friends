import { createFileRoute } from "@tanstack/react-router";
import { Clock, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-mountains.jpg";
import patagonia from "@/assets/dest-patagonia.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import safari from "@/assets/dest-safari.jpg";
import desert from "@/assets/dest-desert.jpg";
import japan from "@/assets/dest-japan.jpg";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories — Ghumakad.friends" },
      { name: "description", content: "Field notes, trail reports and photo essays from our adventures around the world." },
      { property: "og:title", content: "Stories — Ghumakad.friends" },
      { property: "og:description", content: "Field notes from the trail." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Stories,
});

const posts = [
  { img: hero, cat: "Trail Notes", title: "What three weeks in Spiti taught me about silence", read: 6, date: "Apr 2026" },
  { img: patagonia, cat: "Photo Essay", title: "The colour of Patagonian wind", read: 4, date: "Mar 2026" },
  { img: iceland, cat: "Guide", title: "Chasing aurora: a beginner's reality check", read: 8, date: "Feb 2026" },
  { img: safari, cat: "Field Diary", title: "Migration season — three days, one waterhole", read: 5, date: "Jan 2026" },
  { img: desert, cat: "Trail Notes", title: "Sleeping in the Sahara: what nobody warns you about", read: 7, date: "Dec 2025" },
  { img: japan, cat: "Guide", title: "How to plan a Japan trip that isn't only Tokyo", read: 9, date: "Nov 2025" },
];

function Stories() {
  const [feature, ...rest] = posts;
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 lg:pt-32 pb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Stories</span>
          <h1 className="mt-4 text-5xl sm:text-7xl lg:text-8xl font-display max-w-5xl">
            Field notes from the <span className="text-gradient-ember">edges.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <a href="#" className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <img src={feature.img} alt={feature.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute top-5 left-5 rounded-full bg-gradient-ember px-3 py-1 text-xs font-semibold text-primary-foreground shadow-ember">Featured</span>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">{feature.cat}</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl group-hover:text-gradient-ember transition-colors">{feature.title}</h2>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{feature.read} min read</span>
              <span>·</span>
              <span>{feature.date}</span>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:text-primary transition-colors">
              Read story <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </a>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((p) => (
            <a key={p.title} href="#" className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">{p.cat}</div>
              <h3 className="mt-2 font-display text-2xl group-hover:text-gradient-ember transition-colors">{p.title}</h3>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span>{p.date}</span><span>·</span><span>{p.read} min read</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
