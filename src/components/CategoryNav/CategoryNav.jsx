import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Category from "./Category";
import SubCategory from "./SubCategory";

function CategoryNav() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

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
        <div className="py-3">
          <h1 className="sm:text-4xl xs:text-3xl text-slate-50 font-bold py-5">
            الاقسام
          </h1>
        </div>

        <div className="font-medium text-center text-[#9C3D54] border-b border-[#322717] ">
          <Category selectedCategory={selectedCategory} />
        </div>

        {/* Conditional rendering */}
        {selectedCategory !== null && !isNaN(selectedCategory) ? (
          <SubCategory
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
          />
        ) : null}
      </div>
    </>
  );
}

export default CategoryNav;
