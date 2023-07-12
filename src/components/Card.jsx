import { useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";
import "./animation.css";

const Card = ({ product, selectedProduct, setSelectedProduct }) => {
  const productRefs = useRef([]);
  const images =
    product.images.length === 0
      ? [product.image]
      : [product.image].concat(product.images.map((image) => image.image));

  const [selectedImage, setSelectedImage] = useState(product.image);

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
          selectedProductRef.element.scrollIntoView({ block: "center" });
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
        className={`p-2 ${styles.card}
        ${
          product.id === selectedProduct
            ? "col-span-full flex sm:gap-10 p-3 items-center sm:flex-row xs:flex-col xs:gap-4 animated fadeIn "
            : ""
        } `}
        onClick={() => handleClick(product.id)}
      >
        <div
          className={` flex gap-2 justify-between rounded-lg sm:flex-row xs:flex-col-reverse
        ${
          product.id === selectedProduct
            ? " md:w-[45%] sm:w-[50%] xs:w-full"
            : " w-full xl:aspect-h-8 xl:aspect-w-7"
        }
        `}
        >
          {product.id === selectedProduct ? (
            <ul className="flex justify-center items-center gap-3 rounded-xl bg-[#00000078] md:p-3 sm:p-2 xs:p-1 sm:flex-col xs:flex-row   sm:h-auto xs:h-16">
              {images.map((image, index) => (
                <li
                  className="w-full sm:h-auto xs:h-full"
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(image);
                  }}
                >
                  <img
                    className={`aspect-square object-cover w-full h-full rounded-sm
                    ${image === selectedImage ? "" : "opacity-50"}
                    `}
                    src={image}
                    alt={product.name}
                  />
                </li>
              ))}
            </ul>
          ) : null}
          <img
            src={selectedImage}
            alt={product.name}
            className={`aspect-square object-cover object-center transition md:hover:opacity-75
            ${product.id === selectedProduct ? " sm:w-5/6 xs:w-auto" : ""}
            `}
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
          ${
            product.id === selectedProduct ? "md:text-3xl sm:text-2xl xs:text-xl" : "xl:text-base xs:text-sm"
          }
          `}
          >
            {product.name}
          </h3>
          {product.id === selectedProduct && (
            <p className="mt-1 md:text-lg sm:text-base xs:text-sm font-medium text-white">
              {product.description}
            </p>
          )}
          <div
            className={` text-white flex gap-1 items-center
            ${
              product.id === selectedProduct
                ? "md:text-2xl sm:text-xl xs:text-lg"
                : "mt-1 font-medium sm:text-base xs:text-sm"
            }          
          `}
          >
            <p> السعر :</p>
            <p>
              {product.price.toLocaleString() }
              <small className="text-slate-200"> د.ع</small>
            </p>
          </div>
          {product.id === selectedProduct && (
            <div className="flex items-center  text-gray-100 md:flex-row xs:flex-col xs:text-sm">
              <div className="text-right">للطلب يرجى مراسلة الصفحة على الـ</div>
              <a
                href="https://wa.me/9647704866012"
                target="_new"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="207" height="48" fill="none">
                  <g clipPath="url(#a)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.7462 12.4473c2.9024.0139 5.7034 1.1536 7.7986 3.1621 2.1456 2.057 3.3822 4.8152 3.4903 7.7855.1056 2.9008-.9071 5.7502-2.8279 7.9263-2.1067 2.3866-5.0371 3.7574-8.2021 3.8482a11.0067 11.0067 0 0 1-.325.0047c-1.7054 0-3.3949-.3846-4.9252-1.1209l-5.9481 1.323a.0874.0874 0 0 1-.1033-.0974l1.0048-6.0144c-.8575-1.5668-1.3361-3.3321-1.3877-5.1278-.087-3.0341 1.0127-5.9204 3.0966-8.1273 2.1606-2.2882 5.1111-3.562 8.2727-3.562h.0563Zm-.0633 1.9717a9.576 9.576 0 0 0-.2728.0039c-5.1765.1485-9.2671 4.4807-9.1186 9.6572.0454 1.5806.4907 3.1321 1.2878 4.4868l.173.2937-.7445 4.0812 4.0387-.9534.305.1588c1.3307.6924 2.8218 1.0553 4.3283 1.0553.0895 0 .1792-.0013.2687-.0039 5.1766-.1485 9.2672-4.4806 9.1187-9.6571-.1459-5.0852-4.3294-9.1225-9.3843-9.1225Zm-3.9285 3.9024c.1899.0059.3802.0113.5462.0235.2029.0145.4275.031.6265.5128.2362.5721.747 2.0004.8139 2.1453.0669.1449.1093.313.0084.5006-.1009.1874-.1521.3049-.2995.4671-.1476.1623-.3111.3628-.4431.4866-.1474.1379-.3006.288-.143.5785.1575.2908.701 1.2425 1.5255 2.025 1.0596 1.0056 1.9093 1.3374 2.2468 1.4948.1218.0569.223.0838.3114.0838.1214 0 .2185-.0508.3112-.1448.1776-.1799.712-.8035.937-1.0904.1177-.1501.2243-.2033.34-.2033.0926 0 .1911.0341.3061.0799.2584.1033 1.639.8367 1.9198.9882.2808.1514.4686.2287.5363.3497.0676.1216.05.6927-.2081 1.3517-.2581.6591-1.4419 1.2661-1.9662 1.2975-.1535.0092-.3045.0307-.501.0307-.4751 0-1.2159-.1251-2.8986-.8498-2.8631-1.2329-4.6017-4.2625-4.7385-4.4571-.1365-.1949-1.1167-1.5831-1.0736-2.9873.0431-1.404.801-2.0718 1.0712-2.3493.259-.2661.5558-.3341.7474-.3341l.0239.0004Z"
                      fill="#fff"
                    />
                  </g>
                  <path
                    d="M56.7981 22.416h2.432c-.0746-.6613-.256-1.248-.544-1.76-.288-.512-.656-.9387-1.104-1.28-.4373-.352-.9386-.6187-1.504-.8-.5546-.1813-1.1466-.272-1.776-.272-.8746 0-1.664.1547-2.368.464-.6933.3093-1.28.736-1.76 1.28s-.848 1.184-1.104 1.92c-.256.7253-.384 1.5147-.384 2.368 0 .832.128 1.6107.384 2.336.256.7147.624 1.3387 1.104 1.872.48.5333 1.0667.9547 1.76 1.264.704.2987 1.4934.448 2.368.448.704 0 1.3494-.1067 1.936-.32.5867-.2133 1.0987-.5227 1.536-.928.4374-.4053.7894-.896 1.056-1.472.2667-.576.432-1.2213.496-1.936h-2.432c-.096.768-.3626 1.3867-.8 1.856-.4266.4693-1.024.704-1.792.704-.5653 0-1.0453-.1067-1.44-.32-.3946-.224-.7146-.5173-.96-.88-.2453-.3627-.4266-.768-.544-1.216a6.1994 6.1994 0 0 1-.16-1.408c0-.5013.0534-.9867.16-1.456.1174-.4693.2987-.8853.544-1.248.2454-.3733.5654-.6667.96-.88.3947-.224.8747-.336 1.44-.336.3094 0 .6027.0533.88.16.288.096.544.2347.768.416.224.1813.4107.3947.56.64.1494.2347.2454.496.288.784Zm4.0034-3.84V30h2.272v-4.336c0-.8427.1387-1.4453.416-1.808.2773-.3733.7253-.56 1.344-.56.544 0 .9227.1707 1.136.512.2133.3307.32.8373.32 1.52V30h2.272v-5.088c0-.512-.048-.976-.144-1.392-.0853-.4267-.24-.784-.464-1.072-.224-.2987-.5333-.528-.928-.688-.384-.1707-.88-.256-1.488-.256-.4267 0-.864.112-1.312.336-.448.2133-.816.56-1.104 1.04h-.048v-4.304h-2.272Zm9.3884 5.696c.032-.5333.1653-.976.4-1.328a2.7225 2.7225 0 0 1 .896-.848c.3626-.2133.768-.3627 1.216-.448a6.6995 6.6995 0 0 1 1.376-.144c.416 0 .8373.032 1.264.096.4266.0533.816.1653 1.168.336.352.1707.64.4107.864.72.224.2987.336.6987.336 1.2v4.304c0 .3733.0213.7307.064 1.072.0426.3413.1173.5973.224.768h-2.304a5.1939 5.1939 0 0 1-.112-.384 5.4502 5.4502 0 0 1-.048-.416c-.3627.3733-.7894.6347-1.28.784a5.139 5.139 0 0 1-1.504.224c-.3947 0-.7627-.048-1.104-.144-.3414-.096-.64-.2453-.896-.448-.256-.2027-.4587-.4587-.608-.768-.1387-.3093-.208-.6773-.208-1.104 0-.4693.08-.8533.24-1.152.1706-.3093.384-.5547.64-.736.2666-.1813.5653-.3147.896-.4a8.783 8.783 0 0 1 1.024-.224c.3413-.0533.6773-.096 1.008-.128.3306-.032.624-.08.88-.144.256-.064.4586-.1547.608-.272.1493-.128.2186-.3093.208-.544 0-.2453-.0427-.4373-.128-.576-.0747-.1493-.1814-.2613-.32-.336-.128-.0853-.2827-.1387-.464-.16-.1707-.032-.3574-.048-.56-.048-.448 0-.8.096-1.056.288-.256.192-.4054.512-.448.96h-2.272Zm5.248 1.68c-.096.0853-.2187.1547-.368.208a4.241 4.241 0 0 1-.464.112 6.456 6.456 0 0 1-.512.08 9.5088 9.5088 0 0 0-.544.08 4.4913 4.4913 0 0 0-.512.128c-.16.0533-.304.128-.432.224-.1174.0853-.2134.1973-.288.336-.0747.1387-.112.3147-.112.528 0 .2027.0373.3733.112.512a.9215.9215 0 0 0 .304.336c.128.0747.2773.128.448.16.1706.032.3466.048.528.048.448 0 .7946-.0747 1.04-.224.2453-.1493.4266-.3253.544-.528.1173-.2133.1866-.4267.208-.64.032-.2133.048-.384.048-.512v-.848Zm6.9155-4.224v-2.48h-2.272v2.48h-1.376v1.52h1.376v4.88c0 .416.0693.752.208 1.008.1386.256.3253.4533.56.592.2453.1387.5226.2293.832.272.32.0533.656.08 1.008.08.224 0 .4533-.0053.688-.016.2346-.0107.448-.032.64-.064v-1.76a3.203 3.203 0 0 1-.336.048c-.1174.0107-.24.016-.368.016-.384 0-.64-.064-.768-.192s-.192-.384-.192-.768v-4.096h1.664v-1.52h-1.664Zm9.2141 4.144c0-.3307.032-.656.096-.976.064-.32.1707-.6027.32-.848.16-.2453.368-.4427.624-.592.256-.16.576-.24.96-.24s.704.08.96.24c.2667.1493.4747.3467.624.592.16.2453.272.528.336.848.064.32.096.6453.096.976s-.032.656-.096.976c-.064.3093-.176.592-.336.848-.1493.2453-.3573.4427-.624.592-.256.1493-.576.224-.96.224s-.704-.0747-.96-.224a1.8425 1.8425 0 0 1-.624-.592c-.1493-.256-.256-.5387-.32-.848a4.9642 4.9642 0 0 1-.096-.976Zm-2.272 0c0 .6613.1013 1.2587.304 1.792.2027.5333.4907.992.864 1.376.3733.3733.8213.6613 1.344.864s1.1093.304 1.76.304c.6507 0 1.2373-.1013 1.76-.304.5333-.2027.9867-.4907 1.36-.864.3733-.384.6613-.8427.864-1.376.2027-.5333.304-1.1307.304-1.792s-.1013-1.2587-.304-1.792c-.2027-.544-.4907-1.0027-.864-1.376-.3733-.384-.8267-.6773-1.36-.88-.5227-.2133-1.1093-.32-1.76-.32-.6507 0-1.2373.1067-1.76.32-.5227.2027-.9707.496-1.344.88-.3733.3733-.6613.832-.864 1.376-.2027.5333-.304 1.1307-.304 1.792Zm10.0373-4.144V30h2.2722v-4.336c0-.8427.138-1.4453.416-1.808.277-.3733.725-.56 1.344-.56.544 0 .922.1707 1.136.512.213.3307.32.8373.32 1.52V30h2.272v-5.088c0-.512-.048-.976-.144-1.392-.086-.4267-.24-.784-.464-1.072-.224-.2987-.534-.528-.928-.688-.384-.1707-.88-.256-1.488-.256-.48 0-.95.112-1.408.336-.459.2133-.832.56-1.12 1.04h-.048v-1.152h-2.1602ZM124.39 30l3.072-11.424h-2.464l-1.872 7.872h-.032l-1.952-7.872h-2.352l-1.984 7.776h-.032l-1.808-7.776h-2.512L115.478 30h2.544l1.904-7.776h.032L121.894 30h2.496Zm3.99-11.424V30h2.272v-4.336c0-.8427.138-1.4453.416-1.808.277-.3733.725-.56 1.344-.56.544 0 .922.1707 1.136.512.213.3307.32.8373.32 1.52V30h2.272v-5.088c0-.512-.048-.976-.144-1.392-.086-.4267-.24-.784-.464-1.072-.224-.2987-.534-.528-.928-.688-.384-.1707-.88-.256-1.488-.256-.427 0-.864.112-1.312.336-.448.2133-.816.56-1.104 1.04h-.048v-4.304h-2.272Zm9.388 5.696c.032-.5333.165-.976.4-1.328.235-.352.533-.6347.896-.848.363-.2133.768-.3627 1.216-.448.459-.096.917-.144 1.376-.144.416 0 .837.032 1.264.096.427.0533.816.1653 1.168.336.352.1707.64.4107.864.72.224.2987.336.6987.336 1.2v4.304c0 .3733.021.7307.064 1.072.043.3413.117.5973.224.768h-2.304c-.043-.128-.08-.256-.112-.384a5.886 5.886 0 0 1-.048-.416c-.363.3733-.789.6347-1.28.784s-.992.224-1.504.224c-.395 0-.763-.048-1.104-.144-.341-.096-.64-.2453-.896-.448-.256-.2027-.459-.4587-.608-.768-.139-.3093-.208-.6773-.208-1.104 0-.4693.08-.8533.24-1.152.171-.3093.384-.5547.64-.736.267-.1813.565-.3147.896-.4.341-.096.683-.1707 1.024-.224.341-.0533.677-.096 1.008-.128.331-.032.624-.08.88-.144.256-.064.459-.1547.608-.272.149-.128.219-.3093.208-.544 0-.2453-.043-.4373-.128-.576-.075-.1493-.181-.2613-.32-.336-.128-.0853-.283-.1387-.464-.16-.171-.032-.357-.048-.56-.048-.448 0-.8.096-1.056.288-.256.192-.405.512-.448.96h-2.272Zm5.248 1.68c-.096.0853-.219.1547-.368.208-.139.0427-.293.08-.464.112-.16.032-.331.0587-.512.08s-.363.048-.544.08c-.171.032-.341.0747-.512.128-.16.0533-.304.128-.432.224-.117.0853-.213.1973-.288.336-.075.1387-.112.3147-.112.528 0 .2027.037.3733.112.512.075.1387.176.2507.304.336.128.0747.277.128.448.16.171.032.347.048.528.048.448 0 .795-.0747 1.04-.224s.427-.3253.544-.528c.117-.2133.187-.4267.208-.64.032-.2133.048-.384.048-.512v-.848Zm6.916-4.224v-2.48h-2.272v2.48h-1.376v1.52h1.376v4.88c0 .416.069.752.208 1.008.138.256.325.4533.56.592.245.1387.522.2293.832.272.32.0533.656.08 1.008.08.224 0 .453-.0053.688-.016.234-.0107.448-.032.64-.064v-1.76a3.226 3.226 0 0 1-.336.048c-.118.0107-.24.016-.369.016-.383 0-.639-.064-.767-.192s-.192-.384-.192-.768v-4.096h1.664v-1.52h-1.664Zm4.505 5.584h-2.16c.021.5547.144 1.0187.368 1.392.234.3627.528.656.88.88.362.224.773.384 1.232.48.458.096.928.144 1.408.144.469 0 .928-.048 1.376-.144.458-.0853.864-.24 1.216-.464.352-.224.634-.5173.848-.88.224-.3733.336-.832.336-1.376 0-.384-.075-.704-.224-.96-.15-.2667-.347-.4853-.592-.656-.246-.1813-.528-.3253-.848-.432a9.1635 9.1635 0 0 0-.96-.272 38.534 38.534 0 0 0-.944-.208c-.31-.064-.587-.1333-.832-.208-.235-.0853-.427-.192-.576-.32-.15-.128-.224-.2933-.224-.496 0-.1707.042-.304.128-.4.085-.1067.186-.1867.304-.24.128-.0533.266-.0853.416-.096.149-.0213.288-.032.416-.032.405 0 .757.08 1.056.24.298.1493.464.4427.496.88h2.16c-.043-.512-.176-.9333-.4-1.264-.214-.3413-.486-.6133-.816-.816-.331-.2027-.71-.3467-1.136-.432-.416-.0853-.848-.128-1.296-.128-.448 0-.886.0427-1.312.128-.427.0747-.811.2133-1.152.416-.342.192-.619.4587-.832.8-.203.3413-.304.7787-.304 1.312 0 .3627.074.672.224.928.149.2453.346.4533.592.624.245.16.522.2933.832.4.32.096.645.1813.976.256.81.1707 1.44.3413 1.888.512.458.1707.688.4267.688.768 0 .2027-.048.3733-.144.512-.096.128-.219.2347-.368.32-.139.0747-.299.1333-.48.176-.171.032-.336.048-.496.048a2.694 2.694 0 0 1-.656-.08c-.203-.0533-.384-.1333-.544-.24a1.5364 1.5364 0 0 1-.4-.432c-.096-.1813-.144-.3947-.144-.64Zm9.953-1.728 1.488-4.192h.032l1.44 4.192h-2.96Zm.24-7.008L160.31 30h2.528l.896-2.544h4.272L168.87 30h2.608l-4.272-11.424h-2.576Zm11.769 9.936c-.362 0-.672-.0747-.928-.224s-.464-.3413-.624-.576c-.149-.2453-.261-.528-.336-.848a4.9642 4.9642 0 0 1-.096-.976c0-.3413.032-.672.096-.992.064-.32.171-.6027.32-.848.16-.2453.363-.4427.608-.592.256-.16.571-.24.944-.24.363 0 .667.08.912.24.256.1493.464.352.624.608.16.2453.272.528.336.848.075.32.112.6453.112.976s-.032.656-.096.976c-.064.32-.176.6027-.336.848-.149.2347-.352.4267-.608.576-.245.1493-.554.224-.928.224Zm-4.176-6.784v11.168h2.272v-3.92h.032c.278.4053.63.7147 1.056.928.438.2027.912.304 1.424.304.608 0 1.136-.1173 1.584-.352.459-.2347.838-.5493 1.136-.944.31-.3947.539-.848.688-1.36.15-.512.224-1.0453.224-1.6 0-.5867-.074-1.1467-.224-1.68-.149-.544-.378-1.0187-.688-1.424-.309-.4053-.698-.7307-1.168-.976-.469-.2453-1.029-.368-1.68-.368-.512 0-.981.1013-1.408.304-.426.2027-.778.528-1.056.976h-.032v-1.056h-2.16Zm13.958 6.784c-.363 0-.672-.0747-.928-.224s-.464-.3413-.624-.576c-.15-.2453-.262-.528-.336-.848a4.9642 4.9642 0 0 1-.096-.976c0-.3413.032-.672.096-.992.064-.32.17-.6027.32-.848.16-.2453.362-.4427.608-.592.256-.16.57-.24.944-.24.362 0 .666.08.912.24.256.1493.464.352.624.608.16.2453.272.528.336.848.074.32.112.6453.112.976s-.032.656-.096.976c-.064.32-.176.6027-.336.848-.15.2347-.352.4267-.608.576-.246.1493-.555.224-.928.224Zm-4.176-6.784v11.168h2.272v-3.92h.032c.277.4053.629.7147 1.056.928.437.2027.912.304 1.424.304.608 0 1.136-.1173 1.584-.352.458-.2347.837-.5493 1.136-.944.309-.3947.538-.848.688-1.36.149-.512.224-1.0453.224-1.6 0-.5867-.075-1.1467-.224-1.68-.15-.544-.379-1.0187-.688-1.424-.31-.4053-.699-.7307-1.168-.976-.47-.2453-1.03-.368-1.68-.368-.512 0-.982.1013-1.408.304-.427.2027-.779.528-1.056.976h-.032v-1.056h-2.16Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
