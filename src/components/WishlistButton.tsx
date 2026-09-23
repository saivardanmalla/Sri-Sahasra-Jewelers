import { Heart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/store/wishlist";

export function WishlistButton({
  id,
  className,
  size = 18,
}: {
  id: string;
  className?: string;
  size?: number;
}) {
  const on = useWishlist((s) => s.ids.includes(id));
  const toggle = useWishlist((s) => s.toggle);
  const reduce = useReducedMotion();

  return (
    <button
      type="button"
      aria-label={on ? "Remove from wishlist" : "Save to wishlist"}
      aria-pressed={on}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full bg-bg-elevated/90 text-fg shadow-soft backdrop-blur-sm transition-colors hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
        className,
      )}
    >
      <motion.span
        key={on ? "on" : "off"}
        initial={reduce ? false : { scale: 0.25, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        className="flex"
      >
        <Heart size={size} className={cn(on && "fill-gold text-gold-deep")} />
      </motion.span>
    </button>
  );
}
