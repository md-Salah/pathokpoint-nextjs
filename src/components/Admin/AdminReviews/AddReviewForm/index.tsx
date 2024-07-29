import { StarRating } from "@/components";
import { RxCross2 } from "react-icons/rx";
import { GoPlusCircle } from "react-icons/go";
import { RefObject } from "react";
import { Image } from "@/app/admin/reviews/add-review/page";

type Props = {
  fileRefs: {
    fileInput1: RefObject<HTMLInputElement | null>;
    fileInput2: RefObject<HTMLInputElement | null>;
    fileInput3: RefObject<HTMLInputElement | null>;
    fileInput4: RefObject<HTMLInputElement | null>;
  };
  ratings: {
    productRating: number;
    timeRating: number;
    deliveryRating: number;
    websiteRating: number;
  };
  handleRatingChange: (rating: number, type: string) => void;
  handleChangeImage: (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleDeleteImage: (id: number) => void;
  images: Image[];
};

const AddReviewForm = ({
  fileRefs,
  ratings,
  handleChangeImage,
  handleDeleteImage,
  handleRatingChange,
  images,
}: Props) => {
  const { fileInput1, fileInput2, fileInput3, fileInput4 } = fileRefs;
  const { productRating, timeRating, websiteRating, deliveryRating } = ratings;
  return (
    <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
      <h4 className="text-secondary-content text-base px-6 py-3 font-medium border-b border-b-black06">
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
            ref={fileInput1 as any}
            onChange={(e) => handleChangeImage(1, e)}
            accept="image/*"
          />
          <input
            type="file"
            className="hidden"
            ref={fileInput2 as any}
            onChange={(e) => handleChangeImage(2, e)}
            accept="image/*"
          />
          <input
            type="file"
            className="hidden"
            ref={fileInput3 as any}
            onChange={(e) => handleChangeImage(3, e)}
            accept="image/*"
          />
          <input
            type="file"
            className="hidden"
            ref={fileInput4 as any}
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
                className="w-32 h-20 rounded-lg relative"
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
              className="border border-dashed border-black05 w-32 h-20 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
              onClick={() => fileInput1.current?.click()}
            >
              <GoPlusCircle size={42} color="#CDCDCD" className="mx-auto" />
            </div>
          )}
          {images.find((image) => image.id === 2) ? (
            <div className="relative">
              <img
                src={
                  images.find((image) => image.id === 2)?.previewUrl as string
                }
                className="w-32 h-20 rounded-lg relative"
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
              className="border border-dashed border-black05 w-32 h-20 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
              onClick={() => fileInput2.current?.click()}
            >
              <GoPlusCircle size={42} color="#CDCDCD" className="mx-auto" />
            </div>
          )}
          {images.find((image) => image.id === 3) ? (
            <div className="relative">
              <img
                src={
                  images.find((image) => image.id === 3)?.previewUrl as string
                }
                className="w-32 h-20 rounded-lg relative"
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
              className="border border-dashed border-black05 w-32 h-20 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
              onClick={() => fileInput3.current?.click()}
            >
              <GoPlusCircle size={42} color="#CDCDCD" className="mx-auto" />
            </div>
          )}
          {images.find((image) => image.id === 4) ? (
            <div className="relative">
              <img
                src={
                  images.find((image) => image.id === 4)?.previewUrl as string
                }
                className="w-32 h-20 rounded-lg relative"
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
              className="border border-dashed border-black05 w-32 h-20 rounded-lg flex flex-col justify-center cursor-pointer opacity-80 hover:opacity-100"
              onClick={() => fileInput4.current?.click()}
            >
              <GoPlusCircle size={42} color="#CDCDCD" className="mx-auto" />
            </div>
          )}
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

export default AddReviewForm;
