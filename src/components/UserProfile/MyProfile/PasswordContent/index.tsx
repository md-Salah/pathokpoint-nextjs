import React, { ChangeEvent } from "react";
import CodeInputForm from "./CodeInputFormModal";

const PasswordContent = () => {
  const inputs = Array.from({ length: 5 }, (_, i) => i);
  const handleOpenInputDigitsModal = () => {
    const modalElement = document.getElementById(
      "input_digits_modal"
    ) as HTMLDialogElement;
    modalElement.showModal();
  };

  const handleCloseInputDigitsModal = () => {
    const modalElement = document.getElementById(
      "input_digits_modal"
    ) as HTMLDialogElement;
    modalElement.close();
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const input = e.target;
    if (input.value.length === 1 && index < inputs.length - 1) {
      (
        document.getElementById(`input-${index + 1}`) as HTMLInputElement
      ).focus();
    }
  };
  return (
    <>
      <div className="bg-white rounded-lg w-full h-screen py-10 md:py-14">
        <div className="space-y-4 w-full md:w-1/2 px-5 md:mx-auto">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-black03">
              Current Password
            </label>
            <input
              type="text"
              placeholder="Enter Current Password"
              className="input input-bordered text-base text-black02 w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-black03">
              New Password
            </label>
            <input
              type="text"
              placeholder="Enter New Password"
              className="input input-bordered text-base text-black02"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-black03">
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="Enter Confirm Password"
              className="input input-bordered text-base text-black02"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:flex md:justify-end pt-14 px-5 md:px-0 md:mx-auto">
          <button
            className="btn btn-primary px-10 text-base w-full md:w-fit"
            onClick={handleOpenInputDigitsModal} 
          >
            Update
          </button>
        </div>
      </div>
      <dialog id="input_digits_modal" className="modal">
        <CodeInputForm
          handleInput={handleInput}
          inputs={inputs}
          onClose={handleCloseInputDigitsModal}
        />
      </dialog>
    </>
  );
};

export default PasswordContent;
