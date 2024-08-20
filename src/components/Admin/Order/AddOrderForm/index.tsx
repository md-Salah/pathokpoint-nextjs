import React from "react";

const AddOrderForm = () => {
  return (
    <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
      <h4 className="text-secondary-content text-base px-6 py-3 font-semibold">
        Create Order
      </h4>
      <div className="border-[1px] border-[#E6E6E6]"></div>
      <div className="px-6 py-3 space-y-2 sm:px-14 sm:py-8 sm:space-y-8 text-[#6F6E77] text-xs sm:text-sm">
        <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
          <div className="flex flex-col items-start space-y-2">
            <label>ID</label>
            <span className="font-semibold">5b36385d-27bf-47dd</span>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Date</label>
            <span className="font-semibold">02 Jan, 2023</span>
          </div>
        </div>
        <div className="border-b-[1px] border-b-[#E6E6E6] pb-2">
          <h4 className="text-secondary-content text-sm font-medium">
            Order Items
          </h4>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-8">
          <div className="flex flex-col items-start space-y-2">
            <label>Book Name</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Slug</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>ID</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Condition</label>
            <select className="select w-full max-w-xs">
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Regular Price</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Selling Price</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label>Note</label>
          <div className="relative w-[90%]">
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
            <label>Coupon ID</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Address ID</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Courier ID</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Invoice</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>New Book Total</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Old Book Total</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Shipping Charge</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Weight Charge</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Total</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Discount</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Paid</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Payment Recieved</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Due</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Refunded</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Tracking ID</label>
            <select className="select w-full max-w-xs">
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Order Status</label>
            <select className="select w-full max-w-xs">
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Transactions</label>
            <select className="select w-full max-w-xs">
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Coupon</label>
            <select className="select w-full max-w-xs">
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Customer</label>
            <select className="select w-full max-w-xs">
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Address</label>
            <select className="select w-full max-w-xs">
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Courier</label>
            <select className="select w-full max-w-xs">
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Shipping Cost</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>COD Recievable</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>COD Recieved</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Cost of Good New</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Cost of Good Old</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Additional Cost</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Gross Profit</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-3 sm:flex sm:items-center sm:space-x-14">
          <div className="space-y-2 flex flex-col items-start">
            <label>In Trash</label>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
          <div className="space-y-2 flex flex-col items-start">
            <label>Is Remove</label>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
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

export default AddOrderForm;
