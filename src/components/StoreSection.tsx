import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";
import { useUI } from "@/store/ui";

const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;

export function StoreSection() {
  const openEnquiry = useUI((s) => s.openEnquiry);
  return (
    <section className="bg-cream py-24">
      <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <img
            src="/images/store.jpg"
            alt="Sri Sahasra Jewellers showroom atmosphere"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal>
          <p className="eyebrow">Visit Sri Sahasra Jewellers</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Brodipet
            <br />
            Guntur
            <br />
            Andhra Pradesh
          </h2>
          <ul className="mt-8 space-y-4 text-sm text-fg/80">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 text-gold-deep" />
              {SITE.locationLine}
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="mt-0.5 text-gold-deep" />
              <span>
                {SITE.hoursPlaceholder}
                <span className="mt-1 block text-xs text-muted">{SITE.hoursNote}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 text-gold-deep" />
              {SITE.phonePlaceholder}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={maps} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </Button>
            <Button variant="outline" onClick={() => openEnquiry()}>
              Call Us
            </Button>
            <Button variant="outline" onClick={() => openEnquiry()}>
              WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
