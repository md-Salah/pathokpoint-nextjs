"use client";
import {
  ProfitSummary,
  Sidebar,
  OrderSummary,
  DeliverySummary,
  StatisticBarChart,
  OrderTable,
} from "@/components";
import { RiNotification4Fill } from "react-icons/ri";
import React, {
  forwardRef,
  LegacyRef,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { dashboardDateOptions } from "@/constants/constants";
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarMinusFill } from "react-icons/bs";
import DatePicker from "react-datepicker";

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}


const Dashboard = () => {
  const [selectDate, onChange] = useState<Date | null>(null);
  const [activeDateOption, setActiveDateOption] = useState<string>(
    dashboardDateOptions[0].value
  );

  const CustomDateInput = React.forwardRef<HTMLButtonElement,CustomInputProps>(
    ({ value, onClick }, ref) => (
      <button
        type="button"
        className="border border-gray-300 rounded-md px-3 py-2 flex items-center gap-2 text-gray-500"
        onClick={onClick}
        ref={ref}
      >
        <BsCalendarMinusFill />
        {value || "Select Date"}
      </button>
    )
  );

  const handleChangeActiveDateOption = (option: string) => {
    if (option === activeDateOption) {
      return;
    }
    setActiveDateOption(option);
  };

  useEffect(() => {
    console.log("dateValue", selectDate);
  }, [selectDate]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] sm:w-[80%] my-8 mx-auto">
        <div className="w-full p-4 sm:p-8 bg-white rounded-md flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-semibold">Welcome Salauddin</h1>
              <span className="text-[#667085] text-lg tracking-wide">
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
                <div className="avatar">
                  <div className="w-8 relative">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="relative z-0 w-full rounded-full"
                    />
                    <span className="bg-[#22CAAD] block w-3 h-3 rounded-full absolute z-30 bottom-0 right-0"></span>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">Jay Hargudson</span>
                  <span className="text-xs text-[#4A4C56]">Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 p-1 border-[1px] border-[#E0E2E7] rounded-lg text-sm tracking-wide">
              {dashboardDateOptions.map((option) => (
                <div
                  className={` px-4 py-2 rounded-lg ${
                    option.value === activeDateOption &&
                    "font-bold bg-[#F0F1F3]"
                  } cursor-pointer ${
                    option.value !== activeDateOption &&
                    "hover:bg-[#f2f2f2] hover:font-semibold"
                  }`}
                  key={option.id}
                  onClick={() => handleChangeActiveDateOption(option.value)}
                >
                  <span>{option.title}</span>
                </div>
              ))}
            </div>
            <div>
              <input type="text" className="input rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <ProfitSummary />
            <OrderSummary />
            <DeliverySummary />
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-semibold">Inventory Management</h1>
            <div className="grid grid-cols-2 grid-flow-row gap-4 w-full">
              <div className="overflow-x-auto border-[#E6E6E6] border-[1px] rounded-lg">
                <table className="table w-full text-sm">
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
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col space-y-4 border-[#E6E6E6] border-[1px] rounded-lg p-4">
                <div>
                  <h4 className="text-xl text-black02 font-semibold">
                    Statistics
                  </h4>
                  <span>Income & Expenses</span>
                </div>
                <div className="w-full h-[300px]">
                  <StatisticBarChart />
                </div>
              </div>
              {/* <div className="flex flex-col space-y-4 border-[#E6E6E6] border-[1px] rounded-lg p-4">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-xl text-black02 font-semibold">
                      Recent Orders
                    </h4>
                    <span className="text-sm text-[#1A9882] font-bold bg-[#E9FAF7] px-2 py-1 rounded-lg">
                      +20 Orders
                    </span>
                  </div>
                  <div className="inline-block">
                    <DatePicker
                      onChange={onChange}
                      selected={selectDate}
                      
                      customInput={<CustomDateInput />}
                    />
                  </div>
                </div>
                <div className="overflow-x-auto border-[#E6E6E6] border-[1px] rounded-lg">
                  <OrderTable />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
