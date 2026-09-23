import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DemoImage from "@/components/jewellery/DemoImage";
import EnquiryCTA from "@/components/jewellery/EnquiryCTA";
import SectionHeading from "@/components/jewellery/SectionHeading";
import { waLink } from "@/store/useWishlist";

const pieces = ["Bridal Sets", "Necklaces", "Bangles", "Earrings", "Rings", "Maang Tikka", "Traditional Jewellery", "Custom Bridal Designs"];

export default function Bridal() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal py-28 text-center text-ivory">
        <div className="absolute inset-0 opacity-25"><DemoImage label="Bridal Editorial" ratio="aspect-auto h-full w-full" /></div>
        <div className="container-luxe relative">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow">The Bridal Atelier</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Your special day deserves<br /><span className="gold-text italic">something timeless</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-md text-ivory/60">
            Explore our bridal jewellery collection — crafted for the moments you'll remember forever.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-10">
            <a href={waLink("Hello! I'd like to book a bridal consultation at Sri Sahasra Jewellers.")} target="_blank" rel="noreferrer" className="btn-gold">
              Book a Bridal Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <section className="container-luxe py-20">
        <SectionHeading eyebrow="Complete Your Look" title="Bridal Pieces" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {pieces.map((p, i) => (
            <motion.div key={p} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to="/shop?cat=bridal" className="group block">
                <DemoImage label={p} className="transition-transform duration-700 group-hover:scale-105" />
                <p className="mt-3 text-center text-sm font-medium group-hover:text-gold-deep">{p}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <EnquiryCTA />
    </>
  );
}
