import { BsSearch, BsArrowLeft } from "react-icons/bs";
import { Search } from "@/components";

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

      {/* Search Drawer */}
      <div className="drawer-side z-20">
        <label
          htmlFor="right-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-3 w-11/12 sm:w-96 min-h-full bg-base-200 text-base-content">
          {/* Back Icon */}
          <label
            htmlFor="right-drawer"
            className="flex-shrink hover:bg-gray-100 w-fit pr-2 pl-1 mb-5 rounded-md cursor-pointer"
          >
            <BsArrowLeft className="h-5 w-5 mr-1 inline-block" />
            <span>Back</span>
          </label>

          <div className="w-full">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchIcon;
