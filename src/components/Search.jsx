import { useNavigate } from "react-router-dom";
import { resetPage } from "../app/services/pageSlice";
import { resetProducts } from "../app/services/productSlice";
import { useDispatch } from "react-redux";


const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInputValue = e.target.search.value.trim();
    if (searchInputValue !== "") {
      navigate(`/search/${searchInputValue}`);
      dispatch(resetPage());
      dispatch(resetProducts());
    } else {
      navigate("/");
    }
  };
  

  return (
    <form
      className="relative flex w-full flex-wrap items-stretch"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        name="search"
        dir="rtl"
        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-200 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none border-neutral-600 text-neutral-200 placeholder:text-neutral-200 focus:border-primary"
        placeholder="بحث"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <button
        type="submit"
        className="cursor-pointer input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
        id="basic-addon2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
