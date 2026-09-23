import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { WishlistButton } from "@/components/WishlistButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative overflow-hidden bg-cream">
          <img
            src={product.images[0]}
            alt={product.name}
            className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute left-3 top-3 bg-bg/90 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-muted">
            Demo
          </span>
          <WishlistButton
            id={product.id}
            className="absolute right-3 top-3 opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:hidden">
            <span className="inline-flex items-center gap-2 bg-bg px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-fg">
              View Details <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">{product.purity}</p>
          <h3 className="mt-1 font-serif text-xl leading-snug">{product.name}</h3>
          <p className="mt-1 text-sm text-muted">Enquire for Price</p>
        </div>
      </Link>
    </article>
  );
}
