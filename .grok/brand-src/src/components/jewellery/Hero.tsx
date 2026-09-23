import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import DemoImage from "./DemoImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background visual */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <DemoImage label="Sahasra Bridal Editorial" ratio="aspect-auto h-full w-full" className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-ivory" />
      </motion.div>

      <div className="container-luxe relative flex min-h-[88vh] flex-col items-center justify-center py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs uppercase tracking-luxe text-gold-light"
        >
          Brodipet · Guntur · Since Generations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-6 max-w-3xl text-5xl leading-[1.08] text-charcoal sm:text-6xl lg:text-7xl"
        >
          Timeless Jewellery.
          <br />
          <span className="gold-text italic">Beautifully Crafted.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70"
        >
          Discover jewellery that celebrates your most precious moments — gold, diamond and bridal
          masterpieces from the heart of Guntur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link to="/shop" className="btn-gold">Explore Collection</Link>
          <Link to="/contact" className="btn-outline">Visit Our Store</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-charcoal/50"
        >
          <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
