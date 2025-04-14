import ProductList from "@/components/shared/product/ProductList";
import sampleData from "@/db/sample-data";

export default function Home() {
  return (
    <>
      <ProductList data={sampleData.products} title="new Arriving" />
    </>
  );
}
