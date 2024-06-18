"use client";
import { Sidebar } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

type Image = { id: number; file: File; previewUrl: string };

const AddBook = () => {
  const fileInput1 = useRef<HTMLInputElement>(null);
  const fileInput2 = useRef<HTMLInputElement>(null);
  const fileInput3 = useRef<HTMLInputElement>(null);
  const fileInput4 = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<Image[]>([]);

  const handleChangeImage = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newImage: Image = {
      id,
      file: event.target.files?.[0] as File,
      previewUrl: URL.createObjectURL(event.target.files?.[0] as File),
    };

    setImages((prev) => [...prev, newImage]);
  };

  const handleDeleteImage = (id: number) => {
    setImages((prev) => {
      const allImages = prev.filter((img) => img.id !== id);
      return allImages;
    });
  };

  useEffect(() => {
    console.log("images", images);
  }, [images]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white rounded-md my-8 mx-auto w-[50%]">
        <h4 className="text-secondary-content text-base px-6 py-3 font-semibold">
          Add Books
        </h4>
        <div className="border-[1px] border-[#E6E6E6]"></div>
        <div className="px-14 py-8 space-y-8 text-[#6F6E77] text-sm">
          <div className="grid grid-cols-2 grid-flow-row gap-8">
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
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Product Name</label>
              <input type="text" className="input rounded-lg" />
            </div>
          </div>
          <div className="space-y-2">
            <label>Short Description</label>
            <div className="relative w-full">
              <textarea
                className="textarea textarea-lg w-full relative z-0"
                placeholder="Enter Short Description"
              ></textarea>
              <span className="absolute right-2 bottom-2 z-20 text-xs">
                0/150 Words
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>Slug</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Author</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Cover</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Edition</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Translator</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div></div>
            <div className="flex flex-col items-start space-y-2">
              <label>Regular Price</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Selling Price</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>In Stock</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Stock Quantity</label>
              <input type="text" className="input rounded-lg" />
            </div>
          </div>
          <div className="flex items-center space-x-14">
            <div className="space-y-2 flex flex-col items-start">
              <label>Manage Stock</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Pre-Order</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Shipping Required</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Used</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>Condition</label>
              <select className="select w-full max-w-xs">
                <option disabled selected></option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Publisher</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Edition</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Cover</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Language</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Country</label>
              <select className="select w-full max-w-xs">
                <option disabled selected></option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>ISBN</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>No. of Pages</label>
              <input type="text" className="input rounded-lg" />
            </div>
          </div>
          <div className="space-y-2">
            <label>Notes</label>
            <div className="relative w-full">
              <textarea
                className="textarea textarea-lg w-full relative z-0"
                placeholder="Notes"
              ></textarea>
              <span className="absolute right-2 bottom-2 z-20 text-xs">
                0/500 Words
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>Cost</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Weight in gm</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Stock Location</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Tags</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Row Column</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Shelf</label>
              <input type="text" className="input rounded-lg" />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Categories</label>
              <input type="text" className="input rounded-lg" />
            </div>
          </div>
          <div className="space-y-2">
            <label>Select Image Files</label>
            <input
              type="file"
              className="hidden"
              ref={fileInput1}
              onChange={(e) => handleChangeImage(1, e)}
              accept="image/*"
            />
            <input
              type="file"
              className="hidden"
              ref={fileInput2}
              onChange={(e) => handleChangeImage(2, e)}
              accept="image/*"
            />
            <input
              type="file"
              className="hidden"
              ref={fileInput3}
              onChange={(e) => handleChangeImage(3, e)}
              accept="image/*"
            />
            <input
              type="file"
              className="hidden"
              ref={fileInput4}
              onChange={(e) => handleChangeImage(4, e)}
              accept="image/*"
            />
            <div className="flex items-center space-x-8">
              {images.find((image) => image.id === 1) ? (
                <div className="relative">
                  <img
                    src={images.find((image) => image.id === 1)?.previewUrl}
                    className="w-32 h-24 rounded-lg relative"
                  />
                  <div
                    className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 p-1 rounded-full absolute z-30 top-1 right-1 cursor-pointer"
                    onClick={() => handleDeleteImage(1)}
                  >
                    <RxCross2 color="#f2f2f2" />
                  </div>
                </div>
              ) : (
                <div
                  className="bg-black05 w-32 h-24 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
                  onClick={() => fileInput1.current?.click()}
                >
                  <GoPlus size={56} className="mx-auto" />
                </div>
              )}
              {images.find((image) => image.id === 2) ? (
                <div className="relative">
                  <img
                    src={images.find((image) => image.id === 2)?.previewUrl}
                    className="w-32 h-24 rounded-lg relative"
                  />
                  <div
                    className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 p-1 rounded-full absolute z-30 top-1 right-1 cursor-pointer"
                    onClick={() => handleDeleteImage(2)}
                  >
                    <RxCross2 color="#f2f2f2" />
                  </div>
                </div>
              ) : (
                <div
                  className="bg-black05 w-32 h-24 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
                  onClick={() => fileInput2.current?.click()}
                >
                  <GoPlus size={56} className="mx-auto" />
                </div>
              )}
              {images.find((image) => image.id === 3) ? (
                <div className="relative">
                  <img
                    src={images.find((image) => image.id === 3)?.previewUrl}
                    className="w-32 h-24 rounded-lg relative"
                  />
                  <div
                    className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 p-1 rounded-full absolute z-30 top-1 right-1 cursor-pointer"
                    onClick={() => handleDeleteImage(3)}
                  >
                    <RxCross2 color="#f2f2f2" />
                  </div>
                </div>
              ) : (
                <div
                  className="bg-black05 w-32 h-24 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
                  onClick={() => fileInput3.current?.click()}
                >
                  <GoPlus size={56} className="mx-auto" />
                </div>
              )}
              {images.find((image) => image.id === 4) ? (
                <div className="relative">
                  <img
                    src={images.find((image) => image.id === 4)?.previewUrl}
                    className="w-32 h-24 rounded-lg relative"
                  />
                  <div
                    className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 p-1 rounded-full absolute z-30 top-1 right-1 cursor-pointer"
                    onClick={() => handleDeleteImage(4)}
                  >
                    <RxCross2 color="#f2f2f2" />
                  </div>
                </div>
              ) : (
                <div
                  className="bg-black05 w-32 h-24 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
                  onClick={() => fileInput4.current?.click()}
                >
                  <GoPlus size={56} className="mx-auto" />
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label>Description</label>
            <div className="relative w-full">
              <textarea
                className="textarea textarea-lg w-full relative z-0"
                placeholder="Enter Product Description"
              ></textarea>
              <span className="absolute right-2 bottom-2 z-20 text-xs">
                0/500 Words
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-flow-row gap-4">
            <div className="space-y-2 flex flex-col items-start">
              <label>In Stock</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Featured</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Pre-Order</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Draft</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Popular</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Must Read</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Vintage</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Islamic</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Translated</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Recommended</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div></div>
            <div></div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Is Big Sale</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div></div>
            <div></div>
            <div className="flex items-center space-x-2">
              <button className="btn btn-outline btn-black05 px-3 rounded-lg">Cancel</button>
              <button className="btn bg-primary text-white px-8 rounded-lg">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
