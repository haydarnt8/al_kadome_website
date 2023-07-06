import { useEffect, useState } from "react";
import {
  useGetCategoryQuery,
  useGetSubCategoryQuery,
} from "../app/services/productApi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPage } from "../app/services/pageSlice";
import { resetProducts } from "../app/services/productSlice";
import SkeletonCategory from "./SkeletonCategory";

function CategoryNav() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const { data: category, isLoading, error } = useGetCategoryQuery();
  const {
    data: subCategory,
    isLoading: subIsLoading,
    error: subError,
  } = useGetSubCategoryQuery(selectedCategory);

  useEffect(() => {
    
    // Splitting the pathname by '/'
    const pathParts = location.pathname.split("/");

    // Finding the indices of 'cid' and 's_cid'
    const cidIndex = pathParts.indexOf("cid");
    const sCidIndex = pathParts.indexOf("s_cid");

    setSelectedCategory(parseInt(pathParts[cidIndex + 1]));
    setSelectedSubCategory(parseInt(pathParts[sCidIndex + 1]));
  }, [location, selectedCategory, selectedSubCategory]);

  return (
    <>
      <div id="Category" className="w-11/12">
        <div className=" py-3">
          <h1 className="text-4xl text-slate-50 font-bold py-5 ">الاقسام</h1>
        </div>

        <div className=" font-medium text-center text-[#9C3D54] border-b border-[#E2703A] ">
          <ul className="flex flex-wrap  gap-2 -mb-px text-xl">
            {isLoading ? (
              <>
                <SkeletonCategory />
                <SkeletonCategory />
                <SkeletonCategory />
                <SkeletonCategory />
              </>
            ) : error ? (
              <div className="text-center text-2xl text-red-500">
                {error.message}
              </div>
            ) : (
              category.map((category) => (
                <li key={category.id}>
                  <Link
                    to={
                      selectedCategory === category.id
                        ? "al_kadome_website/"
                        : `al_kadome_website/cid/${category.id}`
                    }
                  >
                    <button
                      className={`inline-block p-4 border-b-2 border-transparent transition rounded-t-lg hover:text-[#E2703A] hover:border-gray-300 ${
                        selectedCategory === category.id
                          ? "text-slate-50 border-slate-50"
                          : "text-gray-600 border-transparent"
                      }`}
                      onClick={() => {
                        dispatch(resetPage());
                        dispatch(resetProducts());
                        console.log("clicked category");
                      }}
                    >
                      {category.name}
                    </button>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
        <ul className="flex gap-4 py-4 text-lg">
          {subIsLoading ? (
            <p>loding...</p>
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
                      ? `al_kadome_website/cid/${selectedCategory}`
                      : `al_kadome_website/cid/${selectedCategory}/s_cid/${subCategory.id}`
                  }
                >
                  <button
                    className={`px-4 py-2  text-base rounded-lg transition bg-[#9C3D54] border-[#E2703A] text-slate-50 border hover:bg-[#c16179]  ${
                      selectedSubCategory === subCategory.id
                        ? "bg-[#E2703A]"
                        : ""
                    }`}
                    onClick={() => {
                      dispatch(resetPage());
                      dispatch(resetProducts());
                      console.log("clicked sub category");
                    }}
                  >
                    {subCategory.name}
                  </button>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
      )
    </>
  );
}

export default CategoryNav;
