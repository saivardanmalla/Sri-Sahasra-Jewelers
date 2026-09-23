import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const src = images[active] ?? images[0];

  return (
    <div>
      <div className="group relative overflow-hidden bg-cream">
        <img
          src={src}
          alt={name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 bg-bg/90 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-muted">
          Demo
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.slice(0, 4).map((img, i) => (
          <button
            key={img + i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            aria-current={active === i}
            className={cn(
              "overflow-hidden border bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
              active === i ? "border-gold" : "border-transparent",
            )}
          >
            <img src={img} alt="" className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
