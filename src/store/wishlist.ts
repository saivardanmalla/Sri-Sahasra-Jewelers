import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
  ids: string[];
  hydrated: boolean;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  has: (id: string) => boolean;
  setHydrated: () => void;
};

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      hydrated: false,
      toggle: (id) =>
        set((s) => ({
          ids: s.ids.includes(id) ? s.ids.filter((x) => x !== id) : [...s.ids, id],
        })),
      remove: (id) => set((s) => ({ ids: s.ids.filter((x) => x !== id) })),
      has: (id) => get().ids.includes(id),
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "ssj-wishlist",
      skipHydration: true,
      partialize: (s) => ({ ids: s.ids }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
