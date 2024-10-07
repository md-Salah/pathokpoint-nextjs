interface Props {
  title: string;
  value: number;
  currency?: string;
}

const Box = ({ title, value, currency }: Props) => (
  <div className="border p-4 rounded space-y-3">
    <h4 className="font-medium text-[#777980]">{title}</h4>
    <h2 className="font-semibold text-[#1D1F2C] flex items-center gap-1">
      <span className="text-2xl">{currency}</span>
      <span className="text-3xl">{value.toLocaleString("en-IN")}</span>
    </h2>
  </div>
);

export default Box;
