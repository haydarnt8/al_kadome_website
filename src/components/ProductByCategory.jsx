import { useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../app/services/productApi";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

const ProductByCategory = () => {
  const { id } = useParams();
  const { page } = useSelector((state) => state.page);
  const { data, isLoading, error, isFetching } = useGetProductByCategoryQuery({
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

export default ProductByCategory;
