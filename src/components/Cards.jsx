import { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { setProdutData } from "../app/services/productSlice";
import SkeletonCard from "./SkeletonCard";
import LoadMoreButton from "./LoadMoreButton";

const Cards = ({ data, isLoading, error }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const [selectedProduct, setSelectedProduct] = useState(0);
  useEffect(() => {
    if (data && data.products) {
      dispatch(setProdutData(data.products));
    }
    if (error) {
      dispatch(setProdutData([]));
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);


  return (
    <div  id="Products" className="w-11/12 py-4">
      <h1 className="sm:text-4xl xs:text-3xl text-slate-50 font-bold pb-10">
        المنتجات
      </h1>

      <div className=" grid grid-cols-1 mb-12 sm:gap-x-4 xs:gap-x-2 md:gap-y-8 sm:gap-y-6 xs:gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xs:grid-cols-2 xl:gap-x-4">
        {isLoading ? (
          <SkeletonCard />
        ) : error ? (
          <div className="text-center text-2xl text-red-500 col-span-full flex items-center justify-center">
            <p>لا يوجد</p>
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
      {data && data.has_next ? <LoadMoreButton /> : null}
    </div>
  );
};

export default Cards;
