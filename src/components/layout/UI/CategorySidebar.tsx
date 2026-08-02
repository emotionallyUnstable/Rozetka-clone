import { Link } from "react-router-dom";
import { Laptop, Smartphone, Gamepad2, Home as HomeIcon, Sofa } from "lucide-react";
const categories = [
    {id:1, name:"Ноутбуки та комп'ютери",  icon: Laptop, path:"/category/laptops" },
    {id:2, name:"Смартфон, ТВ і електроніка",  icon: Smartphone, path:"/category/electronics" },
    {id:3, name:"Товари для геймерів",  icon: Gamepad2, path:"/category/gaming" },
    {id:4, name:"Побутова техніка",  icon: HomeIcon , path:"/category/appliances" },
    {id:5, name:"Товари для дому",  icon: Sofa, path:"/category/home-goods" }
]

 export default function CategorySidebar() {
    return (

    <aside className="w-64 shrink-0 bg-white border rounded-lg p-2 h-fit">
        <ul className="text-gray-600">
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                    <li key={category.id}>
                        <Link
                        to ={category.path}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-sm">
                            <Icon className="text-gray-600"/>
                            <span>{category.name}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </aside>
    )
 }