export type TabOption = { name: string; count?: number };

type Props = {
  tab: string;
  setTab: (val: string) => void;
  tabOptions: TabOption[];
};

const TabOptionsMobile = ({ tab, setTab, tabOptions }: Props) => {
  return (
    <div className="w-full bg-white px-5 border-b border-b-black06">
      <div className="py-5 flex items-center gap-3 w-full overflow-x-auto">
        {tabOptions.map(({ name, count }: TabOption) => (
          <div
            className={`py-2 px-4 ${
              tab === name
                ? "bg-primary text-white"
                : "bg-black07 text-[#777777]"
            } text-xs font-semibold rounded-2xl text-nowrap`}
            onClick={() => setTab(name)}
            key={name}
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

export default TabOptionsMobile;
