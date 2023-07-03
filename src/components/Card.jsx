import { useEffect, useRef } from "react";
import styles from "./Card.module.css";
import "./animation.css";

const Card = ({ product, selectedProduct, setSelectedProduct }) => {
  const productRefs = useRef([]);

  const handleClick = (productId) => {
    if (selectedProduct === productId) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(productId);
      const selectedProductRef = productRefs.current.find(
        (ref) => ref.id === productId
      );
      if (selectedProductRef) {
        const scrollToProduct = () => {
          selectedProductRef.element.scrollIntoView({block: "center" });
        };
        // Delay the scroll to allow the product to transition to its new position
        setTimeout(() => {
          requestAnimationFrame(scrollToProduct);
        }, 100);
      }
    }
  };

  const handleProductRef = (element, productId) => {
    if (element) {
      productRefs.current.push({ id: productId, element });
    }
  };

  // Scroll to the selected product when it changes
  useEffect(() => {
    const selectedProductRef = productRefs.current.find(
      (ref) => ref.id === selectedProduct
    );
    if (selectedProductRef) {
      selectedProductRef.element.scrollIntoView();
    }
  }, [selectedProduct]);

  return (
    <>
      <div
        key={product.id}
        ref={(element) => handleProductRef(element, product.id)}
        className={`group p-2 ${styles.card}
        ${
          product.id === selectedProduct
            ? "col-span-full flex sm:gap-10 px-10 items-center sm:flex-row xs:flex-col xs:gap-4 animated fadeIn "
            : ""
        } `}
        onClick={() => handleClick(product.id)}
      >
        <div
          className={`overflow-hidden aspect-square rounded-lg bg-gray-200 
        ${
          product.id === selectedProduct
            ? " md:w-[45%] sm:w-[50%] xs:w-full aspect-square  "
            : " w-full xl:aspect-h-8 xl:aspect-w-7"
        }
        `}
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition group-hover:opacity-75"
          />
        </div>
        <div
          className={` flex flex-col gap-3
        ${
          product.id === selectedProduct
            ? "md:w-[55%] sm:w-[50%] xs:w-full "
            : ""
        }
        `}
        >
          <h3
            className={`mt-4  text-gray-100
          ${product.id === selectedProduct ? "text-3xl" : "text-sm xl:text-base"}
          `}
          >
            {product.name}
          </h3>
          {product.id === selectedProduct && (
            <p className="mt-1 text-base font-medium text-white">
              {product.description}
            </p>
          )}
          <p
            className={` text-white
            ${
              product.id === selectedProduct
                ? "text-2xl"
                : "mt-1 text-lg font-medium sm:text-base xs:text-sm"
            }          
          `}
          >
            {product.price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
