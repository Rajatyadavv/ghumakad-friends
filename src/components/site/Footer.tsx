import { Link } from "@tanstack/react-router";
import { Compass, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-gradient-ember grid place-items-center shadow-ember">
              <Compass className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg">Ghumakad.friends</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            We curate raw, soul-stirring journeys for the friends who can't sit still. Less polish, more dirt under the boots.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Youtube, Mail].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/destinations" className="hover:text-primary">Destinations</Link></li>
            <li><Link to="/tours" className="hover:text-primary">Tours</Link></li>
            <li><Link to="/stories" className="hover:text-primary">Stories</Link></li>
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">Reach us</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@ghumakadfriends.com</li>
            <li>+91 98765 43210</li>
            <li>Bandra West, Mumbai</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ghumakad.friends. Wander responsibly.</p>
          <p>Made for restless souls.</p>
        </div>
      </div>
    </footer>
  );
}
