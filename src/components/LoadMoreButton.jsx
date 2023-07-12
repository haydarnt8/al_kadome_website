import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../app/services/pageSlice";

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full my-16 flex justify-center items-center relative">
      <hr className="w-full border-[#322717]" />
      <button
        onClick={() => dispatch(setPage())}
        className="absolute py-2 px-4 bg-[#070402] hover:bg-[#2b180c] rounded-sm text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md  "
      >
        المزيد
      </button>
    </div>
  );
};

export default LoadMoreButton;
