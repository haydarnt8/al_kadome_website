import Slider from "./components/Slider";
import CategoryNav from "./components/CategoryNav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./components/AllProduct";
import ProductByCategory from "./components/ProductByCategory";
import ProductBySubCategory from "./components/ProductBySubCategory ";
import ProductBySearch from "./components/ProductBySearch";

function App() {
  return (
    <main className="bg-[#0f0f0f] flex flex-col items-center  ">
      <Slider />
      <Header />
      <CategoryNav />
      <Routes>
        <Route path="al_kadome_website/" element={<AllProduct />} />
        <Route path="al_kadome_website/cid/:id" element={<ProductByCategory />}  />
        <Route path="al_kadome_website/cid/:id/s_cid/:id" element={<ProductBySubCategory />} />
        <Route path="al_kadome_website/search/:title" element={<ProductBySearch />} />
      </Routes>
      <Footer />

    </main>
  );
}

export default App;
