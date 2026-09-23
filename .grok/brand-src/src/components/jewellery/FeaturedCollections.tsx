import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import DemoImage from "./DemoImage";
import SectionHeading from "./SectionHeading";

export default function FeaturedCollections() {
  return (
    <section className="bg-beige/50 py-20">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Curated For You"
          title="Our Collections"
          subtitle="Six distinct worlds of craftsmanship — each with its own story to tell."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
            >
              <Link to="/collections" className="group relative block overflow-hidden">
                <DemoImage label={col.name} className="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent p-6 opacity-90 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-[10px] uppercase tracking-luxe text-gold-light">{col.tagline}</p>
                  <h3 className="mt-2 text-2xl text-ivory">{col.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ivory/0 transition-all duration-500 group-hover:text-gold-light">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
