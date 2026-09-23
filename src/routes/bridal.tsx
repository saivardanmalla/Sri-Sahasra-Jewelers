import { createFileRoute } from "@tanstack/react-router";
import { BridalSection } from "@/components/BridalSection";
import { PageHeader } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { products } from "@/data/catalogue";
import { useUI } from "@/store/ui";

export const Route = createFileRoute("/bridal")({ component: BridalPage });

function BridalPage() {
  const bridal = products.filter((p) => p.collection === "bridal" || p.occasion.includes("Wedding"));
  const openEnquiry = useUI((s) => s.openEnquiry);
  return (
    <>
      <BridalSection />
      <PageHeader
        eyebrow="Bridal jewellery"
        title="For the day that holds everything."
        subtitle="A demonstration bridal edit — necklaces, sets and finishing pieces. Visit the Guntur showroom to see what can be made for you."
      />
      <section className="container-luxe pb-20">
        <ProductGrid products={bridal} />
        <div className="mt-16 border border-border bg-cream px-6 py-12 text-center">
          <h2 className="font-serif text-3xl">Begin with a conversation</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Bridal jewellery is personal. Tell us the date, the silk, the feeling — we will take it from there.
          </p>
          <Button className="mt-8" onClick={() => openEnquiry({ productName: "Bridal collection" })}>
            Enquire about bridal jewellery
          </Button>
        </div>
      </section>
    </>
  );
}
