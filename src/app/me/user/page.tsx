"use client";
import React, { useEffect, useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { BiSolidLogOut } from "react-icons/bi";
import {
  Following,
  MyOrder,
  MyProfile,
  MyReviews,
  SidebarDesktop,
  SidebarMobile,
  Wishlist,
} from "@/components";
import { PiWarningCircleBold } from "react-icons/pi";
import ProfileAvatar from "@/components/UserProfile/shared/ProfileAvatar";
import useScreenSize from "@/hooks/useScreenSize";
import { MIN_DESKTOP_WIDTH } from "@/constants/constants";

const getMenuContent = (activeMenu: number) => {
  switch (activeMenu) {
    case 0:
      return <MyProfile />;
      break;
    case 1:
      return <MyOrder />;
      break;
    case 2:
      return <Following />;
      break;
    case 3:
      return <Wishlist />;
      break;
    case 4:
      return <MyReviews />;
      break;
    default:
      return <MyProfile />;
      break;
  }
};

const User = () => {
  const screenSize = useScreenSize();
  const [activeMenu, setActiveMenu] = useState<number>(0);

  const handleSetActiveMenu = (index: number) => {
    setActiveMenu(index);
  };

  const handleOpenSignOutConfirmationModal = () => {
    const modalElement = document.getElementById(
      "signout_confirmation_modal"
    ) as HTMLDialogElement;
    modalElement.showModal();
  };

  const handleCloseSignOutConfirmationModal = () => {
    const modalElement = document.getElementById(
      "signout_confirmation_modal"
    ) as HTMLDialogElement;
    modalElement.close();
  };

  return (
    <>
    <SidebarMobile />
      <div className="layout-container py-10 flex items-start space-x-4 w-full">
        <SidebarDesktop
          activeMenu={activeMenu}
          handleOpenSignOutConfirmationModal={
            handleCloseSignOutConfirmationModal
          }
          handleSetActiveMenu={handleSetActiveMenu}
        />
        {screenSize.width >= MIN_DESKTOP_WIDTH && getMenuContent(activeMenu)}
      </div>
      <dialog id="signout_confirmation_modal" className="modal">
        <div className="modal_box rounded-lg bg-[#F3F5F6] max-w-none w-[500px] flex flex-col items-center space-y-5 py-10">
          <div className="bg-primary bg-opacity-20 rounded-full p-2 w-fit">
            <PiWarningCircleBold color="#FF8200" size={36} />
          </div>
          <span className="text-2xl text-[#363739] font-bold">
            Are you sure ?
          </span>
          <div className="flex items-center space-x-4">
            <button className="btn btn-secondary btn-sm  text-white w-36">
              Yes
            </button>
            <button
              className="btn btn-secondary btn-sm btn-outline w-36"
              onClick={handleCloseSignOutConfirmationModal}
            >
              No
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default User;
