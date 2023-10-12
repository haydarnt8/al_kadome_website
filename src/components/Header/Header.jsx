import logo from "../../image/download.webp";
import Search from "./Search";
const Header = () => {
  return (
    <>
      <header className="sticky -inset-1 z-40 items-center w-full h-16 shadow-lg bg-[#000000]">
        <div className="relative z-20 flex flex-col justify-center mx-auto w-11/12 h-full flex-center">
          <div className="relative flex justify-between items-center w-full outline">
            <div className="relative flex items-center gap-2 ">
              <div className="relative block">
                <img
                  alt="profil"
                  src={logo}
                  className="mx-auto object-cover rounded-full h-12 w-12 "
                />
              </div>
              <div className="flex flex-col justify-center text-white">
                <p>معرض</p>
                <p>الكاظمي</p>
              </div>
            </div>
            <div className="container z-50 flex justify-end w-3/4 h-full ">
              <div className="relative flex items-center w-full h-full lg:w-96 xs:w-5/6 group">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
