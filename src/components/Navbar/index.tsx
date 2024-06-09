import Profile from "./Profile";
import Cart from "./Cart";
import Logo from "./Logo";
import { Search } from "@/components";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className=" bg-white sticky top-0 z-50 w-full shadow-md">
      <div className="navbar layout-container layout-px h-14 sm:h-[70px]">
        <div className="w-full">
          <div className="hover:cursor-pointer mr-2 md:hidden">
            <Menu />
          </div>

          <div className="flex-1">
            <Logo />
          </div>

          <div className="">
            <ul className="flex gap-1 sm:gap-3 items-center">
              <li className="max-w-40 sm:max-w-56 h-10">
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
    </div>
  );
};

export default Navbar;
