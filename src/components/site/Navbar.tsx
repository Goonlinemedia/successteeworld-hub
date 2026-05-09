import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, Heart, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false); // default: light

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/cars", label: "Cars" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 lg:h-14 rounded-xl bg-white p-1 flex items-center shadow-sm border border-border/20">
            <img src={logo} alt="SuccessteeWorld Mobile & Autos logo" className="h-full w-auto object-contain" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative group"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button aria-label="Search" className="p-2.5 hover:text-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="p-2.5 hover:text-gold transition-colors">
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button aria-label="Wishlist" className="p-2.5 hover:text-gold transition-colors hidden sm:block">
            <Heart className="w-5 h-5" />
          </button>
          <button aria-label="Cart" className="p-2.5 hover:text-gold transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-gold text-gold-foreground text-[10px] font-bold flex items-center justify-center">2</span>
          </button>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2.5 lg:hidden">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-5 py-4 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium border-b border-border/30 hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
