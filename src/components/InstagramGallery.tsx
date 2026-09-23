import { Instagram } from "lucide-react";
import { galleryImages } from "@/data/catalogue";
import { SITE } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function InstagramGallery() {
  return (
    <section className="py-24">
      <div className="container-luxe mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <p className="eyebrow">Follow Our Jewellery Stories</p>
          <h2 className="mt-3 font-serif text-4xl">From the atelier</h2>
        </Reveal>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] uppercase tracking-[0.22em] text-gold-deep"
        >
          Instagram (placeholder)
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {galleryImages.map((src, i) => (
          <a
            key={src + i}
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-fg/0 opacity-0 transition-[opacity,background-color] duration-300 group-hover:bg-fg/40 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 bg-bg px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-fg">
                <Instagram size={14} /> View
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
