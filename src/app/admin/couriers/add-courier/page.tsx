"use client";
import { MultipleItemSelector, Sidebar } from "@/components";
import { SuggestionOpitonType } from "@/components/MultipleItemSelector";
import React, { useState } from "react";

const AddCourier = () => {
  const [includedCountries, setIncludedCountries] = useState<
    SuggestionOpitonType[]
  >([]);
  const [includedCities, setIncludedCities] = useState<SuggestionOpitonType[]>(
    []
  );
  const [excludedCities, setExcludedCities] = useState<SuggestionOpitonType[]>(
    []
  );
  const [value, setValue] = useState("");
  const countrySuggestions = [
    {
      id: 1,
      title: "Bangladesh",
    },
    {
      id: 2,

      title: "India",
    },
    {
      id: 3,

      title: "Japan",
    },
    {
      id: 4,

      title: "South Africa",
    },
    {
      id: 5,

      title: "Argentina",
    },
  ];

  const citySuggestions = [
    {
      id: 1,
      title: "Dhaka",
    },
    {
      id: 2,

      title: "Chittagong",
    },
    {
      id: 3,

      title: "Khulna",
    },
    {
      id: 4,

      title: "Rajshahi",
    },
    {
      id: 5,

      title: "Rangpur",
    },
  ];

  const countries = ["Africa", "Armenia", "Canada", "United States"];

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
        <h4 className="text-secondary-content text-base px-6 py-3 font-semibold">
          Add Courier
        </h4>
        <div className="border-[1px] border-[#E6E6E6]"></div>
        <div className="px-6 py-3 space-y-2 sm:px-14 sm:py-8 sm:space-y-8 text-[#6F6E77] text-xs sm:text-sm">
          <div className="grid grid-cols-2 grid-flow-row gap-3 sm:gap-8">
            <div className="flex flex-col items-start space-y-2">
              <label>ID</label>
              <span className="font-semibold">5b36385d-27bf-47dd</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Company Name</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Method Name</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Base Charge</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Weight Charge (kg)</label>
              <input
                type="text"
                className="input rounded-lg input-sm w-full sm:w-full sm:input-md"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Include Country</label>
              <MultipleItemSelector
                value={includedCountries}
                setValue={setIncludedCountries}
                suggestions={countrySuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Include City</label>

              <MultipleItemSelector
                value={includedCities}
                setValue={setIncludedCities}
                suggestions={citySuggestions}
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label>Exclude City</label>
              <MultipleItemSelector
                value={excludedCities}
                setValue={setExcludedCities}
                suggestions={citySuggestions}
              />
            </div>
            <div className="space-y-2 flex flex-col items-start">
              <label>Allow Cash on Delivery</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <button className="btn btn-outline btn-black05 px-3 rounded-lg">
              Cancel
            </button>
            <button className="btn bg-primary text-white px-8 rounded-lg">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourier;
