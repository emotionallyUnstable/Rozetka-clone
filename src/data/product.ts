import { type Product } from "../components/Product/ProductCard";

import asus from "../assets/Goods/Laptops&computers/asus1.webp";
import hp from "../assets/Goods/Laptops&computers/hp1.webp";
import msi from "../assets/Goods/Laptops&computers/msi1.webp";

import  lamp1  from "../assets/Goods/HomeGoods/lamp1.webp";
import pillow from "../assets/Goods/HomeGoods/MirSon1.webp"
import chair from "../assets/Goods/HomeGoods/Special4You1.webp"
import mattress from "../assets/Goods/HomeGoods/SUNRISE1.webp"

import iphone13 from "../assets/Goods/Smartphones-TVs-Electronics/iphone13-1.webp"
import iphone17 from "../assets/Goods/Smartphones-TVs-Electronics/iphone17-1.webp"
import redmi from "../assets/Goods/Smartphones-TVs-Electronics/redmi1.webp"

import PlayStation5 from "../assets/Goods/Products-for-gamers/PlayStation 5-1.webp";
import playStation5slim from "../assets/Goods/Products-for-gamers/playstation-slim5-1.webp"
import gameStick from "../assets/Goods/Products-for-gamers/Game Stick M15-1.webp"

import AEG from "../assets/Goods/HomeAppliances/AEG1.webp"
import air_conditioner from "../assets/Goods/HomeAppliances/Cooper&Hunter1.webp"
import fridge from "../assets/Goods/HomeAppliances/LG GC-B509ETTM-1.webp"


export const allProducts: Product[] =[
  { id: 1, name: "Ноутбук ASUS 16 Vivobook 16 M1607KA-MB143 FHD IPS/Ryzen 5 AI 330/16GB/512SSD/UMA/DOS/Quiet Blue", image:asus, price:39054, hasFreeDelivery: true, category: "laptops" },
  { id: 2, name: "Ноутбук HP OmniBook 3 Laptop 16-by0025ua (D4NY2EA) Glacier Silver / 16 IPS WUXGA / AMD Ryzen 5 130 / RAM 24 ГБ / SSD 512 ГБ / Підсвітка клавіатури", image:hp, price:30999, hasFreeDelivery: true, category: "laptops" },
  { id: 3, name: "Ноутбук MSI Thin 15 B13UC (B13UC-3447XUA) Cosmos Gray / 15.6 IPS 144 Гц / Intel Core i5-13420H / RAM 16 ГБ / SSD 512 ГБ / RTX 3050, 4 ГБ / LAN", image:msi, price:39999, category: "laptops" },
  /// HomeGoods
  { id: 4, name: "Розумна акумуляторна лампочка 30В, 6500K, Аварійна лампа в патрон Е27, LED енергозберігаюча лампочка + 3 акумулятори, Біла", image: lamp1, price: 795, hasFreeDelivery: true, category: "home-goods" },
  { id: 5, name: "Набір антиалергенних подушок MirSon №1801 білі Eco Fusion прямокутні 50х70 см х 2 шт ", image: pillow, price:520, category: "home-goods" },
  { id: 6, name: "Крісло Special4You Riko Black/grey", image: chair, price:4799, hasFreeDelivery: true, category: "home-goods" },
  { id: 7, name: "Ортопедичний матрац ТИША SUNRISE 160x200", image: mattress, price:6425, hasFreeDelivery: true, category: "home-goods" },
  /// Smartphone,TV,Electronics
  { id: 8, name: "Мобільний телефон Apple iPhone 13 Pro 256GB Graphite (REF B) Ємність батареї – 90%", image: iphone13, price:25839, hasFreeDelivery: true, category: "electronics" },
  { id: 9, name: "Мобільний телефон Apple iPhone 17 Pro 256GB Silver", image: iphone17, price:61999, hasFreeDelivery: true, category: "electronics" },
  { id: 10, name:"Мобільний телефон Xiaomi Redmi Note 15 Pro 8/256GB Black", image: redmi, price:13999, hasFreeDelivery: true, category: "electronics" },
  /// Product4gamers
  { id: 11, name: "Ігрова консоль Sony PlayStation 5 Pro 2Tb + Дисковод (Blue-ray привід)", image:PlayStation5, price: 57199, hasFreeDelivery: true, category: "gaming" },
  { id: 12, name: "Ігрова приставка Sony PlayStation 5 Slim Digital Edition", image: playStation5slim, price:31999, hasFreeDelivery: true, category: "gaming" },
  { id: 13, name: "Ігрова приставка для телевізора Game Stick M15 Консоль з іграми та бездротовими джойстиками", image: gameStick, price:1100, hasFreeDelivery: true, category: "gaming" },
  /// HomeAppliences
  { id: 14, name:"Пральна машина вузька AEG ", image: AEG, price:14999, hasFreeDelivery: true, category: "appliances" },
  { id: 15, name:"Кондиціонер Cooper&Hunter", image: air_conditioner, price:22899, hasFreeDelivery: true, category: "appliances" },
  { id: 16, name:"Двокамерний холодильник LG", image: fridge, price:28799, hasFreeDelivery: true, category: "appliances" },
]