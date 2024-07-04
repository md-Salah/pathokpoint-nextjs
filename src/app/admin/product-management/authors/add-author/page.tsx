"use client";
import { Sidebar } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

type Image = { file: File; previewUrl: string };

const AddAuthor = () => {
  const fileInput1 = useRef<HTMLInputElement>(null);
  const fileInput2 = useRef<HTMLInputElement>(null);

  const [profileImage, setProfileImage] = useState<Image | null>(null);
  const [bannerImage, setBannerImage] = useState<Image | null>(null);

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
        <h4 className="text-secondary-content text-base px-6 py-3 font-semibold">
          Add Author
        </h4>
        <div className="border-[1px] border-[#E6E6E6]"></div>
        <div className="px-6 py-3 space-y-2 sm:px-14 sm:py-8 sm:space-y-8 text-[#6F6E77] text-xs sm:text-sm">
          <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>ID</label>
              <span className="font-semibold">5b36385d-27bf-47dd</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Public ID</label>
              <span className="font-semibold">5b36385d-27bf-47dd</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Book Sold</label>
              <span className="font-semibold">1900</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Date</label>
              <span className="font-semibold">02 Jan, 2023</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>SKU</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Product Name</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label>Short Description</label>
            <div className="relative w-full">
              <textarea
                className="textarea textarea-sm sm:textarea-lg w-full relative z-0"
                placeholder="Enter Short Description"
              ></textarea>
              <span className="absolute right-2 bottom-2 z-20 text-xs">
                0/150 Words
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>Birth Date</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Death Date</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>City</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Country</label>
              <input
                type="text"
                className="input rounded-lg  input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Slug</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-start sm:justify-between">
            <div className="space-y-2">
              <label>Profile Image</label>
              <input
                type="file"
                className="hidden"
                ref={fileInput1}
                onChange={(e) =>
                  setProfileImage({
                    file: e.target.files?.[0] as File,
                    previewUrl: URL.createObjectURL(
                      e.target.files?.[0] as File
                    ),
                  })
                }
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
                      onClick={() => setProfileImage(null)}
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
                  ref={fileInput2}
                  onChange={(e) =>
                    setBannerImage({
                      file: e.target.files?.[0] as File,
                      previewUrl: URL.createObjectURL(
                        e.target.files?.[0] as File
                      ),
                    })
                  }
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
                    onClick={() => setBannerImage(null)}
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
            <button className="btn btn-sm sm:btn-md btn-outline btn-black05 sm:px-3 rounded-lg">
              Cancel
            </button>
            <button className="btn btn-sm sm:btn-md bg-primary text-white sm:px-8 rounded-lg">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAuthor;
