import { Link } from "react-router-dom";
import type { Product } from "../../Product/ProductCard";

interface SearchSuggestionsProps {
    suggestions: Product[];
    onSelect: () => void;
}

export default function SearchSuggestions({suggestions, onSelect}: SearchSuggestionsProps) {
    if (suggestions.length === 0) return null;

    return (
        <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg z-50 mt-1">
            <ul>
                {suggestions.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}
                        onClick={onSelect}
                        className="flex items-center gap-3 p-3 hover:bg-gray-100"
                        >
                        <img src={product.image} alt={product.name} className="w-10 h-10 object-contain" />
                        <span className="text-sm text-gray-800 line-clamp-1">{product.name}</span>
                        <span className="ml-auto text-red-600 font-semibold text-sm">{product.price} ₴</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}