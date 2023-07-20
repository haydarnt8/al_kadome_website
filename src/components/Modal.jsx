import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ openModal, setOpenModal, product }) => {
  return (
    <div className="absolute flex justify-center items-center outline text-white z-50">
      <div className={`container px-6 py-10 mx-auto ${styles.modal}`}>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={product.imageSrc}
            alt={product.imageAlt}
          ></img>
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="block mt-4 text-2xl font-semibold text-white md:text-3xl">
              {product.name}
            </p>

            <p className="mt-3 text-lg text-gray-300 md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              veritatis sint autem nesciunt, laudantium quia tempore delect
            </p>
            <p className="mt-3 text-lg text-gray-300 md:text-base">
              Price : {product.price}
            </p>
            <button
              onClick={() => setOpenModal(false)}
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
