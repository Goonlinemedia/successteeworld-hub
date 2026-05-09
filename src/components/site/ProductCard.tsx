import { Heart, ShoppingBag } from "lucide-react";
import { Product, formatNaira } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group relative bg-gradient-card border border-border/60 rounded-2xl overflow-hidden hover-lift">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {p.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-gold text-gold-foreground rounded-full">
            {p.badge}
          </span>
        )}
        {!p.inStock && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-destructive text-destructive-foreground rounded-full">
            Out of stock
          </span>
        )}
        <button aria-label="Wishlist" className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        <button className="absolute inset-x-3 bottom-3 py-2.5 rounded-xl bg-foreground text-background text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all flex items-center justify-center gap-2">
          <ShoppingBag className="w-4 h-4" /> Add to cart
        </button>
      </div>
      <div className="p-4">
        <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{p.category}</p>
        <h3 className="mt-1 text-sm font-medium line-clamp-1">{p.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold text-gold">{formatNaira(p.price)}</span>
          {p.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatNaira(p.oldPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
