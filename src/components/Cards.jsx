import { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../app/services/pageSlice";
import { setProdutData } from "../app/services/productSlice";

const Cards = ({ data, isLoading, error }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.products) {
      dispatch(setProdutData(data.products));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  
const products = useSelector((state) => state.products.data);
console.log(products);
  const handleClick = () => {
    dispatch(setPage());
  };

  const [selectedProduct, setSelectedProduct] = useState(0);
  return (
    <div id="Products" className="w-11/12 py-4">
      <h1 className="text-4xl text-right text-slate-50 font-bold py-10">
        المنتجات
      </h1>

      <div className="grid grid-cols-1 mb-12 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xs:grid-cols-2 xl:gap-x-4">
        {isLoading ? (
          <p className="text-white">loding...</p>
        ) : error ? (
          <div className="text-center text-2xl text-red-500">
            {error.message}
          </div>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          ))
        )}
      </div>
      {data && data.has_next ? (
        <div className="w-full my-10 flex justify-center items-center relative">
          <hr className="w-full" />
          <button
            onClick={handleClick}
            className="absolute py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Cards;
