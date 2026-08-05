import { useParams } from "react-router-dom";
import { allProducts } from "../data/product";
import ProductSection from "../components/Product/ProductSection";

const categoryTitle: Record<string, string> = {
  laptops: "Ноутбуки та комп'ютери",
  electronics: "Смартфони, ТВ і електроніка",
  gaming: "Товари для геймерів",
  appliances: "Побутова техніка",
  "home-goods": "Товари для дому",
}


export default function CategoryPage() {
const { categorySlug } = useParams();

const products = allProducts.filter((product) => product.category === categorySlug);
const title = categoryTitle[categorySlug ?? ""] ?? "Категорія";

    return (
        <div className="p-4 max-w-[1550px] mx-auto">
             <ProductSection title={title} products={products} />
        </div>
    )
}