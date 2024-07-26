"use client";
import React from "react";
import SidebarDesktop from "../SidebarDesktop";
import SignOutModal from "../SignOutModal";

type Props = {
  children: React.ReactNode;
};

const SidebarDesktopLayout = ({ children }: Props) => {
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
      <div className="layout-container py-10 md:flex md:items-start space-x-4 w-full hidden">
        <SidebarDesktop
          handleOpenSignOutConfirmationModal={
            handleOpenSignOutConfirmationModal
          }
        />
        {children}
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

export default SidebarDesktopLayout;
