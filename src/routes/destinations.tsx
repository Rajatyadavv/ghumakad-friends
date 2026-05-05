import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import island from "@/assets/dest-island.jpg";
import desert from "@/assets/dest-desert.jpg";
import patagonia from "@/assets/dest-patagonia.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import safari from "@/assets/dest-safari.jpg";
import japan from "@/assets/dest-japan.jpg";
import hero from "@/assets/hero-mountains.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Ghumakad.friends" },
      { name: "description", content: "Explore our hand-picked adventure destinations: Himalayas, Sahara, Patagonia, Iceland, Serengeti, Japan and more." },
      { property: "og:title", content: "Destinations — Ghumakad.friends" },
      { property: "og:description", content: "Hand-picked adventure destinations across the planet." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Destinations,
});

const items = [
  { img: hero, name: "Himalayas", region: "India / Nepal", desc: "Ridge walks, monasteries, and the kind of cold that makes chai religious." },
  { img: patagonia, name: "Patagonia", region: "Chile / Argentina", desc: "Where wind is a personality and glaciers calve like applause." },
  { img: desert, name: "Sahara", region: "Morocco", desc: "Dunes the colour of fire, nights so dark the Milky Way feels rude." },
  { img: iceland, name: "Iceland", region: "Reykjavík + Ring Road", desc: "Volcanoes, geysers, auroras, and roads built for cinema." },
  { img: safari, name: "Serengeti", region: "Tanzania", desc: "The migration. Predators. Acacia silhouettes against impossible sunsets." },
  { img: japan, name: "Japan", region: "Honshu Loop", desc: "Sakura trails, mountain temples, ramen at midnight in Kyoto alleys." },
  { img: island, name: "Maldives", region: "Indian Ocean", desc: "Free-diving, reef science, hammocks. We don't judge." },
];

function Destinations() {
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 lg:pt-32 pb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Destinations</span>
          <h1 className="mt-4 text-5xl sm:text-7xl lg:text-8xl font-display max-w-5xl">
            Pick a <span className="text-gradient-ember">corner</span><br />of the planet.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">From snow lines to salt flats — every destination is scouted, walked and slept in by us before it lands here.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="grid gap-12">
          {items.map((d, i) => (
            <Link key={d.name} to="/tours" className={`group grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-3">
                  <MapPin className="h-3 w-3" /> {d.region}
                </div>
                <h2 className="font-display text-4xl sm:text-6xl">{d.name}</h2>
                <p className="mt-5 text-lg text-muted-foreground max-w-md">{d.desc}</p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold group-hover:text-primary transition-colors">
                  See trips <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
