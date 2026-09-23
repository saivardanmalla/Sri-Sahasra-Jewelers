import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { SITE } from "@/data/site";
import { useUI } from "@/store/ui";

export function Footer() {
  const openEnquiry = useUI((s) => s.openEnquiry);
  return (
    <footer className="border-t border-border bg-cream pb-24 pt-16 text-fg md:pb-16">
      <div className="container-luxe grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-6 max-w-sm font-serif text-2xl leading-snug text-fg/90">
            Timeless Jewellery.
            <br />
            Beautifully Crafted.
          </p>
          <p className="mt-4 text-sm text-muted">{SITE.locationLine}</p>
        </div>

        <FooterCol title="Explore">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/jewellery">Jewellery</Link>
          <Link to="/bridal">Bridal</Link>
          <Link to="/custom-jewellery">Custom Jewellery</Link>
        </FooterCol>
        <FooterCol title="Company">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Store Location</Link>
        </FooterCol>
        <FooterCol title="Customer">
          <button type="button" className="text-left" onClick={() => openEnquiry()}>
            Enquiry
          </button>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/contact">Visit Store</Link>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <button type="button" className="text-left" onClick={() => openEnquiry()}>
            WhatsApp
          </button>
        </FooterCol>
      </div>
      <div className="container-luxe mt-14 flex flex-col gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Sri Sahasra Jewellers · Guntur</p>
        <p>Demonstration website · Not live inventory</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <div className="flex flex-col gap-2.5 text-sm text-fg/75 [&_a:hover]:text-gold-deep [&_button:hover]:text-gold-deep">
        {children}
      </div>
    </div>
  );
}
