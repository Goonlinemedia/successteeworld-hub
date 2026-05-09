import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SuccessteeWorld" },
      { name: "description", content: "Get in touch with our team. WhatsApp, phone, email or visit us in Lagos." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="container mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 max-w-6xl">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Contact</p>
        <h1 className="font-display text-5xl lg:text-6xl mb-6">Let's talk.</h1>
        <p className="text-muted-foreground mb-10 max-w-md">Questions about a product, financing or delivery? Our team typically replies within minutes on WhatsApp.</p>

        <div className="space-y-5">
          {[
            { icon: MessageCircle, t: "WhatsApp", d: "+234 800 000 0000", h: "https://wa.me/2348000000000" },
            { icon: Phone, t: "Phone", d: "+234 800 000 0000", h: "tel:+2348000000000" },
            { icon: Mail, t: "Email", d: "hello@successteeworld.ng", h: "mailto:hello@successteeworld.ng" },
            { icon: MapPin, t: "Visit", d: "Computer Village, Ikeja, Lagos" },
          ].map(({ icon: Icon, t, d, h }) => (
            <a key={t} href={h} className="flex items-start gap-4 p-4 rounded-2xl border border-border/60 hover:border-gold/60 hover-lift block">
              <div className="w-11 h-11 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t}</div>
                <div className="font-medium mt-0.5">{d}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="p-8 rounded-3xl border border-border/60 bg-gradient-card space-y-4 h-fit">
        <h2 className="font-display text-2xl mb-2">Send us a message</h2>
        <input placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold outline-none text-sm" />
        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold outline-none text-sm" />
        <input placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold outline-none text-sm" />
        <textarea rows={5} placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-gold outline-none text-sm resize-none" />
        <button className="w-full py-3.5 rounded-xl bg-gradient-gold text-gold-foreground font-semibold hover:scale-[1.01] transition-transform">
          Send message
        </button>
      </form>
    </div>
  );
}
