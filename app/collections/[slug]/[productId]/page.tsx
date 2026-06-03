import { notFound } from "next/navigation";
import { collections } from "@/app/collections/[slug]/page";
import ProductGallery from "@/components/ProductGallery";

export function generateStaticParams() {
  return collections.flatMap((c) =>
    c.products.map((p) => ({ slug: c.slug, productId: p.id }))
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; productId: string }>;
}) {
  const { slug, productId } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();
  const product = collection.products.find((p) => p.id === productId);
  if (!product) notFound();
  return <ProductGallery product={product} collection={collection} />;
}
