import Profile from "./Profile";
import Cart from "./Cart";
import Logo from "./Logo";
import Menu from "./Menu";

import { Search } from "@/components";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-30 w-full shadow-md">
      <div className="navbar layout-container layout-px h-14 sm:h-[70px] relative">
        <div className="w-full h-full">
          <div className="hover:cursor-pointer mr-2 md:hidden">
            <Menu />
          </div>

          <div className="flex-1 min-w-28">
            <Logo />
          </div>

          <ul className="flex gap-1 sm:gap-3 items-center justify-end sm:w-8/12 md:w-8/12 lg:w-9/12">
            <li
              className={`bg-white h-full flex flex-1 items-center transition-all duration-500 ease-in-out
                focus-within:z-[5] focus-within:absolute focus-within:sm:relative
                focus-within:left-0 focus-within:right-0
                focus-within:mx-4 focus-within:sm:mx-0
                max-w-56 focus-within:max-w-full
                sm:max-w-56 focus-within:sm:max-w-72
                md:max-w-64 focus-within:md:max-w-96
                lg:max-w-80 focus-within:lg:max-w-[512px] focus-within:xl:max-w-[614px]
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
