interface Props {
  label: string;
  className?: string;
  ratio?: string; // tailwind aspect class
}

/**
 * Elegant placeholder used until the store provides real photography.
 * Renders a warm gradient tile with the product's monogram + a DEMO tag.
 */
export default function DemoImage({ label, className = "", ratio = "aspect-[4/5]" }: Props) {
  const monogram = label
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-champagne via-beige to-champagne/70 ${ratio} ${className}`}
    >
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,#fff,transparent_55%)]" />
      <span className="font-serif text-5xl text-gold-deep/40 sm:text-6xl">{monogram}</span>
      <span className="absolute bottom-3 right-3 rounded-sm bg-charcoal/70 px-2 py-0.5 text-[9px] uppercase tracking-widest text-ivory/90">
        Demo Image
      </span>
    </div>
  );
}
