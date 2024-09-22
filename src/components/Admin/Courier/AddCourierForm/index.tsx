import React from 'react';

import MultipleItemSelector from '@/components/MultiSelect';

type Props = {
  includedCountries: any[];
  setIncludedCountries: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  includedCities: any[];
  setIncludedCities: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  excludedCities: any[];
  setExcludedCities: React.Dispatch<
    React.SetStateAction<any[]>
  >;
  countrySuggestions: any[];
  citySuggestions: any[];
};

const AddCourierForm = ({
  includedCountries,
  setIncludedCountries,
  includedCities,
  setIncludedCities,
  excludedCities,
  setExcludedCities,
  countrySuggestions,
  citySuggestions,
}: Props) => {
  return (
    <div className="bg-white rounded-md my-8 mx-auto w-[95%] sm:w-[50%]">
      <h4 className="text-secondary-content text-base px-6 py-3 font-medium">
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
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Method Name</label>
            <input
              type="text"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Base Charge</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label>Weight Charge (kg)</label>
            <input
              type="number"
              className="input rounded-lg input-sm w-full sm:w-[80%] sm:input-md"
            />
          </div>
          {/* <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Include Country</label>
            <MultipleItemSelector
              value={includedCountries}
              setValue={setIncludedCountries}
              suggestions={countrySuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Include City</label>

            <MultipleItemSelector
              value={includedCities}
              setValue={setIncludedCities}
              suggestions={citySuggestions}
            />
          </div>
          <div className="flex flex-col items-start space-y-2 w-full md:w-[80%]">
            <label>Exclude City</label>
            <MultipleItemSelector
              value={excludedCities}
              setValue={setExcludedCities}
              suggestions={citySuggestions}
            />
          </div> */}
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
  );
};

export default AddCourierForm;
