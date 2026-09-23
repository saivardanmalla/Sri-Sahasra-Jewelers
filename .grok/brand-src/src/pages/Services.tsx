import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Gem, HeartHandshake, RefreshCcw, Wrench, Sparkles, CalendarClock, UserCheck } from "lucide-react";
import SectionHeading from "@/components/jewellery/SectionHeading";
import EnquiryCTA from "@/components/jewellery/EnquiryCTA";

const services = [
  { icon: ShoppingBag, title: "Jewellery Purchase", text: "Browse gold, diamond and silver pieces with expert guidance in store.", link: "/shop" },
  { icon: Gem, title: "Custom Jewellery", text: "Bespoke designs crafted around your idea, budget and occasion.", link: "/custom" },
  { icon: HeartHandshake, title: "Bridal Consultation", text: "Dedicated sessions to build your complete bridal ensemble.", link: "/bridal" },
  { icon: RefreshCcw, title: "Gold Exchange", text: "Fair, transparent exchange of old gold towards new purchases.", link: "/gold-exchange" },
  { icon: Wrench, title: "Jewellery Repair", text: "Resizing, soldering, clasp and setting repairs by skilled hands. (Confirm availability)" },
  { icon: Sparkles, title: "Jewellery Cleaning", text: "Professional cleaning and polishing to restore your pieces' shine. (Confirm availability)" },
  { icon: CalendarClock, title: "Personal Consultation", text: "One-on-one appointments at your preferred time.", link: "/contact" },
  { icon: UserCheck, title: "Purity Verification", text: "Hallmark and purity checks with proper documentation." },
];

export default function Services() {
  return (
    <div className="container-luxe py-16">
      <SectionHeading
        eyebrow="At Your Service"
        title="Our Services"
        subtitle="Everything you need to buy, create, care for and renew your jewellery — under one roof."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const inner = (
            <>
              <s.icon className="text-gold-deep" size={26} />
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{s.text}</p>
              {s.link && <span className="mt-4 inline-block text-xs uppercase tracking-widest text-gold-deep">Learn more →</span>}
            </>
          );
          const cls = "block h-full border border-beige bg-white p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-gold";
          return (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.08 }}>
              {s.link ? <Link to={s.link} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>}
            </motion.div>
          );
        })}
      </div>
      <EnquiryCTA />
    </div>
  );
}
