import { create } from "zustand";

export type EnquiryTarget = {
  productId?: string;
  productName?: string;
} | null;

type Theme = "light" | "dark";

type UIState = {
  searchOpen: boolean;
  enquiryOpen: boolean;
  enquiryTarget: EnquiryTarget;
  mobileMenuOpen: boolean;
  theme: Theme;
  openSearch: () => void;
  closeSearch: () => void;
  openEnquiry: (target?: EnquiryTarget) => void;
  closeEnquiry: () => void;
  setMobileMenu: (open: boolean) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export const useUI = create<UIState>((set, get) => ({
  searchOpen: false,
  enquiryOpen: false,
  enquiryTarget: null,
  mobileMenuOpen: false,
  theme: "light",
  openSearch: () => set({ searchOpen: true, mobileMenuOpen: false }),
  closeSearch: () => set({ searchOpen: false }),
  openEnquiry: (target = null) =>
    set({ enquiryOpen: true, enquiryTarget: target, mobileMenuOpen: false }),
  closeEnquiry: () => set({ enquiryOpen: false, enquiryTarget: null }),
  setMobileMenu: (open) => set({ mobileMenuOpen: open }),
  setTheme: (theme) => {
    applyTheme(theme);
    try {
      localStorage.setItem("ssj-theme", theme);
    } catch {
      /* ignore */
    }
    set({ theme });
  },
  toggleTheme: () => get().setTheme(get().theme === "dark" ? "light" : "dark"),
}));

export function hydrateTheme() {
  try {
    const saved = localStorage.getItem("ssj-theme");
    const theme: Theme = saved === "dark" ? "dark" : "light";
    useUI.getState().setTheme(theme);
  } catch {
    useUI.getState().setTheme("light");
  }
}
