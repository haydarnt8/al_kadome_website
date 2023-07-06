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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);


  return (
    <div  id="Products" className="w-11/12 py-4">
      <h1 className="text-4xl text-slate-50 font-bold pb-10">
        المنتجات
      </h1>

      <div className=" grid grid-cols-1 mb-12 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xs:grid-cols-2 xl:gap-x-4">
        {isLoading ? (
          <SkeletonCard />
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
      {data && data.has_next ? <LoadMoreButton /> : null}
    </div>
  );
};

export default Cards;
