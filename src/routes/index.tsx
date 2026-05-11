import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Truck, Award, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import catNew from "@/assets/cat-new-phones.jpg";
import catUk from "@/assets/cat-uk-used.jpg";
import catNaija from "@/assets/cat-naija-used.jpg";
import catAcc from "@/assets/cat-accessories.jpg";
import catCars from "@/assets/cat-cars.jpg";
import { products, cars } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { CarCard } from "@/components/site/CarCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Success T-World — Own Your Gadget | Phones, Accessories & Cars" },
      { name: "description", content: "We Buy. We Sell. We Swap. Brand new phones, UK used, Naija used, accessories and luxury cars. Ikotun Market, Lagos. Nationwide delivery." },
    ],
  }),
  component: Home,
});

const categories = [
  { title: "Brand New Phones", desc: "Sealed & warranted", img: catNew, href: "/shop" },
  { title: "UK Used", desc: "Premium pre-owned", img: catUk, href: "/shop" },
  { title: "Good Deals", desc: "Naija used value", img: catNaija, href: "/shop" },
  { title: "Accessories", desc: "AirPods, watches & more", img: catAcc, href: "/shop" },
  { title: "Luxury Cars", desc: "Inspected & certified", img: catCars, href: "/cars" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative -mt-16 lg:-mt-20 min-h-[92svh] flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-hero-bounce">
            <img src={hero} alt="iPhone 17 Pro Max and luxury car" className="w-full h-full object-cover animate-hero-drive will-change-transform" />
          </div>
          {/* Headlights turning on */}
          <div className="headlight-beam animate-headlight" style={{ right: "22%", bottom: "12%", transform: "translate(50%, 50%)" }} />
          <div className="headlight-beam animate-headlight" style={{ right: "10%", bottom: "14%", transform: "translate(50%, 50%)", animationDelay: "0.15s" }} />
          {/* Shine sweep */}
          <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shine" />
          {/* Readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-background/20" />
        </div>

        <div className="container mx-auto px-5 lg:px-8 relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs uppercase tracking-[0.2em] mb-6 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5" /> We Buy • We Sell • We Swap
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] animate-fade-up delay-100">
              Own Your <span className="text-gradient-gold">Gadget</span>.
              <br />Drive Your <span className="text-gradient-gold">Dream</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl animate-fade-up delay-200">
              Hand-picked brand new and pre-owned devices. Inspected luxury cars. Delivered nationwide with warranty and white-glove service.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up delay-300">
              <Link to="/shop" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:scale-[1.02] transition-transform">
                Shop Phones <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/cars" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-foreground/30 hover:border-gold hover:text-gold font-semibold transition">
                Explore Cars
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md animate-fade-up delay-500">
              {[
                { n: "10K+", l: "Happy customers" },
                { n: "500+", l: "Cars delivered" },
                { n: "100%", l: "Verified stock" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-fade-in delay-500">
          Scroll to explore
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 container mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Categories</p>
            <h2 className="font-display text-4xl lg:text-5xl">Shop by category</h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((c, i) => (
            <Link
              key={c.title}
              to={c.href}
              className={`group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/60 hover-lift ${
                i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : ""
              }`}
            >
              <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-background">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{c.desc}</p>
                <h3 className="font-display text-xl lg:text-2xl mb-2">{c.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-background/90 group-hover:text-gold transition-colors">
                  Shop now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-card/30 border-y border-border/60">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Trending</p>
              <h2 className="font-display text-4xl lg:text-5xl">Featured products</h2>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 8).map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* CARS MARKETPLACE */}
      <section className="py-24 container mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Marketplace</p>
            <h2 className="font-display text-4xl lg:text-5xl">Inspected luxury cars</h2>
            <p className="text-muted-foreground mt-3 max-w-xl">Every vehicle goes through a 150-point inspection. Book a viewing or chat with us on WhatsApp.</p>
          </div>
          <Link to="/cars" className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
            All cars <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {cars.map((c) => <CarCard key={c.id} c={c} />)}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 bg-card/30 border-y border-border/60">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, t: "Verified seller", d: "Trusted by thousands across Nigeria" },
              { icon: Truck, t: "Nationwide delivery", d: "Fast & secure to your doorstep" },
              { icon: Award, t: "Warranty included", d: "Up to 12 months on devices" },
              { icon: Sparkles, t: "Premium service", d: "White-glove customer experience" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="p-6 rounded-2xl border border-border/60 bg-gradient-card hover-lift">
                <div className="w-11 h-11 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg mb-1">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 text-center">Reviews</p>
            <h2 className="font-display text-4xl text-center mb-12">Loved across Nigeria</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                { n: "Adaobi N.", c: "Lagos", t: "Got my iPhone 15 Pro sealed and same-day delivered. The packaging alone made me feel like royalty." },
                { n: "Tunde A.", c: "Abuja", t: "Bought a UK used Galaxy and a Camry from them. Car was inspected and clean. Real plug." },
                { n: "Chiamaka O.", c: "Port Harcourt", t: "Customer service is unmatched. They walked me through everything on WhatsApp. 10/10." },
              ].map((r) => (
                <div key={r.n} className="p-6 rounded-2xl border border-border/60 bg-background/40">
                  <div className="flex gap-0.5 text-gold mb-3">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90 mb-4">"{r.t}"</p>
                  <div className="text-sm">
                    <div className="font-semibold">{r.n}</div>
                    <div className="text-xs text-muted-foreground">{r.c}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 container mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-card p-10 lg:p-16 text-center">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Stay in the loop</p>
            <h2 className="font-display text-3xl lg:text-5xl mb-4">Flash sales & new arrivals first</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Join our list and get early access to deals, restocks and exclusive car drops.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-full bg-input border border-border focus:border-gold outline-none text-sm" />
              <button className="px-7 py-3.5 rounded-full bg-gradient-gold text-gold-foreground font-semibold hover:scale-105 transition-transform">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
