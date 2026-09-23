import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { formatINR } from "@/data/goldRates";
import { useWishlist, waLink } from "@/store/useWishlist";
import DemoImage from "@/components/jewellery/DemoImage";

export default function ProductCard({ product }: { product: Product }) {
  const { toggle, has } = useWishlist();
  const wished = has(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-luxe group relative"
    >
      {product.isNew && (
        <span className="absolute left-3 top-3 z-10 bg-charcoal px-2.5 py-1 text-[10px] uppercase tracking-widest text-gold-light">
          New
        </span>
      )}
      <button
        onClick={() => toggle(product.id)}
        aria-label="Wishlist"
        className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow-sm transition hover:scale-110"
      >
        <Heart size={16} className={wished ? "fill-gold text-gold" : "text-charcoal/60"} />
      </button>

      <Link to={`/product/${product.slug}`} className="block">
        <div className="overflow-hidden">
          <DemoImage label={product.name} className="transition-transform duration-700 group-hover:scale-105" />
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <p className="text-[10px] uppercase tracking-luxe text-gold-deep">{product.metal}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 className="mt-1.5 font-serif text-lg leading-snug text-charcoal transition-colors hover:text-gold-deep">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-xs text-charcoal/50">
          {product.purity} · {product.weight}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-beige pt-4">
          {product.price ? (
            <span className="font-medium text-charcoal">{formatINR(product.price)}</span>
          ) : (
            <a
              href={waLink(`Hello Sri Sahasra Jewellers! I'd like to enquire about: ${product.name} (${product.id})`)}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gold-deep underline-offset-4 hover:underline"
            >
              Enquire Price
            </a>
          )}
          <Link to={`/product/${product.slug}`} className="text-xs uppercase tracking-widest text-charcoal/50 hover:text-gold-deep">
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
