import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  { n: "01", t: "Share Your Idea", d: "Describe your dream piece or upload a reference image." },
  { n: "02", t: "Design Consultation", d: "Our consultant refines the design, metal and budget with you." },
  { n: "03", t: "Crafted To Perfection", d: "Artisans bring your design to life with meticulous care." },
];

export default function CustomTeaser() {
  return (
    <section className="container-luxe py-20">
      <SectionHeading
        eyebrow="Made Only For You"
        title="Custom Jewellery"
        subtitle="Have a design in mind? We craft one-of-a-kind pieces tailored to your story."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative border border-beige bg-white p-8"
          >
            <span className="gold-text font-serif text-4xl">{s.n}</span>
            <h3 className="mt-4 text-xl">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{s.d}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 text-center"
      >
        <Link to="/custom" className="btn-outline"><Sparkles size={15} /> Start Your Custom Design</Link>
      </motion.div>
    </section>
  );
}
