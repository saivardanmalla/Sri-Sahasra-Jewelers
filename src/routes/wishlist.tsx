import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/catalogue";
import { useWishlist } from "@/store/wishlist";

export const Route = createFileRoute("/wishlist")({ component: WishlistPage });

function WishlistPage() {
  const ids = useWishlist((s) => s.ids);
  const saved = products.filter((p) => ids.includes(p.id));

  return (
    <>
      <PageHeader
        eyebrow="Wishlist"
        title="Jewellery you have kept aside."
        subtitle="Saved on this device only. Demonstration catalogue."
      />
      {saved.length === 0 ? (
        <EmptyState
          icon={<Heart size={40} strokeWidth={1.2} />}
          title="Your Wishlist is Empty"
          body="Save jewellery you love and find it here later."
          actionLabel="Explore Collection"
          to="/jewellery"
        />
      ) : (
        <section className="container-luxe pb-24">
          <ProductGrid products={saved} />
        </section>
      )}
    </>
  );
}
