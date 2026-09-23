import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Share2, MessageCircle, MapPin } from "lucide-react";
import { products } from "@/data/products";
import { useWishlist, waLink, BUSINESS } from "@/store/useWishlist";
import DemoImage from "@/components/jewellery/DemoImage";
import ProductCard from "@/components/products/ProductCard";
import EnquiryCTA from "@/components/jewellery/EnquiryCTA";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { toggle, has } = useWishlist();

  if (!product) {
    return (
      <div className="container-luxe py-32 text-center">
        <h2 className="text-3xl">Piece not found</h2>
        <Link to="/shop" className="btn-gold mt-8">Back to Catalogue</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const wa = waLink(
    `Hello Sri Sahasra Jewellers!

I'd like to enquire about:
• ${product.name} (${product.id})

Please share price and availability.`
  );
  const share = () => {
    if (navigator.share) navigator.share({ title: product.name, url: window.location.href });
    else navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="container-luxe py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <DemoImage label={product.name} ratio="aspect-[4/5]" />
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <DemoImage key={n} label={`${product.name} ${n}`} ratio="aspect-square" />
            ))}
          </div>
          <p className="mt-3 text-xs text-charcoal/40">Demo images — real product photography pending.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className="eyebrow">{product.collection}</p>
          <h1 className="mt-3 text-4xl leading-tight">{product.name}</h1>
          <p className="mt-3 text-sm text-charcoal/50">Product ID: {product.id}</p>
          <p className="mt-6 leading-relaxed text-charcoal/70">{product.description}</p>

          <div className="mt-8 divide-y divide-beige border-y border-beige text-sm">
            {[
              ["Metal", product.metal],
              ["Purity", product.purity],
              ["Weight", product.weight],
              ["Occasion", product.occasion.join(", ")],
              ["Category", product.category.replace(/^\w/, (c) => c.toUpperCase())],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-3.5">
                <span className="uppercase tracking-widest text-charcoal/45">{k}</span>
                <span className="text-charcoal/80">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className="btn-gold"><MessageCircle size={15} /> Enquire on WhatsApp</a>
            <Link to="/contact" className="btn-outline"><MapPin size={15} /> Visit Store</Link>
            <button onClick={() => toggle(product.id)} className="btn-outline" aria-label="Wishlist">
              <Heart size={15} className={has(product.id) ? "fill-gold text-gold" : ""} />
              {has(product.id) ? "Saved" : "Wishlist"}
            </button>
            <button onClick={share} className="btn-outline" aria-label="Share"><Share2 size={15} /></button>
          </div>
          <p className="mt-5 text-xs text-charcoal/40">
            Prices are confirmed in store or on WhatsApp ({BUSINESS.phone}). Final billing includes applicable GST.
          </p>
        </motion.div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="heading-lg mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
      <EnquiryCTA />
    </div>
  );
}
