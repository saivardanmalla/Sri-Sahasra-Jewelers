import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  const inner = (
    <>
      <img
        src={category.image}
        alt=""
        className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-80"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-fg/75 via-fg/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-bg">
        <span className="font-serif text-2xl">{category.name}</span>
        <ArrowUpRight
          size={18}
          className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </>
  );

  const cls = "group relative block min-w-[220px] flex-1 overflow-hidden bg-cream";

  if (category.to === "/bridal") {
    return (
      <Link to="/bridal" className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <Link to="/jewellery" search={category.search} className={cls}>
      {inner}
    </Link>
  );
}
