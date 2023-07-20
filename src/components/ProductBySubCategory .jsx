import { useParams } from "react-router-dom";
import { useGetProductBySubCategoryQuery } from "../app/services/productApi";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const ProductBySubCategory = () => {
  const { id } = useParams();
  const { page } = useSelector((state) => state.page);
  const { data, isLoading, error, isFetching } =
    useGetProductBySubCategoryQuery({
      id,
      page,
    });

  return (
    <Cards
      data={data}
      isLoading={isLoading}
      error={error}
      isFetching={isFetching}
    />
  );
};

export default ProductBySubCategory;
