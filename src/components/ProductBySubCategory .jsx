import { useParams } from "react-router-dom";
import { useGetProductBySubCategoryQuery } from "../app/services/productApi";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const ProductBySubCategory = () => {
  const { id } = useParams();
  const { page } = useSelector((state) => state.page);
  const { data, isLoading, error } = useGetProductBySubCategoryQuery({
    id,
    page,
  });

  return <Cards data={data} isLoading={isLoading} error={error} />;
};

export default ProductBySubCategory;
