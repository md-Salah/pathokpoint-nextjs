import { title } from '@/utils';

const bg = (status: string): string => {
  switch (status) {
    case "pending-payment":
      return "bg-[#FFF1CE] text-[#FFC327]";
    case "delivered":
      return "bg-[#CEFFEA] text-[#02BF6C]";
    case "on-delivery":
      return "bg-[#C2E6FF] text-[#157892]";
    case "cancelled":
      return "bg-[#FFD3D3] text-[#EE485C]";
    case "order-confirmed":
      return "bg-[#E0FFE3] text-[#2A9D32]";
    case "processing":
      return "bg-[#FFF3E0] text-[#F57C00]";
    case "pending-condition-confirmation":
      return "bg-[#FFF0F6] text-[#D81B60]";
    case "customer-confirmed":
      return "bg-[#EBF5FF] text-[#007BFF]";
    case "packaging-completed":
      return "bg-[#F3F4F6] text-[#374151]";
    case "completed":
      return "bg-[#E0FFFD] text-[#00A79D]";
    case "returned":
      return "bg-[#FFEDED] text-[#E74C3C]";
    case "on-hold":
      return "bg-[#FDF6E3] text-[#B48D00]";
    case "trash":
      return "bg-[#F2F2F2] text-[#5A5A5A]";
    default:
      return "bg-[#FFFFFF] text-[#000000]";
  }
};

const bgCirle = (status: string): string => {
  switch (status) {
    case "pending-payment":
      return "bg-[#FFC327]";
    case "delivered":
      return "bg-[#02BF6C]";
    case "on-delivery":
      return "bg-[#157892]";
    case "cancelled":
      return "bg-[#EE485C]";
    case "order-confirmed":
      return "bg-[#2A9D32]";
    case "processing":
      return "bg-[#F57C00]";
    case "pending-condition-confirmation":
      return "bg-[#D81B60]";
    case "customer-confirmed":
      return "bg-[#007BFF]";
    case "packaging-completed":
      return "bg-[#374151]";
    case "completed":
      return "bg-[#00A79D]";
    case "returned":
      return "bg-[#E74C3C]";
    case "on-hold":
      return "bg-[#B48D00]";
    case "trash":
      return "bg-[#5A5A5A]";
    default:
      return "bg-[#000000]";
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
        ${bgCirle(status)}
        `}
      ></div>
      {title(status.replace(/-/g, " "))}
    </div>
  );
};

export default OrderStatusBadge;
