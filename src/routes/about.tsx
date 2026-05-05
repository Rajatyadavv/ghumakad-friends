import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-mountains.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ghumakad.friends" },
      { name: "description", content: "We're a tribe of travel-obsessed friends turning a shared addiction into small-group adventures across the world." },
      { property: "og:title", content: "About — Ghumakad.friends" },
      { property: "og:description", content: "Meet the friends behind the trips." },
      { property: "og:image", content: hero },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 lg:pt-32 pb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">About us</span>
          <h1 className="mt-4 text-5xl sm:text-7xl lg:text-8xl font-display max-w-5xl">
            We started as <span className="text-gradient-ember">six friends.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <img src={hero} alt="On the trail" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>It started with one disastrous trek to Hampta Pass in 2019 — wrong shoes, no permits, magical sunsets. We came back changed, broke, and absolutely sure we wanted more of it.</p>
          <p>Five years later, <span className="text-foreground font-semibold">Ghumakad.friends</span> is a small collective of route designers, photographers and local guides scattered across three continents. We don't run "tours". We run trips we'd actually go on ourselves.</p>
          <p>Every itinerary is walked twice before it's sold. Every fixer is someone we've shared chai with. Every group caps at twelve, because real conversations need real space.</p>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-3 gap-10">
          {[
            { v: "2019", l: "Year zero — Hampta Pass" },
            { v: "62", l: "Expeditions led since" },
            { v: "18", l: "Countries on our maps" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-6xl text-gradient-ember">{s.v}</div>
              <div className="mt-3 text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-24">
        <h2 className="font-display text-4xl sm:text-6xl max-w-3xl">What we believe.</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { t: "Slow > fast", d: "Three places done well beats ten ticked off a list." },
            { t: "Local, always", d: "Money stays in the regions we love. Guides are paid fairly. Period." },
            { t: "Pack light, leave lighter", d: "We measure trips by what we leave behind — which should be nothing." },
            { t: "Discomfort is data", d: "Cold mornings, sore legs, broken plans — that's where the stories come from." },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl border border-border p-8 hover:border-primary/40 transition-colors">
              <h3 className="font-display text-2xl">{b.t}</h3>
              <p className="mt-3 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-ember px-7 text-sm font-semibold text-primary-foreground shadow-ember hover:scale-105 transition-transform">
            Come wander with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
