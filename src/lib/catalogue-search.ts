import type { CatalogueSearch } from "@/lib/types";

function str(v: unknown) {
  return typeof v === "string" && v.length > 0 ? v : undefined;
}

export function parseCatalogueSearch(search: Record<string, unknown>): CatalogueSearch {
  return {
    q: str(search.q),
    category: str(search.category),
    collection: str(search.collection),
    type: str(search.type),
    metal: str(search.metal),
    occasion: str(search.occasion),
    sort: str(search.sort),
  };
}
