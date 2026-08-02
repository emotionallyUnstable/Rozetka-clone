import ProductSection from "../components/Product/ProductSection"
import CategorySidebar from "../components/layout/UI/CategorySidebar"

import  lamp1  from "../assets/Goods/HomeGoods/lamp1.webp";
import PlayStation5_1 from "../assets/Goods/Products-for-gamers/PlayStation 5-1.webp"


const bestOffers = [
  ///
  { id: 1, name: "Розумна акумуляторна лампочка 30В, 6500K, Аварійна лампа в патрон Е27, LED енергозберігаюча лампочка + 3 акумулятори, Біла (6981778550)", image: lamp1, price: 795, oldPrice: 635, hasFreeDelivery: true, isAd: true },
  ///
  { id: 2, name: "Ігрова консоль Sony PlayStation 5 Pro 2Tb + Дисковод (Blue-ray привід)", image: PlayStation5_1, price: 57199, oldPrice: 300, hasFreeDelivery: true, isAd: true },
];



export default function Home() {
  return (
    <div className="flex gap-4 p-4 max-w-[1550px] mx-auto">
      <CategorySidebar />
       <div className="flex-1 flex flex-col gap-4">
         <ProductSection title="Найкращі пропозиції для вас" products={bestOffers}  linkText="Всі акції" />
       </div>
    </div>
  )
}
