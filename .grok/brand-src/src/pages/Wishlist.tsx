import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "@/store/useWishlist";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/jewellery/SectionHeading";

export default function WishlistPage() {
  const ids = useWishlist((s) => s.ids);
  const saved = products.filter((p) => ids.includes(p.id));

  return (
    <div className="container-luxe py-16">
      <SectionHeading eyebrow="Saved For Later" title="Your Wishlist" />
      {saved.length === 0 ? (
        <div className="py-16 text-center">
          <Heart className="mx-auto text-charcoal/25" size={44} />
          <p className="mt-5 text-charcoal/55">No pieces saved yet. Tap the heart on any product to keep it here.</p>
          <Link to="/shop" className="btn-gold mt-8">Browse Jewellery</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {saved.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
