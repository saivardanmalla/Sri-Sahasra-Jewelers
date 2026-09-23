import { motion } from "framer-motion";
import { ShieldCheck, Gem, HandHeart, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  { icon: ShieldCheck, title: "Trust & Transparency", text: "Clear purity disclosure, proper billing and honest pricing on every piece." },
  { icon: Gem, title: "Fine Craftsmanship", text: "Skilled artisans crafting gold, diamond and silver jewellery with meticulous detail." },
  { icon: HandHeart, title: "Personalised Service", text: "One-on-one consultations for bridal, custom designs and special occasions." },
  { icon: Award, title: "Certified Quality", text: "Hallmarked gold and certified diamonds — quality you can verify. (Details shared in store.)" },
];

export default function WhyChooseUs() {
  return (
    <section className="container-luxe py-20">
      <SectionHeading eyebrow="The Sahasra Promise" title="Why Choose Us" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="border border-beige bg-white p-8 text-center transition-all duration-300 hover:border-gold/50 hover:shadow-gold"
          >
            <it.icon className="mx-auto text-gold-deep" size={28} />
            <h3 className="mt-5 text-lg">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
