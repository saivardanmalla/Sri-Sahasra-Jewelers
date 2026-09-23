import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export function BridalSection() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      <img
        src="/images/bridal.jpg"
        alt="Indian bridal jewellery editorial"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-fg/45" />
      <div className="relative z-10 container-luxe flex min-h-[78vh] items-center py-20">
        <Reveal className="max-w-xl text-bg">
          <p className="text-[11px] uppercase tracking-[0.36em] text-gold">Bridal Collection</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
            Made for your most beautiful beginning.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-bg/80 sm:text-base">
            Discover jewellery that celebrates tradition, elegance and individuality.
          </p>
          <Button className="mt-8" asChild>
            <Link to="/bridal">Explore Bridal Collection</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
