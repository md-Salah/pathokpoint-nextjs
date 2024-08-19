"use client";

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Search } from '@/components';
import { setFocus } from '@/redux/features/search-slice';
import { AppDispatch, RootState } from '@/redux/store';

const SearchBar = () => {
  const searchRef = useRef<HTMLLIElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { focus } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      )
        dispatch(setFocus(false));
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <li
      className={`bg-white h-full flex flex-1 items-center transition-all duration-500 ease-in-out 
                  ${focus ? "z-[31] absolute sm:relative right-0 left-0" : ""}
                  ${focus ? "max-w-full" : "max-w-56"}
                  ${focus ? "sm:max-w-72" : "sm:max-w-56"}
                  ${focus ? "md:max-w-96" : "md:max-w-64"}
                  ${focus ? "lg:max-w-[512px] xl:max-w-[614px]" : "lg:max-w-80"}
                `}
      ref={searchRef}
    >
      <Search />
    </li>
  );
};

export default SearchBar;
