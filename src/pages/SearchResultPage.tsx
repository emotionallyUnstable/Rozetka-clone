import { useSearchParams } from "react-router-dom";
import { allProducts } from "../data/product";
import ProductSection from "../components/Product/ProductSection";

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const results = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 max-w-[1550px] mx-auto">
      <ProductSection title={`Результати пошуку: "${query}"`} products={results} />
    </div>
  );
}