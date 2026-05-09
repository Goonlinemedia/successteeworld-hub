import { createFileRoute } from "@tanstack/react-router";
import { cars } from "@/lib/products";
import { CarCard } from "@/components/site/CarCard";

export const Route = createFileRoute("/cars")({
  head: () => ({
    meta: [
      { title: "Inspected Luxury Cars — SuccessteeWorld Autos" },
      { name: "description", content: "Premium pre-owned luxury cars in Nigeria. 150-point inspection. Book a viewing today." },
    ],
  }),
  component: Cars,
});

function Cars() {
  return (
    <div className="container mx-auto px-5 lg:px-8 py-12 lg:py-20">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Marketplace</p>
        <h1 className="font-display text-5xl lg:text-6xl">Luxury cars</h1>
        <p className="text-muted-foreground mt-3 max-w-xl">Every car undergoes a 150-point inspection. Financing options available. Nationwide delivery.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {["All brands", "Toyota", "Mercedes", "Lexus", "BMW", "Honda"].map((b, i) => (
          <button key={b} className={`px-5 py-2.5 rounded-full text-sm font-medium border transition ${i === 0 ? "bg-gradient-gold text-gold-foreground border-transparent shadow-gold" : "border-border hover:border-gold hover:text-gold"}`}>
            {b}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {cars.map((c) => <CarCard key={c.id} c={c} />)}
        {cars.map((c) => <CarCard key={c.id + "-2"} c={c} />)}
      </div>
    </div>
  );
}
