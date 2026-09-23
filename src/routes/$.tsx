import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mark } from "@/components/Logo";

export const Route = createFileRoute("/$")({ component: NotFound });

function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative container-luxe flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <Mark className="mb-6 size-14" />
        <p className="font-serif text-7xl text-gold-deep">404</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">This page has gone missing.</h1>
        <p className="mt-4 max-w-md text-sm text-muted">
          Let’s get you back to Sri Sahasra Jewellers.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/">Back Home</Link>
        </Button>
      </div>
    </section>
  );
}
