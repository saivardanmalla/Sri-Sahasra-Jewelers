import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CUSTOM_STEPS } from "@/data/site";
import { useUI } from "@/store/ui";

export function CustomJewellery() {
  const openEnquiry = useUI((s) => s.openEnquiry);
  return (
    <section className="container-luxe grid items-center gap-12 py-24 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <img
          src="/images/store.jpg"
          alt="Jewellery showroom craftsmanship"
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
        />
      </Reveal>
      <div>
        <Reveal>
          <p className="eyebrow">Custom Jewellery</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Your vision.
            <br />
            Your story.
            <br />
            Your jewellery.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Bring a sketch, a family piece, or simply a feeling. We shape gold around it — slowly, and in
            conversation.
          </p>
          <Button className="mt-8" onClick={() => openEnquiry({ productName: "Custom jewellery" })}>
            Start an Enquiry
          </Button>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {CUSTOM_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <p className="font-serif text-3xl text-gold-deep">{s.n}</p>
              <h3 className="mt-2 font-serif text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
