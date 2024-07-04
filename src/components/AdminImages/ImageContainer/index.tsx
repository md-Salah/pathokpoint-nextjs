import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { RxCopy } from "react-icons/rx";

const ImageContainer = () => {
  return (
    <div className="max-w-xs group w-40">
      <div className="relative">
        <img
          src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
          alt="File Thumbnail"
          className="w-full h-40 object-cover group-hover:opacity-70 rounded-lg relative group-hover:z-0"
        />
        <div
          className="w-full dropdown hidden absolute inset-0 p-2 group-hover:flex group-hover:items-start group-hover:justify-end group-hover:cursor-pointer group-hover:z-10"
          onClick={() => console.log("Kebab Clicked")}
        >
          <GoKebabHorizontal
            tabIndex={0}
            role="button"
            size={20}
            color="#ffffff"
            fontWeight={600}
          />
          <ul
            tabIndex={0}
            className="dropdown-content z-10 menu p-1 shadow bg-white rounded-box w-36"
          >
            <li>
              <a>Copy</a>
            </li>
            <li>
              <a>Delete</a>
            </li>
            <li>
              <a>Out of Stock</a>
            </li>
          </ul>
        </div>
        <div className="absolute inset-0 hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:z-10">
          <button className="btn btn-xs btn-white text-primary flex items-center">
            <RxCopy size={16} />
            Copy Link
          </button>
        </div>
      </div>
      <div className="mt-2 text-center text-sm">
        <p className="text-black02">Mohakashe Avizaan.jpg</p>
        <p className="text-black04">1080X1080</p>
      </div>
    </div>
  );
};

export default ImageContainer;
