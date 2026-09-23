import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import DemoImage from "@/components/jewellery/DemoImage";
import SectionHeading from "@/components/jewellery/SectionHeading";

export default function CollectionsPage() {
  return (
    <div className="container-luxe py-16">
      <SectionHeading
        eyebrow="Curated Worlds"
        title="Our Collections"
        subtitle="Each collection is a celebration of a different facet of your life."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {collections.map((col, i) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 2) * 0.12, duration: 0.6 }}
            className={`group grid gap-6 sm:grid-cols-2 ${i % 2 === 1 ? "sm:[direction:rtl]" : ""}`}
          >
            <div className="[direction:ltr]">
              <DemoImage label={col.name} ratio="aspect-[4/5]" className="transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="flex flex-col justify-center [direction:ltr]">
              <p className="eyebrow">{col.tagline}</p>
              <h3 className="mt-3 text-3xl">{col.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/60">{col.description}</p>
              <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold-deep hover:gap-3 transition-all">
                Explore Pieces <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
