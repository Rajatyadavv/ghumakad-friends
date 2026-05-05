import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Users, Mountain, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-mountains.jpg";
import patagonia from "@/assets/dest-patagonia.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import safari from "@/assets/dest-safari.jpg";
import japan from "@/assets/dest-japan.jpg";
import desert from "@/assets/dest-desert.jpg";
import island from "@/assets/dest-island.jpg";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours & Packages — Ghumakad.friends" },
      { name: "description", content: "Browse our small-group adventure tours: Spiti, Patagonia, Sahara, Iceland aurora, Serengeti safari and more." },
      { property: "og:title", content: "Tours & Packages — Ghumakad.friends" },
      { property: "og:description", content: "Small-group adventure trips, fully curated." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Tours,
});

const tours = [
  { img: hero, title: "Spiti Wild Loop", days: 9, level: "Moderate", group: 12, price: "₹54,800", tag: "Most loved" },
  { img: patagonia, title: "W-Trek Patagonia", days: 11, level: "Challenging", group: 10, price: "$2,890", tag: "Limited" },
  { img: desert, title: "Sahara Caravan", days: 7, level: "Easy", group: 12, price: "$1,650", tag: null },
  { img: iceland, title: "Iceland Aurora Hunt", days: 8, level: "Easy", group: 8, price: "$2,400", tag: "New" },
  { img: safari, title: "Serengeti Migration", days: 10, level: "Easy", group: 8, price: "$3,790", tag: null },
  { img: japan, title: "Sakura Trail Japan", days: 12, level: "Moderate", group: 10, price: "$3,250", tag: "Seasonal" },
  { img: island, title: "Maldives Reef Dive", days: 6, level: "Moderate", group: 8, price: "$1,990", tag: null },
];

function Tours() {
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 lg:pt-32 pb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Tours & Packages</span>
          <h1 className="mt-4 text-5xl sm:text-7xl lg:text-8xl font-display max-w-5xl">
            Trips with a <span className="text-gradient-ember">pulse.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">Departures across the year. Fixed dates, fixed groups, flexible everything else.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-24 grid md:grid-cols-2 gap-6 lg:gap-8">
        {tours.map((t) => (
          <article key={t.title} className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-colors flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={t.img} alt={t.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {t.tag && <span className="absolute top-4 left-4 rounded-full bg-gradient-ember px-3 py-1 text-xs font-semibold text-primary-foreground shadow-ember">{t.tag}</span>}
            </div>
            <div className="p-6 lg:p-8 flex flex-col flex-1">
              <h3 className="font-display text-2xl lg:text-3xl">{t.title}</h3>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" />{t.days} days</span>
                <span className="inline-flex items-center gap-1.5"><Mountain className="h-4 w-4 text-primary" />{t.level}</span>
                <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" />Max {t.group}</span>
              </div>
              <div className="mt-6 flex items-end justify-between pt-6 border-t border-border">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">From</div>
                  <div className="font-display text-2xl text-gradient-ember">{t.price}</div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-primary transition-colors">
                  Enquire <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
