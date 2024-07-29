"use client";
import { Image } from "@/app/admin/product-management/authors/add-author/page";
import React, { RefObject } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  dates: {
    birthDate: Date | null;
    deathDate: Date | null;
  };
  fileRefs: {
    fileInput1: RefObject<HTMLInputElement | null>;
    fileInput2: RefObject<HTMLInputElement | null>;
  };
  handleChangeProfileImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeBannerImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteProfileImage: () => void;
  handleDeleteBannerImage: () => void;
  profileImage: Image | null;
  bannerImage: Image | null;
  handleChangeBirthDate: (date: Date | null) => void;
  handleChangeDeathDate: (date: Date | null) => void;
};

const AddAuthorForm = ({
  fileRefs,
  handleChangeBannerImage,
  handleChangeProfileImage,
  handleDeleteBannerImage,
  handleDeleteProfileImage,
  profileImage,
  bannerImage,
  dates,
  handleChangeBirthDate,
  handleChangeDeathDate,
}: Props) => {
  const { fileInput1, fileInput2 } = fileRefs;
  const { birthDate, deathDate } = dates;
  return (
    <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
      <h4 className="text-secondary-content text-base px-6 py-3 font-medium">
        Add Author
      </h4>
      <div className="border-[1px] border-[#E6E6E6]"></div>
      <div className="px-6 py-3 space-y-2 sm:px-14 sm:py-8 sm:space-y-8 text-[#6F6E77] text-xs sm:text-sm">
        <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
          <div className="flex flex-col items-start space-y-2">
            <label>ID</label>
            <span className="font-medium">5b36385d-27bf-47dd</span>
          </div>

          <div className="flex flex-col items-start space-y-2">
            <label>Date</label>
            <span className="font-medium">02 Jan, 2023</span>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Followers</label>
            <span className="font-medium">1900</span>
          </div>
          <div></div>
          <div className="flex flex-col items-start space-y-2">
            <label>Name</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Book Published</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label>Description</label>
          <div className="relative w-full md:w-[90%]">
            <textarea
              className="textarea textarea-sm sm:textarea-lg w-full relative z-0"
              placeholder="Enter Description"
            ></textarea>
            <span className="absolute right-2 bottom-2 z-20 text-xs">
              0/150 Words
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-8">
          <div className="flex flex-col items-start space-y-2 min-w-full">
            <label>Birth Date</label>
            <DatePicker
              selected={birthDate}
              onChange={handleChangeBirthDate}
              className="input input-md rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Death Date</label>
            <DatePicker
              selected={deathDate}
              onChange={handleChangeDeathDate}
              className="input input-md rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>City</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Country</label>
            <input
              type="text"
              className="input rounded-lg  input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Slug</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-start sm:justify-between">
          <div className="space-y-2">
            <label>Profile Image</label>
            <input
              type="file"
              className="hidden"
              ref={fileInput1 as any}
              onChange={handleChangeProfileImage}
              accept="image/*"
            />
            <div className="w-64 space-y-2">
              <div
                className="w-full py-2 flex items-center space-x-2 justify-center bg-[#F6F6F6] 
                border-[1px] border-black05 rounded-lg border-dashed cursor-pointer text-[#6F6E77]"
                onClick={() => fileInput1.current?.click()}
              >
                <MdOutlineFileUpload size={28} />
                <span>Upload Picture</span>
              </div>
              {profileImage && (
                <div className="relative">
                  <img
                    className="w-full rounded-lg relative"
                    src={profileImage?.previewUrl}
                  />
                  <div
                    className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 p-1 rounded-full absolute z-30 top-1 right-1 cursor-pointer"
                    onClick={handleDeleteProfileImage}
                  >
                    <RxCross2 color="#f2f2f2" size={18} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-64 space-y-2">
            <div className="space-y-2">
              <label>Banner Image</label>
              <input
                type="file"
                className="hidden"
                ref={fileInput2 as any}
                onChange={handleChangeBannerImage}
                accept="image/*"
              />
              <div
                className="w-full py-2 flex items-center space-x-2 justify-center bg-[#F6F6F6] 
                border-[1px] border-black05 rounded-lg border-dashed cursor-pointer text-[#6F6E77]"
                onClick={() => fileInput2.current?.click()}
              >
                <MdOutlineFileUpload size={28} />
                <span>Upload Picture</span>
              </div>
            </div>
            {bannerImage && (
              <div className="relative">
                <img
                  className="w-full rounded-lg relative"
                  src={bannerImage?.previewUrl}
                />
                <div
                  className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 p-1 rounded-full absolute z-30 top-1 right-1 cursor-pointer"
                  onClick={handleDeleteBannerImage}
                >
                  <RxCross2 color="#f2f2f2" size={18} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <label>In Popular</label>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>
        <div className="flex items-center justify-end space-x-2">
          <button className="btn btn-sm sm:btn-md btn-outline btn-black05 sm:px-5 rounded-lg">
            Cancel
          </button>
          <button className="btn btn-sm sm:btn-md btn-primary text-white sm:px-8 rounded-lg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAuthorForm;
