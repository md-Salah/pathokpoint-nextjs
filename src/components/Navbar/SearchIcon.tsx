import { BsSearch, BsArrowLeft } from "react-icons/bs";
import { SearchBar, SearchSuggestion } from "@/components";

const SearchIcon = () => {
  return (
    <div className="drawer drawer-end">
      <input id="right-drawer" type="checkbox" className="drawer-toggle" />
      {/* Search Icon */}
      <div className="drawer-content">
        <label
          htmlFor="right-drawer"
          className="btn btn-ghost btn-circle bg-base-100 drawer-button"
        >
          <BsSearch className="h-5 w-5" />
        </label>
      </div>

      <div className="drawer-side z-[5]">
        <label
          htmlFor="right-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <SearchBar />
          <SearchSuggestion />
        </div>
      </div>
    </div>
  );
};

export default SearchIcon;
