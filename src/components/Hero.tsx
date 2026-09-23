import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative -mt-[4.5rem] flex min-h-[100dvh] items-end overflow-hidden lg:-mt-20">
      <img
        src="/images/hero.jpg"
        alt="Traditional Indian gold bridal necklace on silk"
        className="absolute inset-0 h-full w-full object-cover kenburns"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-fg/80 via-fg/35 to-fg/20" />
      <div className="relative z-10 container-luxe w-full pb-32 pt-40 text-bg sm:pb-28 md:pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
          }}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-[0.42em] text-gold">
            Sri Sahasra Jewellers
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-5 font-serif text-[2.6rem] leading-[1.05] text-bg sm:text-6xl lg:text-7xl"
          >
            Timeless Jewellery
            <br />
            For Meaningful Moments
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-md text-sm leading-relaxed text-bg/80 sm:text-base">
            Discover jewellery crafted for life’s most precious celebrations — in Brodipet, Guntur.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/collections">Explore Collection</Link>
            </Button>
            <Button variant="light" asChild>
              <Link to="/contact">Visit Store</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <a
        href="#collections"
        className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-bg/80 md:bottom-8"
        aria-label="Scroll to collections"
      >
        <span>Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
