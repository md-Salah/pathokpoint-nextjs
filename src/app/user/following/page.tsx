import { Following, SidebarDesktopLayout } from "@/components";
import Link from "next/link";
import React from "react";
import { IoChevronBack } from "react-icons/io5";

const FollowingPage = () => {
  return (
    <>
      <SidebarDesktopLayout>
        <Following />
      </SidebarDesktopLayout>
      <div className="md:hidden w-full flex flex-col md:space-y-4 my-10 md:my-0 h-screen overflow-y-auto">
        <div className="flex items-center w-full pt-6 pb-3 bg-white md:hidden">
          <Link href={"/user"} className="pl-5">
            <IoChevronBack size={20} />
          </Link>
          <div className="flex justify-center w-full absolute">
            <h2 className="text-base font-bold text-black02">Following</h2>
          </div>
        </div>
        <Following />
      </div>
    </>
  );
};

export default FollowingPage;
