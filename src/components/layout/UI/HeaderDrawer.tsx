
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
                              ${isOpen ? "translate-x-0" : "-translate-x-full"}`} />
{/* 
            <div className="flex items-center justify-between p-4 border-b">
                <span className="font-semibold">Меню</span>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">

                </button>
            </div> */}
                                  
        </>
    )
}

