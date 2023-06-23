import React, { useEffect, useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(true);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (hover) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4500);
      return () => clearInterval(interval);
    }
  });

  const gradientStyle = {
    background:
      "linear-gradient(270deg, rgba(0,0,0,1) 10%,rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
  };

  return (
    <div
      id="Home"
      className=" h-[65vh] w-full m-auto relative group"
      onMouseEnter={() => setHover(false)}
      onMouseLeave={() => setHover(true)}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div
          className=" w-full h-full flex flex-row-reverse items-center p-10   "
          style={gradientStyle}
        >
          <div className="w-2/5 flex flex-col gap-5 md:w-1/2  xs:w-4/5">
            <h1 className="text-white text-right lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl ">
              معرض الكاظمي للانارة الحديثة
            </h1>
            <h2 className="text-right text-slate-300 lg:text-lg md:text-base sm:text-sm ">
              وجهتك المثالية للإضاءة العصرية والمبتكرة، حيث يوفر مجموعة واسعة من
              الثريات وأجهزة الإضاءة بتصاميم مبتكرة وجودة عالية
            </h2>
            <div className="flex flex-row-reverse items-center md:gap-8 sm:gap-6 xs:gap-4">
              <div>
                <h1 className="text-slate-300 text-right lg:text-lg md:text-base sm:text-sm">
                  زورونا على مواقع التواصل
                </h1>
              </div>

              <div className="flex justify-end items-center gap-5">
                <a
                  href="https://www.facebook.com/Sajaadjj/"
                  className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                >
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/al_kadome/"
                  className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                >
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
            </div>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      {/* <div
        className="hidden group-hover:flex items-center absolute top-0 h-[55vh] -translate-x-0 left-0 text-2xl p-1 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div> */}
      {/* Right Arrow */}
      {/* <div
        className="hidden group-hover:flex items-center absolute top-0 h-[65vh] -translate-x-0 right-0 text-2xl  p-1 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div> */}
      {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              color={slideIndex === currentIndex ? "black" : "grey"}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
