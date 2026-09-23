import { motion } from "framer-motion";
import { TrendingUp, Clock } from "lucide-react";
import { goldRates, formatINR } from "@/data/goldRates";
import SectionHeading from "./SectionHeading";

export default function GoldRateSection() {
  const date = new Date(goldRates[0].updatedAt).toLocaleString("en-IN", {
    day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
  });

  return (
    <section className="bg-charcoal py-20 text-ivory">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Live From The Store"
          title="Today's Rates"
          subtitle="Transparent daily bullion rates, updated by the store. Demo values shown — confirm in store or on WhatsApp."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {goldRates.map((r, i) => (
            <motion.div
              key={r.purity}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-gold/25 bg-coal p-6 text-center transition-colors hover:border-gold/60"
            >
              <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-luxe text-gold-light">
                <TrendingUp size={14} /> {r.metal} · {r.purity}
              </p>
              <p className="gold-text mt-4 font-serif text-3xl">{formatINR(r.pricePer10g)}</p>
              <p className="mt-2 text-xs text-ivory/50">per 10 grams</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-ivory/40">
          <Clock size={12} /> Last updated: {date} · Demo values — final price confirmed by the store
        </p>
      </div>
    </section>
  );
}
