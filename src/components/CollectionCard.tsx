import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { SignatureCollection } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CollectionCard({
  collection,
  large = false,
}: {
  collection: SignatureCollection;
  large?: boolean;
}) {
  return (
    <Link
      to="/jewellery"
      search={{ collection: collection.id }}
      className={cn("group relative block overflow-hidden bg-cream", large && "md:col-span-2 md:row-span-2")}
    >
      <img
        src={collection.image}
        alt=""
        className={cn(
          "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
          large ? "h-[28rem] md:h-full md:min-h-[36rem]" : "h-72 md:h-80",
        )}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-fg/80 via-fg/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-bg md:p-8">
        <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{collection.name}</p>
        <h3 className="mt-2 font-serif text-3xl md:text-4xl">{collection.title}</h3>
        <p className="mt-2 max-w-md text-sm text-bg/80">{collection.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]">
          Explore <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
