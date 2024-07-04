"use client";
import { Sidebar, StarRating } from "@/components";
import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlusCircle } from "react-icons/fi";

type Image = { id: number; file: File; previewUrl: string };

const AddReview = () => {
  const fileInput1 = useRef<HTMLInputElement>(null);
  const fileInput2 = useRef<HTMLInputElement>(null);
  const fileInput3 = useRef<HTMLInputElement>(null);
  const fileInput4 = useRef<HTMLInputElement>(null);
  const [productRating, setProductRating] = useState(0);
  const [timeRating, setTimeRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);
  const [websiteRating, setWebsiteRating] = useState(0);
  const [images, setImages] = useState<Image[]>([]);

  const handleRatingChange = (rating: number, type: string) => {
    switch (type) {
      case "Product":
        setProductRating(rating);
        break;
      case "Time":
        setTimeRating(rating);
        break;
      case "Delivery":
        setDeliveryRating(rating);
        break;
      case "Website":
        setWebsiteRating(rating);
        break;
      default:
        break;
    }
  };

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
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
        <h4 className="text-secondary-content text-base px-6 py-3 font-semibold">
          Add Review
        </h4>
        <div className="pt-4 px-6 flex flex-col space-y-4">
          <span className="text-sm text-black04">
            Date: 02 Jan, 2023 12:54 PM
          </span>
          <div className="w-full grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>Order ID</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Name</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
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
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
            <div className="flex items-center space-x-2 border border-black05 py-3 px-5 w-[80%] rounded-md">
              <span className="text-base">Product</span>
              <StarRating
                rating={productRating}
                handleRatingChange={handleRatingChange}
                ratingType="Product"
              />
            </div>
            <div className="flex items-center space-x-2 border border-black05 py-3 px-5 w-[80%] rounded-md">
              <span className="text-base">Delivery</span>
              <StarRating
                rating={deliveryRating}
                handleRatingChange={handleRatingChange}
                ratingType="Delivery"
              />
            </div>
            <div className="flex items-center space-x-2 border border-black05 py-3 px-5 w-[80%] rounded-md">
              <span className="text-base">Time</span>
              <StarRating
                rating={timeRating}
                handleRatingChange={handleRatingChange}
                ratingType="Time"
              />
            </div>
            <div className="flex items-center space-x-2 border border-black05 py-3 px-5 w-[80%] rounded-md">
              <span className="text-base">Website</span>
              <StarRating
                rating={websiteRating}
                handleRatingChange={handleRatingChange}
                ratingType="Website"
              />
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
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-3 sm:flex sm:items-center sm:space-x-4">
            {images.find((image) => image.id === 1) ? (
              <div className="relative">
                <img
                  src={
                    images.find((image) => image.id === 1)?.previewUrl as string
                  }
                  className="w-32 h-24 rounded-lg relative"
                  alt="preview image 1"
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
                className="border border-black05 w-32 h-24 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
                onClick={() => fileInput1.current?.click()}
              >
                <FiPlusCircle size={56} color="#CDCDCD" className="mx-auto" />
              </div>
            )}
            {images.find((image) => image.id === 2) ? (
              <div className="relative">
                <img
                  src={
                    images.find((image) => image.id === 2)?.previewUrl as string
                  }
                  className="w-32 h-24 rounded-lg relative"
                  alt="preview image 2"
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
                className="border border-black05 w-32 h-24 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
                onClick={() => fileInput2.current?.click()}
              >
                <FiPlusCircle size={56} color="#CDCDCD" className="mx-auto" />
              </div>
            )}
            {images.find((image) => image.id === 3) ? (
              <div className="relative">
                <img
                  src={
                    images.find((image) => image.id === 3)?.previewUrl as string
                  }
                  className="w-32 h-24 rounded-lg relative"
                  alt="preview image 2"
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
                className="border border-black05 w-32 h-24 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
                onClick={() => fileInput3.current?.click()}
              >
                <FiPlusCircle size={56} color="#CDCDCD" className="mx-auto" />
              </div>
            )}
            {images.find((image) => image.id === 4) ? (
              <div className="relative">
                <img
                  src={
                    images.find((image) => image.id === 4)?.previewUrl as string
                  }
                  className="w-32 h-24 rounded-lg relative"
                  alt="preview image 2"
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
                className="border border-black05 w-32 h-24 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
                onClick={() => fileInput4.current?.click()}
              >
                <FiPlusCircle size={56} color="#CDCDCD" className="mx-auto" />
              </div>
            )}
          </div>
          <div className="w-full flex items-center space-x-2 justify-end">
            <button className="btn btn-black05 btn-outline">Cancel</button>
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
