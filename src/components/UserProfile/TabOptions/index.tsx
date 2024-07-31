"use client";
export type TabOption = { name: string; count?: number };

type Props = {
  tab: string;
  setTab: (val: string) => void;
  tabOptions: TabOption[];
};

const TabOptions = ({ tab, setTab, tabOptions }: Props) => {
  return (
    <div className="w-full bg-white pt-8 pb-3">
      <div className="border-b border-b-[#E6E6E6] w-full flex items-center justify-evenly mx-auto overflow-x-auto ">
        {tabOptions.map(({ name, count }: TabOption) => (
          <div
            className={`${
              tab === name
                ? "border-b-4 border-b-primary text-primary"
                : "text-black04"
            } text-sm font-semibold pb-2 cursor-pointer`}
            key={name}
            onClick={() => setTab(name)}
          >
            {count ? (
              <span>
                {name} ({count})
              </span>
            ) : (
              <span>{name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;
