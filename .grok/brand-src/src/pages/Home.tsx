import Hero from "@/components/jewellery/Hero";
import CategoryGrid from "@/components/jewellery/CategoryGrid";
import FeaturedCollections from "@/components/jewellery/FeaturedCollections";
import BridalTeaser from "@/components/jewellery/BridalTeaser";
import CustomTeaser from "@/components/jewellery/CustomTeaser";
import GoldRateSection from "@/components/jewellery/GoldRateSection";
import WhyChooseUs from "@/components/jewellery/WhyChooseUs";
import StoreExperience from "@/components/jewellery/StoreExperience";
import EnquiryCTA from "@/components/jewellery/EnquiryCTA";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/jewellery/SectionHeading";
import { products } from "@/data/products";

export default function Home() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedCollections />
      <section className="container-luxe py-20">
        <SectionHeading
          eyebrow="Just Arrived"
          title="New Arrivals"
          subtitle="Fresh pieces from our latest showcase — enquire for pricing and availability."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      <BridalTeaser />
      <CustomTeaser />
      <GoldRateSection />
      <WhyChooseUs />
      <StoreExperience />
      <EnquiryCTA />
    </>
  );
}
