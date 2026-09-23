import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function EmptyState({
  icon,
  title,
  body,
  actionLabel = "Explore Collections",
  to = "/collections",
}: {
  icon: ReactNode;
  title: string;
  body: string;
  actionLabel?: string;
  to?: "/collections" | "/jewellery";
}) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-6 py-24 text-center">
      <div className="mb-6 text-gold-deep" aria-hidden="true">
        {icon}
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl">{title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">{body}</p>
      <Button className="mt-8" asChild>
        <Link to={to}>{actionLabel}</Link>
      </Button>
    </div>
  );
}
