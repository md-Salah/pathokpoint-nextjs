"use client";
import Profile from "./Profile";
import Cart from "./Cart";
import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import { Search } from "@/components";
import { useEffect, useState } from "react";

const Nav = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`navbar bg-base-200 custom-px ${
          fixedNavbar ? "fixed top-0 z-20 shadow-md" : ""
        }`}
      >
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none gap-1">
          <div className="md:hidden">
            <SearchIcon />
          </div>
          <div className="hidden md:block mr-2">
            <Search />
          </div>
          <Cart />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Nav;
