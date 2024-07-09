import React from "react";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { IoTransgenderSharp } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

const PersonalInformationContent = () => {
  return (
    <div className="w-full bg-white rounded-lg min-h-screen py-14 px-20">
      <div className="avatar relative w-32">
        <div className="ring-primary w-full rounded-full ring ring-offset-4">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          <div className="absolute bottom-0 h-[30%] bg-primary bg-opacity-30 rounded-b-full w-[90%] cursor-pointer hover:z-20 left-[5%]">
            <RiPencilFill color="#ffffff" size={28} className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-7 pt-10">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            First Name
          </label>
          <input
            type="text"
            value={"Tanvir Rayhan"}
            placeholder="Enter First Name"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            User Name
          </label>
          <input
            type="text"
            placeholder="Enter User Name"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            Email Address
          </label>
          <input
            type="text"
            placeholder="Enter Email Address"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            Date of Birth
          </label>
          <input
            type="text"
            placeholder="Enter Date of Birth"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="input input-bordered text-base text-black02"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="form-control">
            <label className="label cursor-pointer bg-black07 border border-black05 rounded px-2">
              <div className="flex items-center space-x-1 pr-2">
                <IoIosMale size={20} />
                <span>Male</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary radio-sm"
                defaultChecked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer bg-black07 border border-black05 rounded px-2">
              <div className="flex items-center space-x-1 pr-2">
                <IoIosFemale size={20} />
                <span>Female</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary radio-sm"
                defaultChecked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer bg-black07 border border-black05 rounded px-2">
              <div className="flex items-center space-x-1 pr-2">
                <IoTransgenderSharp size={20} />
                <span>Others</span>
              </div>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary radio-sm"
                defaultChecked
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-14">
        <button className="btn btn-primary px-10 text-base">Update</button>
      </div>
    </div>
  );
};

export default PersonalInformationContent;
