import logo from "../image/download.avif";
import Search from "./Search";
const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-40 items-center w-full h-16 shadow-lg bg-[#000000]">
        <div className="relative z-20 flex flex-col justify-center mx-auto w-11/12 h-full flex-center">
          <div className="relative flex justify-between items-center w-full outline">
            <div className="container relative left-0 z-50 flex w-3/4 h-full outline">
              <div className="relative flex items-center w-full h-full lg:w-96 xs:w-5/6 group outline">
                <Search />
              </div>
            </div>
            <div className="relative flex items-center justify-end gap-2  ">
              <div className="flex flex-col justify-center items-end text-white">
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
    </>
  );
};
export default Header;
