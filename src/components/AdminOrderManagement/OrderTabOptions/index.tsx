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
    <div className="border-b-[1px] border-[#6F6E77] text-sm sm:text-base border-opacity-20 w-full">
      <div className="flex items-center space-x-4 overflow-x-auto">
        {tabOptions.map((tab) => (
          <button
            key={tab.name}
            className={`py-2 px-4 ${
              activeTab === tab.name
                ? "text-primary border-b-2 border-primary font-bold"
                : "text-[#363739]"
            }`}
            onClick={() => handleSetActionOption(tab.name)}
          >
            {tab.name}({tab.count})
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderTabOptions;
