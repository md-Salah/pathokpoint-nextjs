import Profile from "./Profile";
import Cart from "./Cart";
import Logo from "./Logo";
import Menu from "./Menu";

import { Search } from "@/components";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-30 w-full shadow-md layout-px">
      <div className="navbar layout-container h-14 sm:h-[70px] relative">
        <div className="w-full">
          <div className="hover:cursor-pointer mr-2 md:hidden">
            <Menu />
          </div>

          <div className="flex-1 min-w-28">
            <Logo />
          </div>

          <ul className="flex gap-1 sm:gap-3 items-center justify-end">
            <li
              className={`sm:max-w-56 md:max-w-96 lg:w-[614px] bg-white h-full flex items-center
                focus-within:absolute 
                focus-within:left-0
                focus-within:right-0
                focus-within:max-w-full
                focus-within:z-[5]
                focus-within:sm:relative
                `}
            >
              <Search />
            </li>
            <li>
              <Cart />
            </li>
            <li>
              <Profile />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
