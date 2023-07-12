import { MdLocationOn } from "react-icons/md";

const Slider = () => {
  // const slides = [
  //   {
  //     url: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  //   },
  //   {
  //     url: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  //   },
  //   {
  //     url: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  //   },

  //   {
  //     url: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  //   },
  //   {
  //     url: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [hover, setHover] = useState(true);

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // useEffect(() => {
  //   if (hover) {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 4500);
  //     return () => clearInterval(interval);
  //   }
  // });

  const gradientStyle = {
    background:
      "linear-gradient(270deg, rgba(0,0,0,1) 10%,rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
  };

  return (
    <div
      id="Home"
      className=" md:h-[65vh] sm:h-[60vh] xs:h-[50vh] w-full m-auto relative group"
      // onMouseEnter={() => setHover(false)}
      // onMouseLeave={() => setHover(true)}
    >
      <div
        style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/al-kadome-9f8ab.appspot.com/o/775153.webp?alt=media&token=933eb53e-83c9-4837-abb9-2791f781a671)` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div
          className=" w-full h-full flex  items-center p-10   "
          style={gradientStyle}
        >
          <div className="w-2/5 flex flex-col gap-5 md:w-1/2  xs:w-4/5">
            <h1
              className="text-white lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl"
              style={{ userSelect: "none" }}
            >
              معرض الكاظمي للانارة الحديثة
            </h1>
            <h2
              className="text-slate-300 lg:text-lg md:text-base sm:text-sm "
              style={{ userSelect: "none" }}
            >
              وجهتك المثالية للإضاءة العصرية والمبتكرة، حيث نوفر لكم مجموعة
              واسعة من الثريات وأجهزة الإضاءة بتصاميم مبتكرة وجودة عالية
            </h2>
            <h3
              className="text-slate-300 lg:text-lg md:text-base sm:text-sm flex items-center gap-2 "
              style={{ userSelect: "none" }}
            >
            بغداد/الكاظمية/شارع باب القبلة
              <a target="_new"
              href="https://goo.gl/maps/h83BajfSEXd1Mvws6"
              className="text-4xl"
              >
                <MdLocationOn />
              </a>
            </h3>
            <div className="flex  items-center md:gap-8 sm:gap-6 xs:gap-4">
              <div>
                <h1
                  className="text-slate-300 lg:text-lg md:text-base sm:text-sm"
                  style={{ userSelect: "none" }}
                >
                  زورونا على مواقع التواصل
                </h1>
              </div>

              <div className="flex items-center gap-5">
                <a
                  target="_new"
                  href="https://www.facebook.com/Sajaadjj/"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>

                <a
                  target="_new"
                  href="https://www.instagram.com/al_kadome/"
                  className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM11.9962 2.16929C15.1993 2.16929 15.5788 2.18153 16.8437 2.23924C18.0133 2.29257 18.6485 2.488 19.0712 2.65229C19.6312 2.86991 20.0308 3.12986 20.4506 3.54967C20.8704 3.96943 21.1303 4.36905 21.348 4.929C21.5122 5.35172 21.7077 5.98691 21.761 7.15653C21.8187 8.42148 21.831 8.80091 21.831 12.0041C21.831 15.2071 21.8187 15.5866 21.761 16.8515C21.7077 18.0211 21.5122 18.6563 21.348 19.0791C21.1303 19.639 20.8704 20.0386 20.4506 20.4584C20.0308 20.8782 19.6312 21.1381 19.0712 21.3558C18.6485 21.5201 18.0133 21.7155 16.8437 21.7688C15.579 21.8265 15.1996 21.8388 11.9962 21.8388C8.79286 21.8388 8.41352 21.8265 7.14871 21.7688C5.97909 21.7155 5.3439 21.5201 4.92119 21.3558C4.36124 21.1381 3.96162 20.8782 3.54186 20.4584C3.1221 20.0386 2.8621 19.639 2.64448 19.0791C2.48019 18.6563 2.28476 18.0211 2.23143 16.8515C2.17371 15.5866 2.16148 15.2071 2.16148 12.0041C2.16148 8.80091 2.17371 8.42148 2.23143 7.15653C2.28476 5.98691 2.48019 5.35172 2.64448 4.929C2.8621 4.36905 3.12205 3.96943 3.54186 3.54967C3.96162 3.12986 4.36124 2.86991 4.92119 2.65229C5.3439 2.488 5.97909 2.29257 7.14871 2.23924C8.41367 2.18153 8.7931 2.16929 11.9962 2.16929ZM11.9962 16.0028C9.78776 16.0028 7.99748 14.2125 7.99748 12.0041C7.99748 9.79558 9.78776 8.00529 11.9962 8.00529C14.2047 8.00529 15.995 9.79558 15.995 12.0041C15.995 14.2125 14.2047 16.0028 11.9962 16.0028ZM11.9962 5.84381C8.594 5.84381 5.836 8.60181 5.836 12.0041C5.836 15.4062 8.594 18.1642 11.9962 18.1642C15.3984 18.1642 18.1564 15.4062 18.1564 12.0041C18.1564 8.60181 15.3984 5.84381 11.9962 5.84381ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
