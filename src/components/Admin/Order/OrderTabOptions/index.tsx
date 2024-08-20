import React from "react";

export type TabOption = {
  name: string;
  count: number;
};

type Props = {
  tabOptions: TabOption[];
  handleSetActionOption: (id: string) => void;
  activeTab: string;
};

const OrderTabOptions = ({
  tabOptions,
  handleSetActionOption,
  activeTab,
}: Props) => {
  return (
    <div className="border-b-[1px] border-[#6F6E77] text-sm sm:text-base border-opacity-20 w-full flex items-center justify-between">
      <div className="flex items-center space-x-4 overflow-x-auto">
        {tabOptions.map((tab) => (
          <button
            key={tab.name}
            className={`py-2 px-4 text-sm ${
              activeTab === tab.name
                ? "text-primary border-b-2 border-primary font-semibold"
                : "text-black02 font-normal"
            }`}
            onClick={() => handleSetActionOption(tab.name)}
          >
            {tab.name}({tab.count})
          </button>
        ))}
      </div>
      <select className="select max-w-xs select-sm select-bordered">
        <option disabled selected>
          More
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </div>
  );
};

export default OrderTabOptions;
