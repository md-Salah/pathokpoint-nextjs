"use client";
import Link from "next/link";
import { IoDocumentText, IoPersonSharp } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { usePathname } from "next/navigation";

import { ProfileAvatar, LogoutModal } from "@/components/UserProfile";
import { ReactNode, useRef } from "react";

const SidebarDesktop = () => {
  const pathname = usePathname();
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="bg-white pb-10">
      <div className="border-b border-b-[#E6E6E6]">
        <ProfileAvatar />
      </div>
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col items-start space-y-2 py-4">
          <MenuItem
            Icon={<IoPersonSharp size={20} color="#9B9B9C" />}
            isSelected={pathname === "/user/me" || pathname === "/user"}
            text="My Profile"
            href="/user/me"
          />
          <MenuItem
            Icon={<IoDocumentText size={20} color="#9B9B9C" />}
            isSelected={pathname === "/user/my-order"}
            text="My Order"
            href="/user/my-order"
          />
          <MenuItem
            Icon={<BsFillPersonPlusFill size={20} color="#9B9B9C" />}
            isSelected={pathname === "/user/following"}
            text="Following"
            href="/user/following"
          />
          <MenuItem
            Icon={<FaHeart size={20} color="#9B9B9C" />}
            isSelected={pathname === "/user/wishlist"}
            text="Wishlist"
            href="/user/wishlist"
          />
          <MenuItem
            Icon={<MdReviews size={20} color="#9B9B9C" />}
            isSelected={pathname === "/user/my-reviews"}
            text="My Reviews"
            href="/user/my-reviews"
          />
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer py-3 pl-6 hover:bg-primary hover:bg-opacity-10 hover:border-r-[6px] hover:border-r-primary w-full"
          onClick={() => {
            ref.current?.showModal();
          }}
        >
          <BiSolidLogOut size={20} color="#9B9B9C" />
          <span className="text-black04 text-sm font-semibold">Logout</span>
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
    </div>
  );
};

export default SidebarDesktop;

const MenuItem = ({
  Icon,
  isSelected,
  text,
  href,
}: {
  Icon: ReactNode;
  isSelected: boolean;
  text: string;
  href: string;
}) => {
  return (
    <Link
      className={`flex items-center space-x-2 cursor-pointer py-3 pl-6 ${
        isSelected && "bg-primary bg-opacity-10 border-r-[6px] border-r-primary"
      } hover:bg-primary hover:bg-opacity-10 hover:border-r-[6px] hover:border-r-primary w-full`}
      href={href}
    >
      {Icon}
      <span className="text-black04 text-sm font-semibold">{text}</span>
    </Link>
  );
};
