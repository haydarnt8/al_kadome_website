import React from "react";
import { BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
    // <footer className=" border-y border-[#9C3D54] w-full py-8">
    //   <div className="max-w-screen-xl px-4 mx-auto">
    //     <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
    //       <li className="my-2">
    //         <a href="#Home" className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
    //           Home
    //         </a>
    //       </li>
    //       <li className="my-2">
    //         <a
    //         href="#Category"
    //         className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
    //           Category
    //         </a>
    //       </li>
    //       <li className="my-2">
    //         <a
    //         href="#Products"
    //         className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
    //           Products
    //         </a>
    //       </li>
    //     </ul>
    //     <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
    //       <div>
    //         <ul>
    //           <li>
    //             <a
    //               href="tel:+201011111111"
    //               className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
    //             >
    //               <svg
    //               width="30"
    //               height="30"
    //               fill="currentColor"
    //               className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
    //               viewBox="0 0 1792 1792"
    //               xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M1408 1216q0 26-19 45t-45 19q-33 0-56-27t-23-61q0-26 19-45t45-19q33 0 56 27t23 61zm-192 0q0-80-56-136t-136-56q-80 0-136 56t-56 136q0 80 56 136t136 56q80 0 136-56t56-136zm-192-384q0 26-19 45t-45 19q-33 0-56-27t-23-61q0-26 19-45t45-19q33 0 56 27t23 61zm640 384v384q0 26-19 45t-45 19q-33 0-56-27t-23-61v-384q0-80-56-136t-136-56h-384q-33 0-56-23t-23-55q0-33 23-56t56-23h384q80 0 136 56t56 136v384q0 33-23 56t-55 23q-33 0-56-23t-23-55zm-1280-768q0-53-37.5-90.5t-90.5-37.5q-53 0-90.5 37.5t-37.5 90.5q0 53 37.5 90.5t90.5 37.5q53 0 90.5-37.5t37.5-90.5zm1408 768q0 159-112.5 271.5t-271.5 112.5h-896q-159 0-271.5-112.5t-112.5-271.5v-896q0-159 112.5-271.5t271.5-112.5h896q159 0 271.5 112.5t112.5 271.5v896z"></path>
    //               </svg>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     <div className="flex justify-end items-center gap-5">
    //             <a
    //               href="https://www.facebook.com/Sajaadjj/"
    //               className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
    //             >
    //               <svg
    //                 width="30"
    //                 height="30"
    //                 fill="currentColor"
    //                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
    //                 viewBox="0 0 1792 1792"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
    //               </svg>
    //             </a>

    //             <a
    //               href="https://www.instagram.com/al_kadome/"
    //               className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
    //             >
    // <svg
    //   width="30"
    //   height="30"
    //   fill="currentColor"
    //   className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
    //   viewBox="0 0 1792 1792"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
    // </svg>
    //             </a>
    //           </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="px-3 py-8 w-full  transition-colors duration-200 text-gray-200">
      <div className="flex flex-col">
        <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
          <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
            <a
              // aria-current="page"
              href="#Home"
              className="hover:text-gray-700 dark:hover:text-white"
            >
              Home
            </a>
            <a
              // aria-current="page"
              href="#Category"
              className="hover:text-gray-700 dark:hover:text-white"
            >
              Category
            </a>
            <a
              // aria-current="page"
              href="#Products"
              className="hover:text-gray-700 dark:hover:text-white"
            >
              Products
            </a>
          </nav>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
          <div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
            <a
              className="hover:text-primary-gray-20"
              href="https://www.facebook.com/Sajaadjj/"
            >
              {/* <span className="sr-only">View on GitHub</span> */}
              <svg
                width="30"
                height="30"
                fill="currentColor"
                className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
            </a>
            <a
              className="ml-4 hover:text-primary-gray-20"
              href="https://www.instagram.com/al_kadome/"
            >
              {/* <span className="sr-only">Settings</span> */}
              <svg
                width="30"
                height="30"
                fill="currentColor"
                className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
          </div>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
          <div className="flex gap-1 flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
            <span className="flex items-center">
              <BiPhone />
              <a
                className=" hover:text-primary-gray-20"
                href="tel:+201010101010"
              >
                +201010101010
              </a>
            </span>
            <span className="flex items-center">
              <BiPhone />
              <a
                className=" hover:text-primary-gray-20"
                href="tel:+201010101010"
              >
                +201010101010
              </a>
            </span>
            <span className="flex items-center">
              <BiPhone />
              <a
                className=" hover:text-primary-gray-20"
                href="tel:+201010101010"
              >
                +201010101010
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
