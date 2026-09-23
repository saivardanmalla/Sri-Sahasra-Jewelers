import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/jewellery/SectionHeading";
import EnquiryCTA from "@/components/jewellery/EnquiryCTA";
import { waLink } from "@/store/useWishlist";

const steps = [
  { n: "01", t: "Bring Your Jewellery", d: "Visit the store with the gold you wish to exchange. Carry a valid ID." },
  { n: "02", t: "Purity Assessment", d: "Your gold is tested for purity using standard verification methods, in your presence." },
  { n: "03", t: "Weight Verification", d: "The weight is verified on certified scales — fully transparent, right before you." },
  { n: "04", t: "Valuation", d: "Value is computed based on the day's rate and verified purity. Rates are confirmed in store." },
  { n: "05", t: "Exchange / Purchase", d: "Use the full value towards any new jewellery from our collections." },
];

export default function GoldExchange() {
  return (
    <div className="container-luxe py-16">
      <SectionHeading
        eyebrow="Old Gold, New Stories"
        title="Gold Exchange"
        subtitle="Exchange your old gold towards beautiful new jewellery — transparent, simple and fair."
      />
      <div className="mx-auto max-w-3xl">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative flex gap-6 border-l border-gold/40 pb-10 pl-8 last:pb-0"
          >
            <span className="absolute -left-[22px] flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-ivory font-serif text-gold-deep">
              {s.n}
            </span>
            <div className="pt-1">
              <h3 className="text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{s.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-14 border border-gold/30 bg-beige/60 p-8 text-center">
        <p className="mx-auto max-w-xl text-sm text-charcoal/60">
          Valuation rates are not published online — they are confirmed in store based on the day's bullion rate
          and verified purity. No rates or deductions are final until assessed at the counter.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={waLink("Hello! I'd like to know more about gold exchange at Sri Sahasra Jewellers.")} target="_blank" rel="noreferrer" className="btn-gold">Ask on WhatsApp</a>
          <Link to="/contact" className="btn-outline">Visit Store</Link>
        </div>
      </div>
      <EnquiryCTA />
    </div>
  );
}
