import Cart from './Cart';
import Logo from './Logo';
import Menu from './Menu';
import Profile from './Profile';
import SearchBar from './SearchBar';

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
            <SearchBar />
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
