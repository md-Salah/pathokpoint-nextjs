"use client";
import React, { useEffect, useState } from "react";
import {
  Following,
  MyOrder,
  MyProfile,
  MyReviews,
  SidebarDesktop,
  SignOutModal,
  SidebarMobile,
  Wishlist,
} from "@/components";

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
      <SidebarMobile
        handleOpenSignOutConfirmationModal={handleOpenSignOutConfirmationModal}
      />
      <div className="layout-container py-10 flex items-start space-x-4 w-full">
        <SidebarDesktop
          activeMenu={activeMenu}
          handleOpenSignOutConfirmationModal={
            handleOpenSignOutConfirmationModal
          }
          handleSetActiveMenu={handleSetActiveMenu}
        />
        <div className="hidden md:block md:w-full">
          {getMenuContent(activeMenu)}
        </div>
      </div>
      <dialog id="signout_confirmation_modal" className="modal">
        <SignOutModal
          handleCloseSignOutConfirmationModal={
            handleCloseSignOutConfirmationModal
          }
        />
      </dialog>
    </>
  );
};

export default User;
