"use client";
import React from "react";
import { SignOutModal, SidebarMobile } from "@/components";

const User = () => {
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
