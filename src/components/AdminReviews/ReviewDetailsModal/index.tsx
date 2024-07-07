import React from "react";
import { RiStarFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";

type Props = {
  onClose: () => void;
};

const ReviewDetailsModal = ({ onClose }: Props) => {
  return (
    <div className="modal-box rounded-xl flex flex-col space-y-6 max-w-none w-[600px]">
      <div className="flex justify-end cursor-pointer" onClick={onClose}>
        <RxCrossCircled
          size={18}
          className="btn btn-circle btn-sm"
          color="#F2213A"
        />
      </div>
      <div className="flex flex-col space-y-6 py-6 px-12">
        <span className="text-xs text-black04">
          Date: 02 Jan, 2023 12:54 PM
        </span>
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-black04">Order ID</span>
            <span className="text-sm text-[#2B2B2B]">Order#1234</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-black04">Order ID</span>
            <span className="text-sm text-[#2B2B2B]">Order#1234</span>
          </div>
        </div>
        <div>
          <div className="flex items-start space-x-3">
            <img
              src="/default/user.avif"
              alt="User thumbnail"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <span className="text-base font-bold">Fahad Hassan</span>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500 flex items-center">
                  {Array(4)
                    .fill(4)
                    .map((_, i) => (
                      <RiStarFill color="#F2AE14" size={20} key={i} />
                    ))}
                </span>
                <span className="text-black04 text-sm">(Average Rating)</span>
              </div>
            </div>
          </div>
          <p className="py-4 text-sm text-[#363739]">
            তাদের থেকে এটা দ্বিতীয় বার বই নিয়া দেখছি বই দেয়ার বই গুলো বেশ
            ভালো দেখেছি বেশ ভালো না লাগলে আপনি না নিতে পারেন এটা সবচেয়ে ভালো
            দিক আমার সবারই নিতে আশা করি বেশি স্বচ্ছন্দ বোধ করবো তবে সবচেয়ে ভালো
            দিক হচ্ছে তাদের সার্ভিস অনেক ভালো আপনি নিশ্চিন্তে নিতে পারেন শুধু
            দামের দিক একটু বিবেচনা রাখবেন পাঠক পছন্দ অনেক ধন্যবাদ এই বইগুলো
            দেবার জন্য
          </p>
          <div className="flex items-center space-x-3 flex-wrap">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s"
              alt="Book 1"
              className="rounded-lg w-14"
            />
            <img
              src="https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
              alt="Book 2"
              className="rounded-lg w-14"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&s"
              alt="Book 3"
              className="rounded-lg w-14"
            />
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-4 pt-8">
            <div className="flex items-center justify-between w-[80%]">
              <span>Product</span>
              <span className="flex items-center">
                {Array(5)
                  .fill(5)
                  .map((_, i) => (
                    <RiStarFill color="#F2AE14" size={20} key={i} />
                  ))}
              </span>
            </div>
            <div className="flex items-center justify-between w-[70%]">
              <span>Delivery</span>
              <span className="flex items-center">
                {Array(4)
                  .fill(4)
                  .map((_, i) => (
                    <RiStarFill color="#F2AE14" size={20} key={i} />
                  ))}
              </span>
            </div>
            <div className="flex items-center justify-between w-[80%]">
              <span>Time</span>
              <span className="flex items-center">
                {Array(5)
                  .fill(5)
                  .map((_, i) => (
                    <RiStarFill color="#F2AE14" size={20} key={i} />
                  ))}
              </span>
            </div>
            <div className="flex items-center justify-between w-[70%]">
              <span>Website</span>
              <span className="flex items-center">
                {Array(4)
                  .fill(4)
                  .map((_, i) => (
                    <RiStarFill color="#F2AE14" size={20} key={i} />
                  ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailsModal;
