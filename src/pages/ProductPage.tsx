import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../data/product";


export default function ProductPage() {
    const { productId } = useParams();
    const product = allProducts.find((p) => p.id === Number(productId));

    const [activeTab, setActiveTab] = useState<"about" | "specs" > ("about");

    const opisRef = useRef<HTMLDivElement>(null);
    const specsRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start"})
    };

    if (!product) {
        return <div className="p-4">Товар не знайдено</div>
    }


    return (
        <div className="p-4 max-w-[1550px] mx-auto shadow-sm bg-gray-100">
            <div className="flex gap-6 border-b mb-4 ">
                <button
                onClick={() => setActiveTab("about")}
                className={`text-black pb-2 px-1 shadow-sm font-medium ${activeTab === "about"
                ? "border-b-2 border-green-600 text-green-600" : "text-grey-500"}`}> Про товар </button>

                <button
                onClick={() => setActiveTab("specs")}
                className={` text-black pb-2 px-1 font-medium ${activeTab === "specs"
                ? "border-b-2 border-green-600 text-green-600" : "text-grey-500"}`}> Характеристики </button>
            </div>



            <div className="flex gap-8 shadow-sm">
              <img src={product.image} alt={product.name} className="w-96 h-96 object-contain shadow-md"/>
              <div>
                <h1 className="text-2x1 font-bold mb-4 text-black ">{product.name}</h1>
                {activeTab === "about" && (
                    <p className="text-gray-700 font-bold ">{product.description}</p>
                )}
                {activeTab === "specs" && (
                    <ul className="divide-y">
                        {product.specs?.map((spec) => (
                            <li key={spec.label} className="flex justify-between py-2">
                                <span className="text-gray-700">{spec.label}: </span>
                                <span className="font-medium text-gray-700 ml-2">{spec.value}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <p className="text-red-600 font-bold text-2xl mt-6">{product.price} ₴</p>
                <button className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
                    Купити </button>
              </div>
            </div>


            <div className="flex gap-4 mt-10 border-t pt-4">
                <button
                onClick = {() => scrollTo(opisRef)}
                className="flex-1 border rounded-lg py-y font-medium  text-black hover: bg-grey-50">
                    Про товар ↓
                </button>

                    <button
                onClick = {() => scrollTo(specsRef)}
                className="flex-1 border rounded-lg py-y font-medium  text-black hover: bg-grey-50">
                    Характеристики ↓
                </button>
            </div>

            <div ref={opisRef} className="mt-8 border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-3 text-black">Опис</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div ref={specsRef} className="mt-6 border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-3 text-black">Характеристики</h2>
                  <ul className="divide-y">
                    {product.specs?.map((spec) => (
                      <li key={spec.label} className="flex justify-between py-2">
                        <span className="text-gray-700">{spec.label}: </span>
                        <span className="font-medium text-gray-700 ml-2">{spec.value}</span>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}   