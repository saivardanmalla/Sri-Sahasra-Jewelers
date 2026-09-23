import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TESTIMONIALS } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const prev = () => setI((n) => (n === 0 ? TESTIMONIALS.length - 1 : n - 1));
  const next = () => setI((n) => (n + 1) % TESTIMONIALS.length);

  return (
    <section className="container-luxe py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">From the showroom</p>
        <p className="mt-3 text-xs text-muted">Demonstration quotes — not real customer reviews.</p>
        <blockquote className="mt-10 font-serif text-3xl leading-snug sm:text-4xl">“{t.quote}”</blockquote>
        <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-muted">— {t.name}</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex size-11 items-center justify-center border border-border hover:border-gold"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonial pages">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={cn("size-2 rounded-full", idx === i ? "bg-gold-deep" : "bg-beige")}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex size-11 items-center justify-center border border-border hover:border-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
