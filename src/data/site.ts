export const SITE = {
  name: "Sri Sahasra Jewellers",
  shortName: "Sri Sahasra",
  tagline: "Timeless Jewellery For Meaningful Moments",
  locationLine: "Brodipet, Guntur, Andhra Pradesh",
  area: "Brodipet",
  city: "Guntur",
  state: "Andhra Pradesh",
  phonePlaceholder: "+91  XXXXX  XXXXX",
  hoursPlaceholder: "Mon – Sat · 10:30 AM – 8:00 PM",
  hoursNote: "Opening hours are a placeholder — please confirm when you visit.",
  mapsQuery: "Brodipet Guntur Andhra Pradesh jewellery",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  demoNotice:
    "This is a visual website proposal. Product names, rates and reviews are demonstration content — not the store's live inventory.",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/jewellery", label: "Jewellery" },
  { to: "/bridal", label: "Bridal" },
  { to: "/custom-jewellery", label: "Custom Jewellery" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export const GOLD_RATES = [
  { purity: "22K Gold", per10g: 72000, demo: true },
  { purity: "24K Gold", per10g: 78500, demo: true },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Beautiful collection and a wonderful shopping experience. The pieces felt considered, not rushed.",
    name: "Demo Customer",
  },
  {
    quote:
      "We came for bridal jewellery and left with a sense of calm. The showroom has a quiet, personal rhythm.",
    name: "Demo Customer",
  },
  {
    quote:
      "Elegant everyday gold — the kind of jewellery you reach for without thinking. A graceful visit.",
    name: "Demo Customer",
  },
] as const;

export const POPULAR_SEARCHES = [
  "Gold Necklace",
  "Bridal Jewellery",
  "Gold Bangles",
  "Diamond Earrings",
  "Temple Jewellery",
  "Custom Design",
];

export const WHY_CHOOSE = [
  {
    title: "Trusted Craftsmanship",
    body: "Beautifully designed jewellery, finished with patience and a jeweller's eye.",
  },
  {
    title: "Timeless Designs",
    body: "Traditional and contemporary collections that hold their place across years.",
  },
  {
    title: "Personal Service",
    body: "A personalised jewellery shopping experience — unhurried, attentive, human.",
  },
  {
    title: "Celebrating Every Occasion",
    body: "Jewellery for weddings, festivals and the quiet beauty of everyday moments.",
  },
] as const;

export const CUSTOM_STEPS = [
  { n: "01", title: "Share Your Idea", body: "A sketch, a memory, a stone, a feeling — we begin with yours." },
  { n: "02", title: "Design Consultation", body: "Sit with us in Guntur. We refine proportion, purity and finish." },
  { n: "03", title: "Crafting", body: "Goldsmiths shape the piece by hand, with time allowed for detail." },
  { n: "04", title: "Your Jewellery", body: "A finished piece that belongs only to your story." },
] as const;
