import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../app/services/pageSlice";

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full my-16 flex justify-center items-center relative">
      <hr className="w-full border-[#E2703A]" />
      <button
        onClick={() => dispatch(setPage())}
        className="absolute py-2 px-4 bg-[#9C3D54] hover:bg-[#c16179] rounded-sm text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
      >
        المزيد
      </button>
    </div>
  );
};

export default LoadMoreButton;
