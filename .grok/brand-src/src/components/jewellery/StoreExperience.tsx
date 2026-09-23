import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Navigation, Clock } from "lucide-react";
import { BUSINESS, waLink } from "@/store/useWishlist";
import DemoImage from "./DemoImage";
import SectionHeading from "./SectionHeading";

export default function StoreExperience() {
  return (
    <section className="bg-beige/50 py-20">
      <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">The Showroom</p>
          <h2 className="heading-lg mt-3">Visit Sri Sahasra Jewellers</h2>
          <p className="mt-5 max-w-md leading-relaxed text-charcoal/65">
            Experience our collection in person. Try pieces, consult our jewellery experts and find
            something truly yours.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <p className="flex items-start gap-3 text-charcoal/75">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-deep" />
              {BUSINESS.addressLines.join(", ")}
            </p>
            <p className="flex items-start gap-3 text-charcoal/75">
              <Clock size={18} className="mt-0.5 shrink-0 text-gold-deep" />
              {BUSINESS.hours}
            </p>
            <p className="flex items-start gap-3 text-charcoal/75">
              <Phone size={18} className="mt-0.5 shrink-0 text-gold-deep" />
              {BUSINESS.phone}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <Navigation size={15} /> Get Directions
            </a>
            <a href={waLink("Hello Sri Sahasra Jewellers! I'd like to plan a store visit.")} target="_blank" rel="noreferrer" className="btn-outline">
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <DemoImage label="Store Interior" className="mt-8" />
          <DemoImage label="Showroom Counters" />
          <DemoImage label="Bridal Display" className="mt-8" />
          <DemoImage label="Consultation Lounge" />
        </motion.div>
      </div>
    </section>
  );
}
