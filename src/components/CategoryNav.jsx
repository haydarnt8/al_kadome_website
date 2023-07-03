import { useState } from "react";
import {
  useGetCategoryQuery,
  useGetSubCategoryQuery,
} from "../app/services/productApi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPage } from "../app/services/pageSlice";
import { resetProducts } from "../app/services/productSlice";

function CategoryNav() {
  const location = useLocation();
  const dispatch = useDispatch();
  const cid = parseInt(location.pathname.split("/")[3]);
  const s_cid = parseInt(location.pathname.split("/")[5]);
  const [selectedCategory, setSelectedCategory] = useState(cid);
  const [selectedSubCategory, setSelectedSubCategory] = useState(s_cid);
  const { data: category, isLoading, error } = useGetCategoryQuery();
  const {
    data: subCategory,
    isLoading: subIsLoading,
    error: subError,
  } = useGetSubCategoryQuery(selectedCategory);
  // {// const {
  // //   data: categoryData,
  // //   isLoading: productIsLoading,
  // //   error: productError,
  // // } = useGetProductByCategoryQuery(selectedCategory);
  // // const {
  // //   data: subData,
  // //   isLoading: subProductIsLoading,
  // //   error: subProductError,
  // // } = useGetProductBySubCategoryQuery(selectedSubCategory);

  // // const handleCategoryClick = async (cid) => {
  // //   setSelectedCategory(cid);
  // //   console.log(selectedCategory);
  // //   await categoryData;
  // //   console.log(productIsLoading);
  // //   console.log(categoryData.products);
  // //   console.log(
  // //     "categoryData.productscategoryData.productscategoryData.products"
  // //   );
  // // };

  // // const handleSubCategoryClick = (s_cid) => {
  // //   if (subData && subData.products) {
  // //     setSelectedSubCategory(s_cid);
  // //     dispatch(setProdutData(subData.products));
  // //     console.log(subData.products);
  // //   }
  // // };
  // }
  // console.log(selectedCategory + "selectedCategory");
  // console.log(selectedSubCategory + "selectedSubCategory");

  return (
    <>
      {isLoading ? (
        <p>loding...</p>
      ) : error ? (
        <div className="text-center text-2xl text-red-500">{error.message}</div>
      ) : (
        <div id="Category" className="w-11/12">
          <div className=" py-3">
            <h1 className="text-4xl text-right text-slate-50 font-bold py-5 ">
              الاقسام
            </h1>
          </div>

          <div className=" font-medium text-center text-[#9C3D54] border-b border-[#E2703A] ">
            <ul className="flex flex-row-reverse flex-wrap  gap-2 -mb-px text-xl">
              {category.map((category) =>  (
                <li key={category.id}>
                  <Link to={`al_kadome_website/cid/${category.id}`}>
                    <button
                      className={`inline-block p-4 border-b-2 border-transparent transition rounded-t-lg hover:text-[#E2703A] hover:border-gray-300 ${
                        selectedCategory === category.id
                          ? "text-slate-50 border-slate-50"
                          : "text-gray-600 border-transparent"
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        dispatch(resetPage());
                        dispatch(resetProducts());

                      }}
                    >
                      {category.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-row-reverse gap-4 py-4 text-lg">
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
                    to={`al_kadome_website/cid/${selectedCategory}/s_cid/${subCategory.id}`}
                  >
                    <button
                      className={`px-4 py-2  text-base rounded-lg transition text-slate-50 border border-[#E2703A] bg-[#9C3D54] hover:bg-[#c16179]  ${
                        selectedSubCategory === subCategory.id
                          ? "bg-[#E2703A] text-slate-50 border-[#E2703A]"
                          : "bg-[#9C3D54] text-slate-50 border-[#E2703A]"
                      }`}
                      onClick={() => {
                        setSelectedSubCategory(subCategory.id);
                        dispatch(resetPage());
                        dispatch(resetProducts());
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
      )}
    </>
  );
}

export default CategoryNav;
