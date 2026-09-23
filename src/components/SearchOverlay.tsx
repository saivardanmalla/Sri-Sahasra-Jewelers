import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { products, searchProducts } from "@/data/catalogue";
import { POPULAR_SEARCHES } from "@/data/site";
import { useUI } from "@/store/ui";

export function SearchOverlay() {
  const open = useUI((s) => s.searchOpen);
  const close = useUI((s) => s.closeSearch);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();
  const results = useMemo(() => (q.trim() ? searchProducts(q).slice(0, 8) : products.filter((p) => p.featured).slice(0, 4)), [q]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-fg/50 px-4 pt-[12vh] backdrop-blur-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search jewellery"
            className="w-full max-w-2xl border border-border bg-bg p-6 shadow-soft sm:p-8"
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Search Jewellery</p>
                <h2 className="mt-2 font-serif text-3xl">Find a piece</h2>
              </div>
              <button type="button" onClick={close} className="size-11 text-fg" aria-label="Close search">
                <X size={20} />
              </button>
            </div>
            <div className="relative">
              <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search for necklace, ring, earrings..."
                className="w-full border-b border-fg/20 bg-transparent py-3 pl-11 pr-4 text-base outline-none placeholder:text-muted focus:border-gold"
              />
            </div>

            {!q && (
              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted">Popular Searches</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQ(term)}
                      className="border border-border px-3 py-2 text-xs tracking-wide text-fg/80 hover:border-gold hover:text-gold-deep"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 space-y-1">
              {q && results.length === 0 && (
                <p className="py-6 text-sm text-muted">No jewellery found. Try another search or explore collections.</p>
              )}
              {results.map((p) => (
                <Link
                  key={p.id}
                  to="/product/$id"
                  params={{ id: p.id }}
                  onClick={close}
                  className="flex items-center gap-4 px-2 py-2.5 hover:bg-cream"
                >
                  <img src={p.images[0]} alt="" className="size-14 object-cover" />
                  <span>
                    <span className="block font-serif text-lg">{p.name}</span>
                    <span className="text-xs uppercase tracking-[0.16em] text-muted">
                      {p.purity} · {p.type}
                    </span>
                  </span>
                </Link>
              ))}
              {q && results.length > 0 && (
                <Link
                  to="/jewellery"
                  search={{ q }}
                  onClick={close}
                  className="mt-4 inline-flex text-[11px] uppercase tracking-[0.22em] text-gold-deep"
                >
                  View all results
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
