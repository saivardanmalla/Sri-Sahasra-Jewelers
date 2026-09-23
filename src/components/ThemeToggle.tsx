import { Moon, Sun } from "lucide-react";
import { useUI } from "@/store/ui";

export function ThemeToggle({ light = false }: { light?: boolean }) {
  const theme = useUI((s) => s.theme);
  const toggleTheme = useUI((s) => s.toggleTheme);
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={
        light
          ? "inline-flex size-11 items-center justify-center text-bg/80 hover:text-gold"
          : "inline-flex size-11 items-center justify-center text-fg/80 hover:text-gold-deep"
      }
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
