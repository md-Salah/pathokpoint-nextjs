"use client";
import { ImageContainer, Pagination, Sidebar } from "@/components";
import { imageFolders } from "@/constants/constants";
import React, { useState } from "react";
import { CiFolderOn, CiMenuKebab } from "react-icons/ci";
import { RxCopy } from "react-icons/rx";
import { GoKebabHorizontal } from "react-icons/go";

const Images = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentFolder, setCurrentFolder] = useState<number>(1);

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const handleFolderChange = (currentFolder: number) => {
    setCurrentFolder(currentFolder);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] sm:w-[80%] bg-white rounded-lg my-8 mx-auto flex items-start">
        <div className="flex flex-col space-y-2 w-[20%] border-r min-h-screen p-6">
          {imageFolders.map((folder) => (
            <div
              className={`flex items-center space-x-2 hover:bg-[#E8E9EB] py-1 px-4 rounded-lg cursor-pointer ${
                currentFolder === folder.id && "bg-[#E8E9EB] font-semibold"
              }`}
              key={folder.id}
              onClick={() => handleFolderChange(folder.id)}
            >
              <CiFolderOn size={18} />
              <span>{folder.name}</span>
            </div>
          ))}
        </div>
        <div className="p-6">
          <div className="flex items-center p-2 border border-gray-300 rounded-lg w-[30%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l3.85 3.85a1 1 0 01-1.414 1.414l-3.85-3.85zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search File Name"
              className="ml-2 w-full border-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="py-6 grid grid-cols-6 grid-flow-row gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
              <ImageContainer />
            ))}
          </div>
          <div className="flex items-center space-x-3 justify-start">
            <span className="text-sm text-[#6F6E77]">The page you're on</span>
            <Pagination
              currentPage={currentPage}
              handleChangeCurrentPage={handleChangeCurrentPage}
              totalPages={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
