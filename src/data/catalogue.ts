import type { Category, Product, SignatureCollection } from "@/lib/types";

const img = {
  hero: "/images/hero.jpg",
  bridal: "/images/bridal.jpg",
  store: "/images/store.jpg",
  heritage: "/images/necklace-heritage.jpg",
  temple: "/images/necklace-temple.jpg",
  bangles: "/images/bangles.jpg",
  jhumkas: "/images/jhumkas.jpg",
  ring: "/images/ring.jpg",
  diamond: "/images/diamond-necklace.jpg",
  chain: "/images/chain.jpg",
};

export const categories: Category[] = [
  { id: "gold", name: "Gold Jewellery", to: "/jewellery", search: { metal: "Gold" }, image: img.heritage },
  { id: "diamond", name: "Diamond Jewellery", to: "/jewellery", search: { metal: "Diamond" }, image: img.diamond },
  { id: "bridal", name: "Bridal Jewellery", to: "/bridal", image: img.bridal },
  { id: "necklaces", name: "Necklaces", to: "/jewellery", search: { type: "Necklace" }, image: img.temple },
  { id: "earrings", name: "Earrings", to: "/jewellery", search: { type: "Earrings" }, image: img.jhumkas },
  { id: "bangles", name: "Bangles", to: "/jewellery", search: { type: "Bangles" }, image: img.bangles },
  { id: "rings", name: "Rings", to: "/jewellery", search: { type: "Ring" }, image: img.ring },
  { id: "chains", name: "Chains", to: "/jewellery", search: { type: "Chain" }, image: img.chain },
  { id: "pendants", name: "Pendants", to: "/jewellery", search: { type: "Pendant" }, image: img.heritage },
  { id: "mens", name: "Men's Jewellery", to: "/jewellery", search: { q: "men" }, image: img.chain },
];

export const signatureCollections: SignatureCollection[] = [
  {
    id: "heritage",
    name: "Heritage",
    title: "Traditional Indian jewellery.",
    description: "Temple motifs, antique finishes and the long memory of South Indian craft.",
    image: img.temple,
  },
  {
    id: "bridal",
    name: "Bridal",
    title: "Wedding jewellery.",
    description: "Pieces composed for the most beautiful beginning — layered, luminous, ceremonial.",
    image: img.bridal,
  },
  {
    id: "everyday",
    name: "Everyday Elegance",
    title: "Modern everyday pieces.",
    description: "Light gold for work, festivals and the hours in between.",
    image: img.ring,
  },
  {
    id: "contemporary",
    name: "Contemporary",
    title: "Modern jewellery designs.",
    description: "Clean silhouettes in precious metal — quiet luxury, current lines.",
    image: img.chain,
  },
];

export const products: Product[] = [
  {
    id: "royal-heritage-necklace",
    name: "Royal Heritage Necklace",
    type: "Necklace",
    collection: "heritage",
    metal: "Gold",
    purity: "22K Gold",
    weight: "58.4 g",
    occasion: ["Wedding", "Festive"],
    description:
      "A layered heritage necklace with antique temple work. Demonstration piece — enquire at the Brodipet showroom for availability and current making charges.",
    images: [img.heritage, img.temple, img.hero],
    featured: true,
    isNew: false,
    demo: true,
  },
  {
    id: "temple-gold-necklace",
    name: "Temple Gold Necklace",
    type: "Necklace",
    collection: "heritage",
    metal: "Gold",
    purity: "22K Gold",
    weight: "42.8 g",
    occasion: ["Wedding", "Traditional"],
    description:
      "South Indian temple jewellery in 22K gold, with sculpted motifs and a ceremonial presence. Demo catalogue piece.",
    images: [img.temple, img.heritage, img.bridal],
    featured: true,
    isNew: false,
    demo: true,
  },
  {
    id: "classic-gold-bangles",
    name: "Classic Gold Bangles",
    type: "Bangles",
    collection: "heritage",
    metal: "Gold",
    purity: "22K Gold",
    weight: "32.0 g (pair)",
    occasion: ["Wedding", "Festive", "Daily Wear"],
    description:
      "A pair of classic engraved gold bangles — the kind that travel from a wedding day into everyday life. Demo piece.",
    images: [img.bangles, img.heritage, img.ring],
    featured: true,
    isNew: false,
    demo: true,
  },
  {
    id: "traditional-jhumka-earrings",
    name: "Traditional Jhumka Earrings",
    type: "Earrings",
    collection: "heritage",
    metal: "Gold",
    purity: "22K Gold",
    weight: "14.2 g",
    occasion: ["Festive", "Wedding", "Traditional"],
    description:
      "Bell-shaped jhumkas with fine granulation. A festive favourite in the demonstration collection.",
    images: [img.jhumkas, img.heritage, img.bridal],
    featured: true,
    isNew: true,
    demo: true,
  },
  {
    id: "elegant-gold-ring",
    name: "Elegant Gold Ring",
    type: "Ring",
    collection: "everyday",
    metal: "Gold",
    purity: "22K Gold",
    weight: "2.8 g",
    occasion: ["Daily Wear", "Work"],
    description:
      "A slim floral gold ring designed for daily wear. Demonstration product — enquire for size and finish.",
    images: [img.ring, img.chain, img.bangles],
    featured: true,
    isNew: true,
    demo: true,
  },
  {
    id: "bridal-diamond-necklace",
    name: "Bridal Diamond Necklace",
    type: "Necklace",
    collection: "bridal",
    metal: "Gold & Diamond",
    purity: "18K Gold",
    weight: "36.5 g",
    occasion: ["Wedding", "Engagement"],
    description:
      "A bridal necklace in gold and diamonds for the ceremony and the photographs that follow. Demo piece; certification discussed in store.",
    images: [img.diamond, img.bridal, img.heritage],
    featured: true,
    isNew: false,
    demo: true,
  },
  {
    id: "contemporary-gold-chain",
    name: "Contemporary Gold Chain",
    type: "Chain",
    collection: "contemporary",
    metal: "Gold",
    purity: "22K Gold",
    weight: "18.5 g",
    occasion: ["Daily Wear", "Work"],
    description:
      "A refined curb-link chain with a modern polish. Demonstration catalogue — weights and lengths on enquiry.",
    images: [img.chain, img.ring, img.store],
    featured: true,
    isNew: true,
    demo: true,
  },
  {
    id: "traditional-pendant",
    name: "Traditional Pendant",
    type: "Pendant",
    collection: "heritage",
    metal: "Gold",
    purity: "22K Gold",
    weight: "7.6 g",
    occasion: ["Festive", "Traditional"],
    description:
      "An antique-finish pendant with temple detailing, intended to sit on a simple chain. Demo piece.",
    images: [img.temple, img.heritage, img.jhumkas],
    featured: false,
    isNew: false,
    demo: true,
  },
  {
    id: "kundan-bridal-set",
    name: "Kundan Bridal Necklace Set",
    type: "Necklace",
    collection: "bridal",
    metal: "Gold",
    purity: "22K Gold",
    weight: "64.0 g (set)",
    occasion: ["Wedding"],
    description:
      "A kundan-inspired bridal set composed for the wedding portrait. Demonstration ensemble — full set details in the showroom.",
    images: [img.heritage, img.bridal, img.jhumkas],
    featured: true,
    isNew: false,
    demo: true,
  },
  {
    id: "diamond-halo-earrings",
    name: "Diamond Halo Earrings",
    type: "Earrings",
    collection: "contemporary",
    metal: "Gold & Diamond",
    purity: "18K Gold",
    weight: "5.3 g",
    occasion: ["Party", "Anniversary", "Wedding"],
    description:
      "Halo-set diamonds in yellow gold. Demonstration jewellery — stone details available on enquiry.",
    images: [img.diamond, img.jhumkas, img.ring],
    featured: true,
    isNew: false,
    demo: true,
  },
  {
    id: "solitaire-gold-ring",
    name: "Solitaire Diamond Ring",
    type: "Ring",
    collection: "bridal",
    metal: "Gold & Diamond",
    purity: "18K Gold",
    weight: "4.1 g",
    occasion: ["Engagement", "Anniversary"],
    description:
      "A classic solitaire setting for an engagement or anniversary. Demo piece; certification discussed in person.",
    images: [img.ring, img.diamond, img.bridal],
    featured: false,
    isNew: true,
    demo: true,
  },
  {
    id: "mens-gold-chain",
    name: "Men's Gold Chain",
    type: "Chain",
    collection: "contemporary",
    metal: "Gold",
    purity: "22K Gold",
    weight: "22.0 g",
    occasion: ["Daily Wear", "Festive"],
    description:
      "A substantial gold chain for men — sturdy links, a quiet polish. Demonstration product.",
    images: [img.chain, img.store, img.ring],
    featured: false,
    isNew: false,
    demo: true,
  },
  {
    id: "antique-temple-bangles",
    name: "Temple Gold Bangles",
    type: "Bangles",
    collection: "heritage",
    metal: "Gold",
    purity: "22K Gold",
    weight: "38.4 g (pair)",
    occasion: ["Wedding", "Traditional"],
    description:
      "Antique-finish temple bangles with goddess motifs. Demo catalogue — enquire for pair weight.",
    images: [img.bangles, img.temple, img.heritage],
    featured: false,
    isNew: false,
    demo: true,
  },
  {
    id: "everyday-gold-studs",
    name: "Classic Gold Stud Earrings",
    type: "Earrings",
    collection: "everyday",
    metal: "Gold",
    purity: "22K Gold",
    weight: "3.2 g",
    occasion: ["Daily Wear", "Work"],
    description:
      "Minimal everyday studs with a polished finish, light enough for all-day wear. Demo piece.",
    images: [img.jhumkas, img.ring, img.chain],
    featured: false,
    isNew: true,
    demo: true,
  },
  {
    id: "bridal-maang-tikka",
    name: "Bridal Maang Tikka",
    type: "Pendant",
    collection: "bridal",
    metal: "Gold",
    purity: "22K Gold",
    weight: "12.4 g",
    occasion: ["Wedding"],
    description:
      "A statement maang tikka to complete a bridal ensemble. Demonstration accessory.",
    images: [img.diamond, img.bridal, img.heritage],
    featured: false,
    isNew: false,
    demo: true,
  },
  {
    id: "everyday-gold-bracelet",
    name: "Elegant Gold Bracelet",
    type: "Bracelet",
    collection: "everyday",
    metal: "Gold",
    purity: "22K Gold",
    weight: "8.6 g",
    occasion: ["Daily Wear", "Festive"],
    description:
      "A slender gold bracelet for everyday elegance. Demo catalogue piece — enquire for length.",
    images: [img.bangles, img.chain, img.ring],
    featured: false,
    isNew: true,
    demo: true,
  },
];

export const galleryImages = [
  img.hero,
  img.bridal,
  img.heritage,
  img.jhumkas,
  img.bangles,
  img.store,
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && (p.collection === product.collection || p.type === product.type))
    .slice(0, limit);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) =>
    [p.name, p.type, p.metal, p.collection, p.purity, ...p.occasion].join(" ").toLowerCase().includes(q),
  );
}
