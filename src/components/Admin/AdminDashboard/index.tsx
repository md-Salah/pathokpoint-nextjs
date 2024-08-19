"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { RiNotification4Fill } from 'react-icons/ri';

import {
    DashboardOrderSummary, DeliverySummary, ProfitSummary, StatisticBarChart
} from '@/components';
import { dashboardDateOptions } from '@/constants/constants';

const DashboardContent = () => {
  const [selectDate, onChange] = useState<Date | null>(null);
  const [activeDateOption, setActiveDateOption] = useState<string>(
    dashboardDateOptions[0].value
  );

  const handleChangeActiveDateOption = (option: string) => {
    if (option === activeDateOption) {
      return;
    }
    setActiveDateOption(option);
  };
  return (
    <div className="w-full md:w-[80%] my-8 md:mx-auto">
      <div className="w-full py-4 px-5 md:p-8 bg-white rounded-md flex  flex-col space-y-6">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl md:text-3xl font-semibold">
              Welcome Salauddin
            </h1>
            <span className="text-[#667085] text-md md:text-lg tracking-wide">
              Welcome to your dashboard!
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="relative w-[2.1rem]">
              <RiNotification4Fill
                className="relative z-0"
                size={24}
                color="#858D9D"
              />
              <span className="block h-4 w-4 rounded-full text-center bg-primary absolute z-20 top-[-4px] right-0 text-xxs text-white">
                2
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="avatar online">
                <div className="w-8 rounded-full">
                  <Image src="/default/user.avif" width="48" height="48" alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Jay Hargudson</span>
                <span className="text-xs text-[#4A4C56]">Manager</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-4">
          <div className="flex items-center space-x-2 p-1 border-[1px] border-[#E0E2E7] rounded-lg text-sm tracking-wide">
            {dashboardDateOptions.map((option) => (
              <div
                className={`text-xs md:text-base px-4 py-2 rounded-lg ${
                  option.value === activeDateOption &&
                  "font-semibold bg-[#F0F1F3]"
                } cursor-pointer ${
                  option.value !== activeDateOption &&
                  "hover:bg-[#f2f2f2] hover:font-medium"
                }`}
                key={option.id}
                onClick={() => handleChangeActiveDateOption(option.value)}
              >
                <span>{option.title}</span>
              </div>
            ))}
          </div>
          <label className="input flex items-center gap-2 rounded-lg bg-[#F0F1F3]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-50"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </div>
        <div className="flex flex-col space-y-6 py-6">
          <ProfitSummary />
          <DashboardOrderSummary />
          <DeliverySummary />
        </div>
        <div className="flex flex-col space-y-4  px-2 md:px-0">
          <h1 className="text-xl md:text-3xl font-semibold">
            Inventory Management
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-y-auto border-[#E6E6E6] border-[1px] rounded-lg h-[400px]">
              <table className="table table-pin-rows w-full text-sm">
                <thead className="bg-base-200">
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Buy</th>
                    <th>Sell</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                  <tr>
                    <th>Islamic</th>
                    <th>5</th>
                    <th>670</th>
                    <th>1710</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col space-y-4 border-[#E6E6E6] border-[1px] rounded-lg p-4">
              <div>
                <h4 className="text-md md:text-xl text-black02 font-semibold">
                  Statistics
                </h4>
                <span className="text-sm md:text-base">Income & Expenses</span>
              </div>
              <div className="w-full h-[300px]">
                <StatisticBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
