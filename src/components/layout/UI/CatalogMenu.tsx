import { Link } from "react-router-dom";
import { categories } from "../../../data/categories";

interface CatalogMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CatalogMenu({ isOpen, onClose }: CatalogMenuProps) {

    return (
        <>
          <div onClick ={onClose} className={`fixed inset-0 top-[60px] bg-black/30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        />

          <div className={`absolute top-full left-0 w-full bg-white border-t shadow-lg z-50
        transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}
      >
           <div className="max-w-[1550px] mx-auto flex">
                <ul className="w-72 shrink-0 border-r p-2">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <li key = {category.id}>
                            <Link
                              to={category.path}
                              onClick={onClose}
                              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-sm"
                              >
                              <Icon size={20} className="text-gray-600" />
                              <span className="text-black">{category.name}</span>
                            </Link>
                        </li>
                      );
                    })}
                </ul>
             </div>
            </div>
        </>
    );
}