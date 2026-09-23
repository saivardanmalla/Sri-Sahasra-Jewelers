import { createFileRoute } from "@tanstack/react-router";
import { CollectionCard } from "@/components/CollectionCard";
import { PageHeader } from "@/components/PageHeader";
import { signatureCollections } from "@/data/catalogue";

export const Route = createFileRoute("/collections")({ component: CollectionsPage });

function CollectionsPage() {
  const [first, ...rest] = signatureCollections;
  return (
    <>
      <PageHeader
        eyebrow="Our Collections"
        title="Discover jewellery designed for every meaningful moment."
        subtitle="Four signatures — heritage, bridal, everyday and contemporary. Demonstration looks, ready to be replaced with the store’s own photography."
      />
      <section className="container-luxe pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {first && <CollectionCard collection={first} large />}
          {rest.map((c) => (
            <CollectionCard key={c.id} collection={c} />
          ))}
        </div>
      </section>
    </>
  );
}
