import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Home, LayoutGrid, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUI } from "@/store/ui";
import { useWishlist } from "@/store/wishlist";

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const count = useWishlist((s) => s.ids.length);
  const openEnquiry = useUI((s) => s.openEnquiry);

  const item = (active: boolean) =>
    cn(
      "flex min-h-12 flex-1 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-[0.16em]",
      active ? "text-gold-deep" : "text-muted",
    );

  return (
    <nav
      aria-label="Mobile shortcuts"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <div className="flex">
        <Link to="/" className={item(pathname === "/")}>
          <Home size={18} />
          Home
        </Link>
        <Link to="/collections" className={item(pathname.startsWith("/collections") || pathname.startsWith("/jewellery"))}>
          <LayoutGrid size={18} />
          Collections
        </Link>
        <Link to="/wishlist" className={cn(item(pathname.startsWith("/wishlist")), "relative")}>
          <span className="relative">
            <Heart size={18} />
            {count > 0 && (
              <span className="absolute -right-2 -top-1 flex size-3.5 items-center justify-center rounded-full bg-gold text-[8px] font-semibold text-fg">
                {count}
              </span>
            )}
          </span>
          Wishlist
        </Link>
        <button type="button" className={item(false)} onClick={() => openEnquiry()}>
          <MessageCircle size={18} />
          Enquire
        </button>
      </div>
    </nav>
  );
}
