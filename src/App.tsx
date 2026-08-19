import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage"
import SearchResultsPage from "./pages/SearchResultPage"

function App() {
 
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
