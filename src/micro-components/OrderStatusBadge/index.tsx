import { title } from '@/utils';

const bg = (status: string): string => {
  switch (status) {
    case "pending":
      return "bg-[#FFF3CD] text-[#856404]";
    case "processing":
      return "bg-[#F5C6CB] text-[#721C24]";
    case "on-delivery":
      return "bg-[#C2DFFF] text-[#157892]";
    case "delivered":
      return "bg-[#DFF5E3] text-[#28A745]";
    case "cancelled":
      return "bg-[#FFD5D5] text-[#D9534F]";
    default:
      return "bg-[#F0F0F0] text-[#6C757D]";
  }
};

const bgCircle = (status: string): string => {
  switch (status) {
    case "pending":
      return "bg-[#856404]";
    case "processing":
      return "bg-[#721C24]";
    case "on-delivery":
      return "bg-[#157892]";
    case "delivered":
      return "bg-[#28A745]";
    case "cancelled":
      return "bg-[#D9534F]";
    default:
      return "bg-[#6C757D]";
  }
};

type Props = {
  status: string;
};

const OrderStatusBadge = ({ status }: Props) => {
  return (
    <div
      className={`rounded-2xl px-3 py-1 w-fit flex items-center gap-2 font-medium text-xs
      ${bg(status)}
    `}
    >
      <div
        className={`rounded-full w-3 h-3
        ${bgCircle(status)}
        `}
      ></div>
      {title(status.replace(/-/g, " "))}
    </div>
  );
};

export default OrderStatusBadge;
