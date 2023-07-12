import React from "react";
import styles from "./Card.module.css";
import "./animation.css";

const SkeletonCard = () => {
  return (
    <>
      <div className={`group p-2 ${styles.card}`}>
        <div className="overflow-hidden aspect-square rounded-lg bg-gray-200 w-full xl:aspect-h-8 xl:aspect-w-7">
          <div className="flex items-center justify-center w-full h-full rounded  bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-11/12 mt-4">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
          </div>
          <div className="text-white flex gap-1 items-center mt-1 text-lg font-medium sm:text-base xs:text-sm">
            <div className="w-8/12">
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`group p-2 ${styles.card}`}>
        <div className="overflow-hidden aspect-square rounded-lg bg-gray-200 w-full xl:aspect-h-8 xl:aspect-w-7">
          <div className="flex items-center justify-center w-full h-full rounded  bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-11/12 mt-4">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <div className="text-white flex gap-1 items-center mt-1 text-lg font-medium sm:text-base xs:text-sm">
            <div className="w-40">
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`group p-2 ${styles.card}`}>
        <div className="overflow-hidden aspect-square rounded-lg bg-gray-200 w-full xl:aspect-h-8 xl:aspect-w-7">
          <div className="flex items-center justify-center w-full h-full rounded  bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-11/12 mt-4">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <div className="text-white flex gap-1 items-center mt-1 text-lg font-medium sm:text-base xs:text-sm">
            <div className="w-40">
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`group p-2 ${styles.card}`}>
        <div className="overflow-hidden aspect-square rounded-lg bg-gray-200 w-full xl:aspect-h-8 xl:aspect-w-7">
          <div className="flex items-center justify-center w-full h-full rounded  bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-11/12 mt-4">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <div className="text-white flex gap-1 items-center mt-1 text-lg font-medium sm:text-base xs:text-sm">
            <div className="w-40">
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
