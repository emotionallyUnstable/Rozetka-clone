import { Laptop, Smartphone, Gamepad2, Home as HomeIcon, Sofa } from "lucide-react";
import type { LucideIcon } from "lucide-react";


export interface Category {
    id:number;
    name: string;
    icon: LucideIcon;
    path: string;
}

export const categories: Category[] = [
  { id: 1, name: "Ноутбуки та комп'ютери", icon: Laptop, path: "/category/laptops" },
  { id: 2, name: "Смартфони, ТВ і електроніка", icon: Smartphone, path: "/category/electronics" },
  { id: 3, name: "Товари для геймерів", icon: Gamepad2, path: "/category/gaming" },
  { id: 4, name: "Побутова техніка", icon: HomeIcon, path: "/category/appliances" },
  { id: 5, name: "Товари для дому", icon: Sofa, path: "/category/home-goods" },
]