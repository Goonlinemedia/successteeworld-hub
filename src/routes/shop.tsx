import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Phones & Accessories — SuccessteeWorld" },
      { name: "description", content: "Browse brand new phones, UK used, Naija used and premium accessories. Filter by brand, condition and price." },
    ],
  }),
  component: Shop,
});

const cats = ["All", "Brand New", "UK Used", "Naija Used", "Accessories"];

function Shop() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="container mx-auto px-5 lg:px-8 py-12 lg:py-20">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Shop</p>
        <h1 className="font-display text-5xl lg:text-6xl">All products</h1>
        <p className="text-muted-foreground mt-3 max-w-xl">Hand-picked phones and accessories. Genuine, warranted, delivered nationwide.</p>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-3 mb-8 -mx-5 px-5">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium border transition ${
              active === c
                ? "bg-gradient-gold text-gold-foreground border-transparent shadow-gold"
                : "border-border hover:border-gold hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
        <button className="ml-auto whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-border hover:border-gold">
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}
