import { Car, formatNaira } from "@/lib/products";
import { Calendar, Gauge, Cog, Fuel, MessageCircle } from "lucide-react";

export function CarCard({ c }: { c: Car }) {
  return (
    <div className="group bg-gradient-card border border-border/60 rounded-2xl overflow-hidden hover-lift">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[11px] uppercase tracking-wider font-semibold">
          {c.brand}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-xl">{c.name}</h3>
          <span className="text-gold font-semibold text-lg whitespace-nowrap">{formatNaira(c.price)}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-5">
          <Spec icon={Calendar} label={String(c.year)} />
          <Spec icon={Gauge} label={c.mileage} />
          <Spec icon={Cog} label={c.transmission} />
          <Spec icon={Fuel} label={c.fuel} />
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition">
            Book Inspection
          </button>
          <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="px-4 rounded-xl border border-border hover:border-gold hover:text-gold transition flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Spec({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="w-3.5 h-3.5 text-gold" />
      <span>{label}</span>
    </div>
  );
}
