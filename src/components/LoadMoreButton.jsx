import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../app/services/pageSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadMoreButton = ({ isFetching }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full my-12 flex justify-center items-center relative">
      <hr className="w-full border-[#322717]" />
      <button
        onClick={() => dispatch(setPage())}
        className="absolute py-2 px-4 bg-[#070402] sm:hover:bg-[#2b180c] rounded-sm text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md  "
      >
        {isFetching ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          "المزيد"
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;
