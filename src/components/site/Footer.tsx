import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone, Ghost } from "lucide-react";
import logo from "@/assets/logo.png";
import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40 mt-24">
      <div className="container mx-auto px-5 lg:px-8 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img src={logo} alt={BRAND.name} className="h-14 w-auto object-contain mb-4" />
          <p className="text-xs text-muted-foreground mb-2">{BRAND.fullName}</p>
          <p className="text-[10px] tracking-widest text-gold uppercase mb-4">{BRAND.rc}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We Buy • We Sell • We Swap. Trusted plug for premium phones, accessories and cars across Nigeria.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Ghost].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Shop</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">Brand New Phones</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">UK Used</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Naija Used</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Accessories</Link></li>
            <li><Link to="/cars" className="hover:text-foreground">Cars</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Support</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><a href="#" className="hover:text-foreground">FAQs</a></li>
            <li><a href="#" className="hover:text-foreground">Warranty Policy</a></li>
            <li><a href="#" className="hover:text-foreground">Delivery Information</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Get in touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> <span>{BRAND.address}</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> {BRAND.phone}</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> <span className="break-all">{BRAND.email}</span></li>
            <li className="flex items-center gap-2"><Ghost className="w-4 h-4 text-gold" /> Snapchat: {BRAND.snapchat}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.</p>
          <p>Ikotun, Lagos 🇳🇬 — {BRAND.rc}</p>
        </div>
      </div>
    </footer>
  );
}
