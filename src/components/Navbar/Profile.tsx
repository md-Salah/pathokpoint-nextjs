"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { IoIosLogOut, IoIosStarOutline, IoMdHeartEmpty } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { PiBagLight } from 'react-icons/pi';
import { useDispatch } from 'react-redux';

import { defaultSrc } from '@/constants';
import { useUser } from '@/hooks';
import { logout } from '@/redux/features/auth-slice';
import { AppDispatch } from '@/redux/store';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user, isLoading } = useUser();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeDropdown = () => setIsOpen(false);
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [isOpen]);

  if (isLoading)
    return <div className="loading loading-spinner text-black04"></div>;

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
    <div className="dropdown dropdown-end dropdown-open">
      <div
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar btn-sm sm:btn-md text-black02 hover:bg-primary hover:text-white"
        onClick={toggleDropdown}
      >
        <Image
          alt="Profile"
          src={(user && user.src) || defaultSrc.user}
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <ul
          tabIndex={0}
          className="menu dropdown-content shadow bg-white text-black02 text-sm rounded-box w-52"
        >
          <li>
            <Link href="/user/me" className="gap-2">
              <BsPerson className="inline-block" size={20} />
              My Profile
            </Link>
          </li>
          <li>
            <Link href="/user/my-order" className="gap-2">
              <PiBagLight className="inline-block" size={20} />
              My Orders
            </Link>
          </li>
          <li>
            <Link href="/user/wishlist" className="gap-2">
              <IoMdHeartEmpty className="inline-block" size={20} />
              Wishlist
            </Link>
          </li>
          <li>
            <Link href="/user/my-reviews" className="gap-2">
              <IoIosStarOutline className="inline-block" size={20} />
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
              <IoIosLogOut className="inline-block" size={20} />
              Logout
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
