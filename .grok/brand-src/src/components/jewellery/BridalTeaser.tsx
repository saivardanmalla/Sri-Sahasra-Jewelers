import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoImage from "./DemoImage";

export default function BridalTeaser() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-ivory">
      <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <DemoImage label="Bridal Elegance" ratio="aspect-[4/5]" />
          <div className="absolute -bottom-6 -right-6 hidden border border-gold/40 p-6 sm:block">
            <p className="gold-text font-serif text-4xl">1000+</p>
            <p className="mt-1 text-[10px] uppercase tracking-luxe text-ivory/50">Demo metric — brides styled</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="eyebrow">The Bridal Atelier</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Your special day deserves<br />something <span className="gold-text italic">timeless</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/60">
            Complete bridal ensembles — necklaces, bangles, earrings, maang tikkas and custom sets —
            designed around you, your attire and your story.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/bridal" className="btn-gold">Explore Bridal <ArrowRight size={15} /></Link>
            <Link to="/contact" className="btn-ghost-light">Book a Consultation</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
