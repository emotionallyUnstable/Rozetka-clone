import { Link } from "react-router-dom";
import { Menu, LayoutGrid, Search, Scale, Heart, ShoppingCart } from "lucide-react";
import  logo  from "../../assets/ROZETKA-Logo-L3-B-RGB.png"

export default function Navbar() {
    return (
     <header className="fixed top-0 left-0 right-0 z-50 border-b bg-gray-700 ">
        <div className="mx-auto px-6 h-15 flex items-center gap-6 max-w-[1550px]">

         <button className="p-2 rounded-lg hover:bg-gray-600">
             <Menu />
         </button>
         <Link to={"/"}
         className=""
         >
         <img className="h-10 w-50"
          src={logo} alt="Rozetka logo" />
         </Link>

         <button className="flex items-center justify-center h-11 w-30 p-1 gap-2 border rounded-lg hover:bg-gray-600">
            <LayoutGrid />
            <h1 className="font-bold">Каталог</h1>
         </button>


         <div className="relative flex-1">
            <input className="p-1 h-11 w-full border rounded-lg bg-white text-gray-500 pl-10"
            type="text" placeholder="Я шукаю..." />

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/>
            

            <button
            type="button"
            className="absolute right-0 top-0 h-11 px-5 bg-accent hover:bg-accent-hover rounded-xl rounded-r-lg">
               <h1 className="font-bold">Знайти</h1>

            </button>
         </div>


          <button className="p-1 hover:bg-gray-600"> <Scale /> </button>

          <button className="p-1 hover:bg-gray-600"> <Heart /> </button>

          <button className="p-1 hover:bg-gray-600"> <ShoppingCart /> </button>
            
        </div>
     </header> 
    )
}