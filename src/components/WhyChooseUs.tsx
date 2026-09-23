import { Gem, Sparkles, Handshake, Flower2 } from "lucide-react";
import { WHY_CHOOSE } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const icons = [Gem, Sparkles, Handshake, Flower2];

export function WhyChooseUs() {
  return (
    <section className="container-luxe py-24">
      <Reveal className="max-w-xl">
        <p className="eyebrow">Why Sri Sahasra</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">A quieter way to choose jewellery.</h2>
      </Reveal>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <Icon size={22} className="text-gold-deep" strokeWidth={1.4} />
              <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
