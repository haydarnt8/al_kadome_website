import React from "react";
import { useGetAllProductQuery } from "../../app/services/productApi";
import Cards from "./Cards";
import { useSelector } from "react-redux";

function AllProduct() {
  const { data, isLoading, error, isFetching } = useGetAllProductQuery(
    useSelector((state) => state.page.page)
  );

  return (
    <Cards
      data={data}
      isLoading={isLoading}
      error={error}
      isFetching={isFetching}
    />
  );
}

export default AllProduct;
