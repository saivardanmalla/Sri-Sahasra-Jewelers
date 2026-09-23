import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS } from "@/store/useWishlist";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-luxe grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl">
            Sri Sahasra <span className="gold-text">Jewellers</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ivory/60">
            Timeless jewellery, beautifully crafted. A premium jewellery showroom in the heart of
            Guntur — where tradition meets modern design.
          </p>
          <div className="mt-6 flex gap-4">
            {/* TODO: replace # with verified profile links */}
            <a href="#" aria-label="Instagram" className="text-ivory/60 transition hover:text-gold-light"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="text-ivory/60 transition hover:text-gold-light"><Facebook size={18} /></a>
            <a href="#" aria-label="WhatsApp" className="text-ivory/60 transition hover:text-gold-light"><MessageCircle size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-luxe text-gold-light">Collections</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/60">
            <li><Link to="/collections" className="hover:text-gold-light">All Collections</Link></li>
            <li><Link to="/shop?cat=bridal" className="hover:text-gold-light">Bridal Jewellery</Link></li>
            <li><Link to="/shop?cat=diamond" className="hover:text-gold-light">Diamond</Link></li>
            <li><Link to="/shop?cat=gold" className="hover:text-gold-light">Gold</Link></li>
            <li><Link to="/shop?cat=silver" className="hover:text-gold-light">Silver</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-luxe text-gold-light">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/60">
            <li><Link to="/custom" className="hover:text-gold-light">Custom Jewellery</Link></li>
            <li><Link to="/bridal" className="hover:text-gold-light">Bridal Consultation</Link></li>
            <li><Link to="/gold-exchange" className="hover:text-gold-light">Gold Exchange</Link></li>
            <li><Link to="/services" className="hover:text-gold-light">Repair & Cleaning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-luxe text-gold-light">Visit Us</h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-ivory/60">
            <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
            {BUSINESS.addressLines.join(", ")}
          </p>
          <p className="mt-3 text-sm text-ivory/60">{BUSINESS.hours}</p>
          <p className="mt-3 text-sm text-ivory/60">{BUSINESS.phone}</p>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/40">
        © {new Date().getFullYear()} Sri Sahasra Jewellers · Demo website — images & details are placeholders pending store photography
      </div>
    </footer>
  );
}
