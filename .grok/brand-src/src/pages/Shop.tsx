import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/jewellery/SectionHeading";
import EnquiryCTA from "@/components/jewellery/EnquiryCTA";

const metals = ["All", "Gold", "Diamond", "Silver", "Platinum"];
const sorts = [
  { v: "featured", l: "Featured" },
  { v: "newest", l: "Newest" },
  { v: "price-asc", l: "Price: Low to High" },
  { v: "price-desc", l: "Price: High to Low" },
];

export default function Shop() {
  const [params] = useSearchParams();
  const q = params.get("q")?.toLowerCase() ?? "";
  const cat = params.get("cat") ?? "all";

  const [metal, setMetal] = useState("All");
  const [sort, setSort] = useState("featured");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const list = useMemo(() => {
    let l = products.filter((p) => {
      const matchCat = cat === "all" || p.category === cat || p.collection.toLowerCase().includes(cat);
      const matchMetal = metal === "All" || p.metal === metal;
      const matchQ = !q || `${p.name} ${p.metal} ${p.category} ${p.collection}`.toLowerCase().includes(q);
      return matchCat && matchMetal && matchQ;
    });
    if (sort === "newest") l = [...l].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    if (sort === "price-asc") l = [...l].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (sort === "price-desc") l = [...l].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    return l;
  }, [q, cat, metal, sort]);

  return (
    <div className="container-luxe py-16">
      <SectionHeading
        eyebrow="The Catalogue"
        title={q ? `Results for "${q}"` : cat !== "all" ? cat.replace(/^\w/, (c) => c.toUpperCase()) : "All Jewellery"}
        subtitle="Demo catalogue — pricing is enquiry-based. Confirm availability on WhatsApp or in store."
      />

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-y border-beige py-4">
        <div className="flex flex-wrap gap-2">
          {metals.map((m) => (
            <button
              key={m}
              onClick={() => setMetal(m)}
              className={`border px-4 py-2 text-xs uppercase tracking-widest transition ${
                metal === m ? "border-gold bg-gold text-charcoal" : "border-charcoal/15 text-charcoal/60 hover:border-gold"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-charcoal/15 bg-white px-4 py-2 text-xs uppercase tracking-widest outline-none focus:border-gold"
        >
          {sorts.map((s) => <option key={s.v} value={s.v}>{s.l}</option>)}
        </select>
      </div>

      {list.length === 0 ? (
        <p className="py-20 text-center text-charcoal/50">No pieces match your filters. Try broadening your search.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
      <EnquiryCTA />
    </div>
  );
}
