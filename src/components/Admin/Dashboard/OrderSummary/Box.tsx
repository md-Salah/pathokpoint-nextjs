interface Props {
  title: string;
  value: number;
  tooltip?: string;
  currency?: string;
}

const Box = ({ title, value, tooltip, currency }: Props) => (
  <div className="tooltip tooltip-bottom" data-tip={tooltip}>
    <div className="border p-4 rounded space-y-3 overflow-x-scroll">
      <h4 className="font-medium text-[#777980] text-left text-base">
        {title}
      </h4>
      <h2 className="font-semibold text-[#1D1F2C] flex items-center gap-1">
        <span className="text-xl sm:text-2xl">{currency}</span>
        <span className="text-2xl sm:text-3xl">
          {value.toLocaleString("en-IN")}
        </span>
      </h2>
    </div>
  </div>
);

export default Box;
