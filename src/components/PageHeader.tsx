import { Reveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="container-luxe pb-12 pt-16 sm:pt-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p>}
      </Reveal>
    </header>
  );
}
