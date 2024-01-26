import Link from "next/link";
import Timer from "./Timer";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="flex items-center mt-3 mb-5 flex-col sm:flex-row">
      <h1 className="text-7xl flex-1 text-white font-semibold">{title}</h1>
      <div className="pt-5 pb-2 sm:pt-0 sm:pb-0">
        <Timer />
      </div>
    </div>
  );
};

export default Title;
