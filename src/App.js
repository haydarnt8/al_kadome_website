import About from "./components/Header/About";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./components/Product/AllProduct";
import ProductByCategory from "./components/Product/ProductByCategory";
import ProductBySubCategory from "./components/Product/ProductBySubCategory";
import ProductBySearch from "./components/Product/ProductBySearch";

function App() {

  return (
    <main className="bg-[#0f0f0f] flex flex-col items-center  ">
      <About />
      <Header />
      <CategoryNav />
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/cid/:id" element={<ProductByCategory />} />
        <Route path="/cid/:id/s_cid/:id" element={<ProductBySubCategory />} />
        <Route path="/search/:title" element={<ProductBySearch />} />
      </Routes>
      <Footer />

    </main>
  );
}

export default App;
