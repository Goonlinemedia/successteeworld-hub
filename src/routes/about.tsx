import { createFileRoute } from "@tanstack/react-router";
import { Award, Shield, Users, Truck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SuccessteeWorld Mobile & Autos" },
      { name: "description", content: "We're a Nigerian-owned trusted retailer of premium phones, accessories and cars." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="container mx-auto px-5 lg:px-8 py-20 lg:py-28 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">About us</p>
        <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-8">
          Built on <span className="text-gradient-gold">trust</span>, run on <span className="text-gradient-gold">excellence</span>.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          SuccessteeWorld Mobile & Autos started with a simple promise: every Nigerian deserves access to authentic devices and quality cars without the stress. From our base in Lagos, we've grown into a nationwide trusted plug serving over 10,000 customers with warranted phones, premium accessories and inspected luxury cars.
        </p>
      </section>

      <section className="border-y border-border/60 bg-card/30">
        <div className="container mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-4 gap-6">
          {[
            { icon: Users, t: "10,000+", d: "Happy customers" },
            { icon: Truck, t: "36 states", d: "Delivery coverage" },
            { icon: Shield, t: "100%", d: "Authenticity guaranteed" },
            { icon: Award, t: "12 months", d: "Device warranty" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={d} className="text-center p-6">
              <Icon className="w-7 h-7 mx-auto text-gold mb-4" />
              <div className="font-display text-4xl text-gold mb-1">{t}</div>
              <div className="text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-4xl mb-4">Our mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To redefine the buying experience in Nigeria — pairing genuine products with the kind of premium, attentive service customers usually only see abroad. Whether it's a brand new iPhone or a luxury SUV, the standard never drops.
          </p>
        </div>
        <div>
          <h2 className="font-display text-4xl mb-4">What we stand for</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Authenticity on every device, every time.</li>
            <li>• 150-point inspections on every vehicle.</li>
            <li>• Transparent pricing, no hidden fees.</li>
            <li>• Concierge support before, during and after the sale.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
