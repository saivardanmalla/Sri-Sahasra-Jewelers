import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import DemoImage from "./DemoImage";
import SectionHeading from "./SectionHeading";

export default function CategoryGrid() {
  return (
    <section className="container-luxe py-20">
      <SectionHeading
        eyebrow="Browse By"
        title="Jewellery Categories"
        subtitle="From everyday gold to grand bridal sets — find the piece made for your moment."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
          >
            <Link to={`/shop?cat=${c.slug}`} className="group block">
              <div className="relative overflow-hidden">
                <DemoImage label={c.name} className="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15" />
              </div>
              <p className="mt-3 text-center text-sm font-medium tracking-wide text-charcoal transition-colors group-hover:text-gold-deep">
                {c.name}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
