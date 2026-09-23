export type JewelleryType =
  | "Necklace"
  | "Ring"
  | "Earrings"
  | "Bangles"
  | "Bracelet"
  | "Chain"
  | "Pendant";

export type Metal = "Gold" | "Diamond" | "Gold & Diamond";

export type CollectionId = "heritage" | "bridal" | "everyday" | "contemporary";

export interface Product {
  id: string;
  name: string;
  type: JewelleryType;
  collection: CollectionId;
  metal: Metal;
  purity: string;
  weight: string;
  occasion: string[];
  description: string;
  images: string[];
  featured: boolean;
  isNew: boolean;
  demo: true;
}

export interface Category {
  id: string;
  name: string;
  to: "/jewellery" | "/bridal";
  search?: CatalogueSearch;
  image: string;
}

export interface SignatureCollection {
  id: CollectionId;
  name: string;
  title: string;
  description: string;
  image: string;
}

export type CatalogueSearch = {
  q?: string;
  category?: string;
  collection?: string;
  type?: string;
  metal?: string;
  occasion?: string;
  sort?: string;
};
