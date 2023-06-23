import React from "react";
import logo from "../image/download.avif";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 items-center w-full h-16 shadow-lg bg-[#9C3D54]">
      <div className="relative z-20 flex flex-col justify-center mx-auto w-11/12 h-full flex-center">
        <div className="relative flex justify-between items-center w-full ">
          <div className="container relative left-0 z-50 flex w-3/4 h-full">
            <div className="relative flex items-center w-full h-full lg:w-96 xs:w-5/6 group">
              <div className="absolute z-50 flex items-center justify-center  w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                <svg
                  className="relative w-5 h-5 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
              <svg
                className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"

                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
              <input
                type="text"
                className="block text-right w-full py-1.5 pl-10 pr-4  leading-normal border border-[#ffffff41] rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#30131a] ring-opacity-90 bg-[#210707] text-gray-400 "
                placeholder="بحث"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-end gap-2  ">
            <div className="flex flex-col justify-center items-end">
              <p>معرض</p>
              <p>الكاظمي</p>
            </div>
            <div className="relative block">
              <img
                alt="profil"
                src={logo}
                className="mx-auto object-cover rounded-full h-12 w-12 "
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
