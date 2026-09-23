import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-gold-deep", className)}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M16 4.5c2.8 3.6 7.4 6 10.4 6.7-2.6 1.3-6.1 4.6-10.4 11.8C11.7 15.8 8.2 12.5 5.6 11.2 8.6 10.5 13.2 8.1 16 4.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="16" cy="12.4" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
        light ? "text-bg" : "text-fg",
      )}
      aria-label="Sri Sahasra Jewellers home"
    >
      <Mark className={cn(compact ? "size-8" : "size-9", light && "text-gold")} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif tracking-[0.18em]",
            compact ? "text-sm" : "text-base sm:text-lg",
          )}
        >
          SRI SAHASRA
        </span>
        <span
          className={cn(
            "mt-1 font-sans font-medium uppercase tracking-[0.42em]",
            compact ? "text-[8px]" : "text-[9px]",
            light ? "text-bg/70" : "text-muted",
          )}
        >
          Jewellers
        </span>
      </span>
    </Link>
  );
}
