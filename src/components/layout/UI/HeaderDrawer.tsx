import { X, HelpCircle, ShoppingCart, Heart, Scale } from 'lucide-react';
import logo from "../../../assets/ROZETKA-Logo-L3-B-RGB.png";
interface HeaderDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HeaderDrawer({ isOpen, onClose } : HeaderDrawerProps) {
    return(
        <>
            <div onClick={onClose}
             className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300
                         ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}

            />

            <aside className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50
                              transform transition-transform duration-300 ease-in-out
                              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

          <div className="flex items-center justify-between p-2 border-b bg-gray-700">
            <img className='h-10 w-50'
             src={logo} alt="#" />
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <X size={15} />
          </button>
        </div>

        <nav className='flex text-black'>
            <ul>
                <li>
                    <button className='w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left hover:text-green-500'>
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 shrink-0 ">
                            <HelpCircle size={25} className="hover:text-green-500" />
                        </span>
                        <span className="font-medium">Довідковий центр</span>
                    </button>
                </li>
                <li>
                    <div>
                        <h1 className=''
                        >Увійдіть, щоб отримувати рекомендації, персональні бонуси і знижки.</h1>
                        <button className=''
                        >Увійдіть в особистий кабінет</button>
                    </div>
                </li>

                <li>
                     <button className='w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left hover:text-green-500'>
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 shrink-0 ">
                            <ShoppingCart size={25} className="hover:text-green-500" />
                        </span>
                        <span>Кошик</span>
                    </button>
                </li>

                <li>
                    <button className='w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left hover:text-green-500'>
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 shrink-0 ">
                            <Heart size={25} className="hover:text-green-500" />
                        </span>
                        <span>Список бажань</span>
                    </button>
                </li>

                <li>
                    <button className='w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left hover:text-green-500'>
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 shrink-0 ">
                            <Scale size={25} className="hover:text-green-500" />
                        </span>
                        <span>Списки порівнянь</span>
                    </button>
                </li>
            </ul>
        </nav>

             </aside>     
        </>
    )
}

