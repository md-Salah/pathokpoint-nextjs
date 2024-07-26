"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosLogOut, IoIosStarOutline, IoMdHeartEmpty } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { initializeAuth, logout } from "@/redux/features/auth-slice";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const defaultSrc = "/default/user.avif";

  useEffect(() => {
    dispatch(initializeAuth());
  }, []);

  if (!user)
    return (
      <>
        <Link
          href="/auth/login"
          className="hidden lg:flex btn btn-primary btn-outline btn-sm w-32 h-10 text-sm text-nowrap"
        >
          Login/Sign Up
        </Link>
        <Link
          href="/auth/login"
          className="lg:hidden btn btn-ghost btn-circle avatar btn-sm sm:btn-md text-black02 hover:bg-primary hover:text-white"
        >
          <IoPersonCircleOutline className="inline-block w-6 h-6" />
        </Link>
      </>
    );

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar btn-sm sm:btn-md text-black02 hover:bg-primary hover:text-white"
      >
        <Image
          alt="Profile"
          src={user.src || defaultSrc}
          width={36}
          height={36}
          className="rounded-full"
          blurDataURL={defaultSrc}
          placeholder="blur"
        />
      </div>

      {/* Dropdown content */}
      <ul
        tabIndex={0}
        className="menu dropdown-content shadow bg-white text-black02 text-sm rounded-box w-52"
      >
        <li>
          <Link href="/user/me" className="gap-2">
            <BsPerson className="inline-block w-5 h-5" />
            My Profile
          </Link>
        </li>
        <li>
          <Link href="/user/my-order" className="gap-2">
            <BiShoppingBag className="inline-block w-5 h-5" />
            My Orders
          </Link>
        </li>
        <li>
          <Link href="/user/wishlist" className="gap-2">
            <IoMdHeartEmpty className="inline-block w-5 h-5" />
            Wishlist
          </Link>
        </li>
        <li>
          <Link href="/user/my-reviews" className="gap-2">
            <IoIosStarOutline className="inline-block w-5 h-5" />
            My Reviews
          </Link>
        </li>
        <li>
          <div
            className="flex gap-2"
            onClick={() => {
              dispatch(logout());
            }}
          >
            <IoIosLogOut className="inline-block w-5 h-5" />
            Logout
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
