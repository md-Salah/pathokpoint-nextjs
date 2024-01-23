import Profile from "./Profile";
import Cart from "./Cart";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import { SearchBar } from "@/components";

const Navbar = () => {
  return (
    <div>
      {/* Top banner */}

      {/* Main Navbar */}
      <div className="navbar bg-base-200 px-2 md:px-3 lg:px-5 xl:px-24 2xl:px-36">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none gap-1">
          <div className="md:hidden">
            <SearchIcon />
          </div>
          <div className="hidden md:block mr-2">
            <SearchBar />
          </div>
          <Cart />
          <Profile />
        </div>
      </div>

      {/* Second Navbar */}
    </div>
  );
};

export default Navbar;
