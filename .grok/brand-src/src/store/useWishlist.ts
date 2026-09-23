import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) =>
        set((s) => ({
          ids: s.ids.includes(id) ? s.ids.filter((x) => x !== id) : [...s.ids, id],
        })),
      has: (id) => get().ids.includes(id),
    }),
    { name: "ssj-wishlist" }
  )
);

// Demo config — REPLACE with verified business details before launch.
export const BUSINESS = {
  name: "Sri Sahasra Jewellers",
  phone: "+91-XXXXXXXXXX", // TODO: replace with verified number
  whatsapp: "91XXXXXXXXXX", // TODO: replace with verified WhatsApp number
  addressLines: ["Brodipet", "Guntur", "Andhra Pradesh"],
  hours: "Mon – Sun: 10:00 AM – 8:30 PM", // TODO: confirm
  mapsQuery: "Sri Sahasra Jewellers Brodipet Guntur",
};

export function waLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
