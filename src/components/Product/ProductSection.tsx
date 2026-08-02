import ProductCard, { type Product } from "./ProductCard";


interface ProductSectionProps {
  title: string;
  products: Product[];
  linkText?: string;
}

export default function ProductSection({title, products, linkText }: ProductSectionProps) {
    return (
        <section className="p-4 border rounded-lg bg-white">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                {linkText && (
                    <a className="text-sm text-blue-600 hover:underline" href="#">
                        {linkText} →
                    </a>
                )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {products.map((product) => (
                    <ProductCard key = {product.id} product = {product} />
                ))}
            </div>
        </section>
    )
}