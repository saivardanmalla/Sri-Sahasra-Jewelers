import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";
import { useUI } from "@/store/ui";
import { useWishlist } from "@/store/wishlist";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const count = useWishlist((s) => s.ids.length);
  const openSearch = useUI((s) => s.openSearch);
  const openEnquiry = useUI((s) => s.openEnquiry);
  const menuOpen = useUI((s) => s.mobileMenuOpen);
  const setMenu = useUI((s) => s.setMobileMenu);
  const onHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname, setMenu]);

  const links = NAV_LINKS.filter((l) => l.to !== "/");

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,height,backdrop-filter] duration-300",
        scrolled || menuOpen
          ? "border-border bg-bg/85 shadow-soft backdrop-blur-md"
          : onHero
            ? "border-transparent bg-transparent"
            : "border-transparent bg-bg",
      )}
    >
      <div
        className={cn(
          "container-luxe flex items-center justify-between gap-4 transition-[height] duration-300",
          scrolled ? "h-16" : "h-[4.5rem] lg:h-20",
        )}
      >
        <button
          type="button"
          className={cn(
            "inline-flex size-11 items-center justify-center lg:hidden",
            onHero && !scrolled && !menuOpen ? "text-bg" : "text-fg",
          )}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenu(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Logo compact={scrolled} light={onHero && !scrolled && !menuOpen} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const active = pathname === l.to || pathname.startsWith(`${l.to}/`);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative py-1 text-[12px] uppercase tracking-[0.18em] transition-colors",
                  onHero && !scrolled ? "text-bg/80 hover:text-bg" : "text-fg/70 hover:text-gold-deep",
                  active && (onHero && !scrolled ? "text-bg" : "text-gold-deep"),
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-1 h-px origin-left bg-gold transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search jewellery"
            className={cn(
              "inline-flex size-11 items-center justify-center",
              onHero && !scrolled && !menuOpen ? "text-bg hover:text-gold" : "text-fg/80 hover:text-gold-deep",
            )}
          >
            <Search size={18} />
          </button>
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className={cn(
              "relative inline-flex size-11 items-center justify-center",
              onHero && !scrolled && !menuOpen ? "text-bg hover:text-gold" : "text-fg/80 hover:text-gold-deep",
            )}
          >
            <Heart size={18} />
            {count > 0 && (
              <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-gold font-sans text-[9px] font-semibold text-fg">
                {count}
              </span>
            )}
          </Link>
          <div className="hidden sm:block">
            <ThemeToggle light={onHero && !scrolled && !menuOpen} />
          </div>
          <Button
            size="sm"
            className="ml-1 hidden md:inline-flex"
            variant={onHero && !scrolled ? "light" : "gold"}
            onClick={() => openEnquiry()}
          >
            Enquire
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-border bg-bg px-6 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border py-3.5 text-sm uppercase tracking-[0.2em] text-fg/80"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <ThemeToggle />
            <Button onClick={() => openEnquiry()}>Enquire</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
