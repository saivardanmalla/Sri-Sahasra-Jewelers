import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { StoreSection } from "@/components/StoreSection";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A jewellery house in Brodipet, Guntur."
        subtitle="Sri Sahasra Jewellers is imagined here as a quiet, modern showroom — rooted in South Indian craft, made for families choosing gold with care."
      />
      <section className="container-luxe grid items-center gap-12 pb-16 lg:grid-cols-2">
        <Reveal>
          <img
            src="/images/necklace-heritage.jpg"
            alt="Heritage gold necklace"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal>
          <p className="font-serif text-3xl leading-snug">
            Sahasra — a thousand. A thousand lights, a thousand blessings, a thousand quiet reasons to keep a
            piece close.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            This website is a visual proposal: how the house might feel online. Traditional jewellery,
            contemporary calm, and a store you can walk into on Brodipet. Photography and copy are
            demonstration-only until the owner’s own images and story take their place.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            We designed generous space, gold used as an accent — never a wash — and rooms for bridal,
            everyday and custom work. The catalogue is mock, so the experience can be judged on craft,
            not inventory.
          </p>
        </Reveal>
      </section>
      <WhyChooseUs />
      <StoreSection />
    </>
  );
}
