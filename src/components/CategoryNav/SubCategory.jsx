import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPage } from "../../app/services/pageSlice";
import { resetProducts } from "../../app/services/productSlice";
import SkeletonCategory from "./SkeletonCategory";
import { MdClear } from "react-icons/md";
import { useGetSubCategoryQuery } from "../../app/services/productApi";

const SubCategory = ({
  selectedCategory,
  selectedSubCategory,
}) => {
  const dispatch = useDispatch();
  const {
    data: subCategory,
    isLoading: subIsLoading,
    error: subError,
  } = useGetSubCategoryQuery(selectedCategory);
  return (
    <ul className="flex flex-wrap gap-4 py-4 sm:text-lg xs:text-base">
      {subIsLoading ? (
        <>
          <SkeletonCategory />
          <SkeletonCategory />
        </>
      ) : subError ? (
        <div className="text-center text-2xl text-red-500">
          {subError.message}
        </div>
      ) : (
        subCategory.map((subCategory) => (
          <li key={subCategory.id}>
            <Link
              to={
                selectedSubCategory === subCategory.id
                  ? `/cid/${selectedCategory}`
                  : `/cid/${selectedCategory}/s_cid/${subCategory.id}`
              }
            >
              <button
                className={`px-4 py-2 flex items-center gap-1 text-base rounded-lg transition border-[#522815] text-slate-50 border  ${
                  selectedSubCategory === subCategory.id
                    ? "bg-[#070402]"
                    : "bg-[#3227172b]"
                }`}
                onClick={() => {
                  dispatch(resetPage());
                  dispatch(resetProducts());
                }}
              >
                {subCategory.name}
                {selectedSubCategory === subCategory.id && <MdClear />}
              </button>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default SubCategory;
