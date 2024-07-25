"use client";
import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { IoTransgenderSharp } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

type Image = { file: File; previewUrl: string };

const PersonalInformationContent = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [dateofBirth, setDateofBirth] = useState<Date | null>(null);
  const [profileImage, setProfileImage] = useState<Image | null>(null);

  const handleChangeProfileImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newImage: Image = {
      file: event.target.files?.[0] as File,
      previewUrl: URL.createObjectURL(event.target.files?.[0] as File),
    };

    setProfileImage(newImage);
  };
  return (
    <div className="w-full bg-white rounded-lg min-h-screen py-10 px-5 md:py-14 md:px-20">
      <div className="w-full flex justify-center md:block">
        <div className="avatar relative w-28 md:w-32">
          <div className="ring-primary w-full rounded-full ring ring-offset-4 group">
            <img
              src={
                profileImage !== null
                  ? profileImage.previewUrl
                  : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
            />
            <div
              className="absolute bottom-0 h-[30%] bg-primary bg-opacity-30 rounded-b-full w-[90%] cursor-pointer hover:z-20 left-[5%] hidden group-hover:block"
              onClick={() => fileInput.current?.click()}
            >
              <RiPencilFill color="#ffffff" size={28} className="mx-auto" />
            </div>
            <input
              type="file"
              className="hidden"
              ref={fileInput}
              onChange={handleChangeProfileImage}
              accept="image/*"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 grid-flow-row md:gap-7 pt-10">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-black03">
            First Name
          </label>
          <input
            type="text"
            value={"Tanvir Rayhan"}
            placeholder="Enter First Name"
            className="input input-bordered text-base text-black02"
            onChange={() => {}}
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
          <DatePicker
            selected={dateofBirth}
            onChange={(date: Date | null) => setDateofBirth(date as Date)}
            placeholderText="Enter Date of Birth"
            className="input input-bordered w-full outline-none text-sm sm:text-base"
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
      <div className="w-full md:flex md:justify-end pt-14">
        <button className="btn btn-primary px-10 text-base w-full md:w-fit">Update</button>
      </div>
    </div>
  );
};

export default PersonalInformationContent;
