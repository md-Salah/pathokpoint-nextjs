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
          <div className="mr-2 md:hidden">
            <Menu />
          </div>

          <div>
            <Logo />
          </div>

          <div className="flex flex-1 ml-9 gap-1 sm:gap-3 items-center justify-end">
            <SearchBar />
            <Cart />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
