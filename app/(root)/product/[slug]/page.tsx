import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

interface ProductDetailsPageProps {
  params: Promise<{ slug: string }>;
}

async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return <div>{product.name}</div>;
}

export default ProductDetailsPage;
