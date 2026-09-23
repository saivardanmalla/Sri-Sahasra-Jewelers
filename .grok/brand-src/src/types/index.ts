export type Metal = "Gold" | "Diamond" | "Silver" | "Platinum";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  collection: string;
  metal: Metal;
  purity: string;
  weight: string; // demo value
  price: number | null; // null = enquiry-based pricing
  isNew: boolean;
  featured: boolean;
  gender: "Women" | "Men" | "Kids" | "Unisex";
  occasion: string[];
  description: string;
  image: string | null; // null renders demo placeholder
  demo: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string | null;
  demo: boolean;
}

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string | null;
  demo: boolean;
}

export interface GoldRate {
  metal: "Gold" | "Silver";
  purity: string;
  pricePer10g: number;
  updatedAt: string; // ISO
  demo: boolean;
}

export interface Enquiry {
  id: string;
  customer: string;
  phone: string;
  product: string;
  type: string;
  date: string;
  status: "New" | "Contacted" | "Follow-up" | "Converted" | "Closed";
  staff: string;
}
