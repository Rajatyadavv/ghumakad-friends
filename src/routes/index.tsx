import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mountain, Tent, Compass, Star, MapPin } from "lucide-react";
import hero from "@/assets/hero-mountains.jpg";
import island from "@/assets/dest-island.jpg";
import desert from "@/assets/dest-desert.jpg";
import patagonia from "@/assets/dest-patagonia.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import safari from "@/assets/dest-safari.jpg";
import japan from "@/assets/dest-japan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ghumakad.friends — Adventure Travel for Restless Souls" },
      { name: "description", content: "Small-group adventure travel: Himalayas, Sahara, Patagonia, Iceland, safaris and more. Travel with friends, not strangers." },
      { property: "og:title", content: "Ghumakad.friends — Adventure Travel" },
      { property: "og:description", content: "Small-group adventure trips for the friends who can't sit still." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const featured = [
  { img: island, name: "Maldives", tag: "Reefs & Atolls", trips: 6 },
  { img: desert, name: "Sahara", tag: "Dune Expedition", trips: 4 },
  { img: patagonia, name: "Patagonia", tag: "Glacial Treks", trips: 5 },
  { img: iceland, name: "Iceland", tag: "Aurora Hunts", trips: 3 },
  { img: safari, name: "Serengeti", tag: "Wild Safari", trips: 7 },
  { img: japan, name: "Japan", tag: "Sakura Trail", trips: 4 },
];

const ticker = ["Himalayas", "Sahara", "Patagonia", "Iceland", "Bali", "Kilimanjaro", "Bhutan", "Spiti"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img src={hero} alt="Lone hiker at sunrise overlooking Himalayan peaks" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 h-full flex flex-col justify-end pb-20 lg:pb-32">
          <div className="animate-float-up max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now booking 2026 expeditions
            </div>
            <h1 className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-display">
              Wander wild.<br />
              <span className="text-gradient-ember">Together.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              Small-group adventures for the friends who can't sit still. Real terrain, real stories, zero tourist traps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/tours" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-ember px-7 text-sm font-semibold text-primary-foreground shadow-ember hover:scale-105 transition-transform">
                Find your trip <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/destinations" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur px-7 text-sm font-semibold hover:bg-background/70 transition-colors">
                Browse destinations
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "62+", l: "Expeditions led" },
                { v: "4.9★", l: "Avg rating" },
                { v: "1.2k", l: "Happy ghumakads" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl sm:text-3xl text-gradient-ember">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="border-y border-border overflow-hidden bg-card">
        <div className="flex animate-ticker whitespace-nowrap py-5">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center font-display text-3xl sm:text-5xl mx-8 text-muted-foreground">
              {t}
              <span className="mx-8 text-primary">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Our way</span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-display">
              Not a tour.<br />A <span className="text-gradient-ember">tribe.</span>
            </h2>
          </div>
          <div className="space-y-10">
            {[
              { Icon: Mountain, t: "Real terrain", d: "We trade overcrowded landmarks for ridge lines, river bends and the kind of silence that resets your nervous system." },
              { Icon: Tent, t: "Tiny groups", d: "Max 12 ghumakads per trip. You'll know everyone's name, their snore pattern, and probably their childhood traumas by day three." },
              { Icon: Compass, t: "Local-led, always", d: "Our route designers live in the regions they guide. You eat where they eat, sleep where they'd send their cousin." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-5 group">
                <div className="shrink-0 h-14 w-14 rounded-2xl bg-card border border-border grid place-items-center group-hover:border-primary group-hover:bg-gradient-ember transition-all">
                  <Icon className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-2xl">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="bg-card py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">Where we roam</span>
              <h2 className="mt-3 text-4xl sm:text-6xl font-display max-w-2xl">Six worlds. Pick your portal.</h2>
            </div>
            <Link to="/destinations" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
              See all destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {featured.map((d, i) => (
              <Link
                key={d.name}
                to="/destinations"
                className={`group relative overflow-hidden rounded-2xl bg-background ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div className={`relative ${i === 0 ? "aspect-[4/5] md:aspect-auto md:h-full" : "aspect-[4/5]"}`}>
                  <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-night" />
                  <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-2">
                      <MapPin className="h-3 w-3" /> {d.tag}
                    </div>
                    <h3 className={`font-display ${i === 0 ? "text-4xl lg:text-6xl" : "text-2xl lg:text-3xl"}`}>{d.name}</h3>
                    <p className="mt-2 text-xs lg:text-sm text-muted-foreground">{d.trips} curated trips</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { n: "Ananya R.", t: "Spiti Loop, 2025", q: "Three days in and I forgot what wifi felt like. Best decision of my year." },
            { n: "Karan & Meera", t: "Patagonia Trek", q: "The guides knew every bend. We cried at the glacier. Twice." },
            { n: "Devika S.", t: "Sahara Crossing", q: "Slept under more stars than I've seen in 30 years of city life." },
          ].map((r) => (
            <div key={r.n} className="rounded-3xl border border-border p-8 bg-card hover:border-primary/40 transition-colors">
              <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-4 w-4 fill-primary text-primary"/>))}</div>
              <p className="mt-5 text-lg leading-relaxed">"{r.q}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{r.n}</div>
                <div className="text-xs text-muted-foreground">{r.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-24 lg:pb-32">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-ember p-10 sm:p-16 lg:p-20 shadow-ember">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-background/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] items-end gap-8">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-primary-foreground">Stop scrolling.<br />Start packing.</h2>
              <p className="mt-4 text-primary-foreground/80 max-w-lg">Tell us where your soul wants to go. We'll handle the rest — flights, fixers, fires, the lot.</p>
            </div>
            <Link to="/contact" className="inline-flex h-14 items-center gap-2 rounded-full bg-background px-8 text-base font-semibold shadow-deep hover:scale-105 transition-transform self-start lg:self-end">
              Plan my adventure <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
