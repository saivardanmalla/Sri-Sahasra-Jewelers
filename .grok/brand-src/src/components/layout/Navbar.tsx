import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Heart, Menu, X, Search } from "lucide-react";
import { useWishlist } from "@/store/useWishlist";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/bridal", label: "Bridal" },
  { to: "/custom", label: "Custom" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Visit Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const count = useWishlist((s) => s.ids.length);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-gold/30 bg-ivory/95 shadow-card backdrop-blur" : "border-transparent bg-ivory"
      }`}
    >
      <div className="container-luxe flex h-16 items-center justify-between gap-4 lg:h-20">
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-lg tracking-wide text-charcoal sm:text-xl">
            Sri Sahasra <span className="gold-text">Jewellers</span>
          </span>
          <span className="mt-0.5 hidden text-[10px] uppercase tracking-luxe text-charcoal/50 sm:block">
            Brodipet · Guntur
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[13px] uppercase tracking-widest transition-colors ${
                  isActive ? "text-gold-deep" : "text-charcoal/70 hover:text-gold-deep"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <form onSubmit={submitSearch} className="relative hidden md:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewellery…"
              className="w-44 border border-charcoal/15 bg-white py-2 pl-9 pr-3 text-sm outline-none transition-all placeholder:text-charcoal/40 focus:w-60 focus:border-gold"
            />
          </form>
          <Link to="/wishlist" className="relative" aria-label="Wishlist">
            <Heart size={20} className="text-charcoal/80 hover:text-gold-deep" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-charcoal">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-ivory px-6 py-4 lg:hidden">
          <form onSubmit={submitSearch} className="relative mb-4 md:hidden">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewellery…"
              className="w-full border border-charcoal/15 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-gold"
            />
          </form>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-beige py-3 text-sm uppercase tracking-widest text-charcoal/80"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
