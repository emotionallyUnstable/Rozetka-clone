import ProductSection from "../components/Product/ProductSection"
import CategorySidebar from "../components/layout/UI/CategorySidebar"
import { allProducts } from "../data/product";


export default function Home() {
  return (
    <div className="flex gap-4 p-4 max-w-[1550px] mx-auto">
      <CategorySidebar />
       <div className="flex-1 flex flex-col gap-4">
         <ProductSection title="Найкращі пропозиції для вас" products={allProducts}  linkText="Всі акції" />
       </div>
    </div>
  )
}
