import { Search } from '@/components';

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
