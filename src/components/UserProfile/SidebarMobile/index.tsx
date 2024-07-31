"use client";

import Link from "next/link";
import { IoPersonSharp, IoDocumentText } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi2";
import { useRef } from "react";

import { ProfileAvatar } from "@/components/UserProfile";
import { LogoutModal } from "@/components";

const SidebarMobile = () => {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="w-full space-y-4 bg-white py-10">
      <div className="w-full">
        <ProfileAvatar />
      </div>
      <div className="border border-black06 rounded-lg px-4 mx-4">
        <MenuItem
          icon={<IoPersonSharp size={20} color="#FF8200" />}
          text="My Profile"
          href="/user/me"
        />
        <MenuItem
          icon={<IoDocumentText size={20} color="#FF8200" />}
          text="My Order"
          href="/user/my-order"
        />
        <MenuItem
          icon={<BsFillPersonPlusFill size={20} color="#FF8200" />}
          text="Following"
          href="/user/following"
        />
        <MenuItem
          icon={<FaHeart size={20} color="#FF8200" />}
          text="Wishlist"
          href="/user/wishlist"
        />
        <MenuItem
          icon={<MdReviews size={20} color="#FF8200" />}
          text="My Reviews"
          href="/user/my-reviews"
        />
      </div>

      {/* Logout */}
      <div
        className="border border-black06 rounded-lg px-4 mx-4 cursor-pointer"
        onClick={() => {
          ref.current?.showModal();
        }}
      >
        <div className="w-full flex item-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <div className="bg-primary bg-opacity-10 p-2 rounded-full">
              <BiSolidLogOut size={20} color="#FF8200" />
            </div>
            <span className="text-black0 text-sm">Logout</span>
          </div>
          <div className="pt-2">
            <HiChevronRight size={20} />
          </div>
        </div>
      </div>
      <dialog ref={ref} className="modal">
        <LogoutModal
          handleYes={() => {
            ref.current?.close();
          }}
          handleNo={() => {
            ref.current?.close();
          }}
        />
      </dialog>
    </div>
  );
};

export default SidebarMobile;

const MenuItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="w-full flex item-end justify-between border-b border-b-black06 py-3"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-primary bg-opacity-10 p-2 rounded-full">{icon}</div>
        <span className="text-black0 text-sm">{text}</span>
      </div>
      <div className="pt-2">
        <HiChevronRight size={20} />
      </div>
    </Link>
  );
};
