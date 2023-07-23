import { useGetCategoryQuery } from "../app/services/productApi";
import { useDispatch } from "react-redux";
import { resetPage } from "../app/services/pageSlice";
import { resetProducts } from "../app/services/productSlice";
import SkeletonCategory from "./SkeletonCategory";
import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";

const Category = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const { data: category, isLoading, error } = useGetCategoryQuery();

  return (
    <ul className="flex flex-wrap gap-2 -mb-px sm:text-xl xs:text-lg ">
      {isLoading ? (
        <>
          <SkeletonCategory />
          <SkeletonCategory />
          <SkeletonCategory />
          <SkeletonCategory />
        </>
      ) : error ? (
        <div className="text-center text-2xl text-red-500">{error.message}</div>
      ) : (
        category.map((category) => (
          <li key={category.id}>
            <Link
              to={
                selectedCategory === category.id ? "/" : `/cid/${category.id}`
              }
            >
              <button
                className={`flex items-center gap-1 p-2 border-b-2 border-transparent transition rounded-t-lg hover:border-gray-300 ${
                  selectedCategory === category.id
                    ? "text-slate-50 border-slate-50"
                    : "text-gray-500 border-transparent"
                }`}
                onClick={() => {
                  dispatch(resetPage());
                  dispatch(resetProducts());
                }}
              >
                {category.name}
                {selectedCategory === category.id && <MdClear />}
              </button>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default Category;
