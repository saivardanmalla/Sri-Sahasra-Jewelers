import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BridalSection } from "@/components/BridalSection";
import { CategoryCard } from "@/components/CategoryCard";
import { CollectionCard } from "@/components/CollectionCard";
import { CustomJewellery } from "@/components/CustomJewellery";
import { GoldRateCard } from "@/components/GoldRateCard";
import { Hero } from "@/components/Hero";
import { InstagramGallery } from "@/components/InstagramGallery";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { StoreSection } from "@/components/StoreSection";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { categories, products, signatureCollections } from "@/data/catalogue";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 8);
  const [first, ...rest] = signatureCollections;

  return (
    <>
      <Hero />

      <section id="collections" className="py-20">
        <div className="container-luxe mb-10">
          <Reveal>
            <p className="eyebrow">Explore Our Collections</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Jewellery, by desire.</h2>
          </Reveal>
        </div>
        <div className="flex gap-3 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      <section className="container-luxe py-12">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">Our Signature Collection</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Timeless designs.
            <br />
            Crafted for unforgettable moments.
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
          {first && <CollectionCard collection={first} large />}
          {rest.map((c) => (
            <CollectionCard key={c.id} collection={c} />
          ))}
        </div>
      </section>

      <section className="container-luxe py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <Reveal>
            <p className="eyebrow">Featured Jewellery</p>
            <h2 className="mt-3 font-serif text-4xl">Pieces with presence</h2>
          </Reveal>
          <Link
            to="/jewellery"
            className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold-deep sm:inline-flex"
          >
            View catalogue <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <BridalSection />
      <CustomJewellery />
      <GoldRateCard />
      <WhyChooseUs />
      <StoreSection />
      <TestimonialSlider />
      <InstagramGallery />
    </>
  );
}
