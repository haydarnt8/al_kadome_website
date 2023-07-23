import About from "./components/About";
import CategoryNav from "./components/CategoryNav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllProduct from "./components/AllProduct";
import ProductByCategory from "./components/ProductByCategory";
import ProductBySubCategory from "./components/ProductBySubCategory ";
import ProductBySearch from "./components/ProductBySearch";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
