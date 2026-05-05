import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ghumakad.friends" },
      { name: "description", content: "Tell us where your soul wants to go. We'll plan it. Reach Ghumakad.friends by email, phone or the form." },
      { property: "og:title", content: "Contact — Ghumakad.friends" },
      { property: "og:description", content: "Plan your next adventure with us." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 lg:pt-32 pb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Contact</span>
          <h1 className="mt-4 text-5xl sm:text-7xl lg:text-8xl font-display max-w-5xl">
            Let's plot something <span className="text-gradient-ember">unforgettable.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
        <div className="space-y-10">
          <p className="text-lg text-muted-foreground max-w-md">
            Tell us a destination, a date, or just a feeling. We'll come back within 24 hours with a real human on the other end.
          </p>
          <div className="space-y-6">
            {[
              { Icon: Mail, label: "Email", val: "hello@ghumakadfriends.com" },
              { Icon: Phone, label: "Phone / WhatsApp", val: "+91 98765 43210" },
              { Icon: MapPin, label: "Basecamp", val: "Bandra West, Mumbai, IN" },
            ].map(({ Icon, label, val }) => (
              <div key={label} className="flex gap-4">
                <div className="h-12 w-12 shrink-0 grid place-items-center rounded-2xl bg-card border border-border">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-1 font-medium">{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8 lg:p-10 space-y-5"
        >
          {sent ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="h-14 w-14 text-primary mx-auto" />
              <h3 className="font-display text-3xl">Message landed.</h3>
              <p className="text-muted-foreground">We'll be in your inbox within 24 hours. Start packing.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name" name="name" placeholder="Tara Sharma" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              </div>
              <Field label="Where to?" name="dest" placeholder="Spiti, Iceland, anywhere wild..." />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us more</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Group size, dates, vibe..."
                  className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button type="submit" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-ember text-sm font-semibold text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform">
                Send message <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
