import { X } from 'lucide-react';
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
                    <button>Довідковий центр</button>
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
                    <button>Кошик</button>
                </li>

                <li>
                    <button>Списки бажань</button>
                </li>

                <li>
                    <button>Списки порівнянь</button>
                </li>
            </ul>
        </nav>

             </aside>     
        </>
    )
}

