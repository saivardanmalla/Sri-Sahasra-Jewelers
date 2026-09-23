import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("shimmer rounded-xs bg-beige/60", className)} />;
}

export function ProductCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-[3/4] w-full" />
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-3 w-20" />
    </div>
  );
}

export function ProductDetailsSkeleton() {
  return (
    <div className="container-luxe grid gap-10 py-16 lg:grid-cols-2">
      <div className="space-y-3">
        <Skeleton className="aspect-[4/5] w-full" />
        <div className="grid grid-cols-4 gap-3">
          <Skeleton className="aspect-square" />
          <Skeleton className="aspect-square" />
          <Skeleton className="aspect-square" />
          <Skeleton className="aspect-square" />
        </div>
      </div>
      <div className="space-y-4 pt-4">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-12 w-48" />
      </div>
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="aspect-square" />
      ))}
    </div>
  );
}
