import React from "react";
import { useGetAllProductQuery } from "../app/services/productApi";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";

function AllProduct() {
  const { data, isLoading, error } = useGetAllProductQuery(
    useSelector((state) => state.page.page)
  );
  return <Cards data={data} isLoading={isLoading} error={error} />;
}

export default AllProduct;
