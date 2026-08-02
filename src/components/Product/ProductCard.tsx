import { Heart, ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  hasFreeDelivery?: boolean;
}


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className="relative border rounded-lg p-3 hover:shadow-md transition-shadow bg-white">

          <button className="absolute top-3 right-3 text-gray-400 hover: text-amber-500">
            <Heart />
          </button>
          <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-3" />
          <p className="text-sm text-gray-800 line-clamp-2 mb-2">{product.name}</p>
          <div className="mb-1">
            <span className="text-black font-bold text-lg">{product.price} ₴</span>
          </div>

          <div className="flex items-center justify-between">
            {product.hasFreeDelivery && (
                <span className="text-xs text-green-600">Безкоштовна доставка</span>
            )}
            <button className="ml-auto bg-green-50 text-green-600 p-2 rounded-lg hover:bg-green-100">
                <ShoppingCart />
            </button>
          </div>

        </div>
    )
}