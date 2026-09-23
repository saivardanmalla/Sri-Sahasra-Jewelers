import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { type ReactNode, useMemo, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { NativeSelect } from "@/components/ui/field";
import { products } from "@/data/catalogue";
import { parseCatalogueSearch } from "@/lib/catalogue-search";
import type { CatalogueSearch } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/jewellery")({
  validateSearch: (s: Record<string, unknown>) => parseCatalogueSearch(s),
  component: JewelleryPage,
});

const TYPES = ["Necklace", "Ring", "Earrings", "Bangles", "Bracelet", "Chain", "Pendant"] as const;
const COLLECTIONS = [
  { id: "heritage", label: "Heritage" },
  { id: "bridal", label: "Bridal" },
  { id: "everyday", label: "Everyday" },
  { id: "contemporary", label: "Contemporary" },
] as const;
const METALS = ["Gold", "Diamond", "Gold & Diamond"] as const;
const OCCASIONS = ["Wedding", "Festive", "Daily Wear", "Traditional", "Engagement"] as const;

function JewelleryPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [draft, setDraft] = useState(search.q ?? "");

  const filtered = useMemo(() => {
    let list = [...products];
    if (search.q) {
      const q = search.q.toLowerCase();
      list = list.filter((p) =>
        [p.name, p.type, p.metal, p.collection, ...p.occasion].join(" ").toLowerCase().includes(q),
      );
    }
    if (search.collection) list = list.filter((p) => p.collection === search.collection);
    if (search.type) list = list.filter((p) => p.type === search.type);
    if (search.metal) {
      list = list.filter((p) =>
        search.metal === "Diamond" ? p.metal.includes("Diamond") : p.metal.includes(search.metal ?? ""),
      );
    }
    if (search.occasion) list = list.filter((p) => p.occasion.includes(search.occasion ?? ""));
    if (search.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (search.sort === "new") list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    else list.sort((a, b) => Number(b.featured) - Number(a.featured));
    return list;
  }, [search]);

  function patch(next: Partial<CatalogueSearch>) {
    void navigate({
      search: (prev) => {
        const merged: CatalogueSearch = { ...prev, ...next };
        for (const key of Object.keys(merged) as (keyof CatalogueSearch)[]) {
          if (!merged[key]) delete merged[key];
        }
        return merged;
      },
    });
  }

  return (
    <>
      <PageHeader
        eyebrow="Jewellery Catalogue"
        title="A considered edit of gold and diamond."
        subtitle="Demonstration pieces for Sri Sahasra Jewellers. Enquire for price — nothing here is a live listing."
      />
      <section className="container-luxe pb-24">
        <form
          className="mb-8 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            patch({ q: draft || undefined });
          }}
        >
          <div className="relative flex-1">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Search jewellery"
              className="w-full border border-border bg-bg-elevated py-3 pl-10 pr-4 text-sm outline-none focus:border-gold"
              aria-label="Search jewellery"
            />
          </div>
          <NativeSelect
            aria-label="Sort"
            value={search.sort ?? "featured"}
            onChange={(e) => patch({ sort: e.target.value === "featured" ? undefined : e.target.value })}
            className="sm:w-48"
          >
            <option value="featured">Sort: Featured</option>
            <option value="new">Newest</option>
            <option value="name">Name</option>
          </NativeSelect>
        </form>

        <div className="mb-10 flex flex-col gap-6 overflow-x-auto border-y border-border py-6 lg:flex-row lg:flex-wrap">
          <FilterGroup label="Jewellery Type">
            {TYPES.map((t) => (
              <Chip key={t} active={search.type === t} onClick={() => patch({ type: search.type === t ? undefined : t })}>
                {t}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Collection">
            {COLLECTIONS.map((c) => (
              <Chip
                key={c.id}
                active={search.collection === c.id}
                onClick={() => patch({ collection: search.collection === c.id ? undefined : c.id })}
              >
                {c.label}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Metal">
            {METALS.map((m) => (
              <Chip
                key={m}
                active={search.metal === m}
                onClick={() => patch({ metal: search.metal === m ? undefined : m })}
              >
                {m}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Occasion">
            {OCCASIONS.map((o) => (
              <Chip
                key={o}
                active={search.occasion === o}
                onClick={() => patch({ occasion: search.occasion === o ? undefined : o })}
              >
                {o}
              </Chip>
            ))}
          </FilterGroup>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search size={36} strokeWidth={1.2} />}
            title="No Jewellery Found"
            body="Try another search or explore our collections."
            actionLabel="Explore Collections"
            to="/collections"
          />
        ) : (
          <>
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-muted">
              {filtered.length} demonstration {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <ProductGrid products={filtered} />
          </>
        )}

        <p className="mt-10 text-center text-xs text-muted">
          Need a different filter?{" "}
          <Link to="/jewellery" className="text-gold-deep">
            Clear all
          </Link>
        </p>
      </section>
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0 flex-1">
      <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-muted">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "max-w-full border px-3 py-2 text-[11px] uppercase tracking-[0.14em] transition-colors whitespace-nowrap",
        active ? "border-gold bg-gold/20 text-gold-deep" : "border-border text-fg/70 hover:border-gold",
      )}
    >
      {children}
    </button>
  );
}
