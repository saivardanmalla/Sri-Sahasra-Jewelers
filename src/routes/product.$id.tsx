import { createFileRoute, Link } from "@tanstack/react-router";
import { Share2 } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetailsSkeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { WishlistButton } from "@/components/WishlistButton";
import { getProduct, relatedProducts } from "@/data/catalogue";
import { signatureCollections } from "@/data/catalogue";
import { useUI } from "@/store/ui";

export const Route = createFileRoute("/product/$id")({
  pendingComponent: ProductDetailsSkeleton,
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const product = getProduct(id);
  const openEnquiry = useUI((s) => s.openEnquiry);

  if (!product) {
    return (
      <div className="container-luxe py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl">This piece has gone missing.</h1>
        <Button className="mt-8" asChild>
          <Link to="/jewellery">Back to catalogue</Link>
        </Button>
      </div>
    );
  }

  const collection = signatureCollections.find((c) => c.id === product.collection);
  const related = relatedProducts(product);
  const shareTitle = product.name;

  async function share() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: shareTitle, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      /* cancelled */
    }
  }

  return (
    <article className="container-luxe grid gap-12 py-12 lg:grid-cols-2 lg:py-16">
      <ProductGallery images={product.images} name={product.name} />
      <div>
        <p className="eyebrow">
          {product.type} · Demo
        </p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{product.name}</h1>
        <p className="mt-3 text-sm text-muted">{product.purity}</p>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-fg/80">{product.description}</p>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-6 text-sm">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Material</dt>
            <dd className="mt-1">{product.metal}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Purity</dt>
            <dd className="mt-1">{product.purity}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Weight</dt>
            <dd className="mt-1">{product.weight} (demo)</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Collection</dt>
            <dd className="mt-1">{collection?.name ?? product.collection}</dd>
          </div>
        </dl>

        <p className="mt-6 font-serif text-2xl">Enquire for Price</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button onClick={() => openEnquiry({ productId: product.id, productName: product.name })}>
            Enquire Now
          </Button>
          <Button variant="outline" onClick={() => openEnquiry({ productId: product.id, productName: product.name })}>
            WhatsApp
          </Button>
          <WishlistButton id={product.id} />
          <button
            type="button"
            onClick={share}
            className="inline-flex size-11 items-center justify-center border border-border hover:border-gold"
            aria-label="Share this jewellery"
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <div className="lg:col-span-2 mt-8">
          <h2 className="font-serif text-3xl">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
