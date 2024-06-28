import React from "react";

type Props = {
  status: "Processing" | "Delivered" | "Shipped";
};

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Processing":
      return "bg-[#FFF0EA] text-[#F86624]";
      break;
    case "Shipped":
      return "bg-[#EAF8FF] text-[#2BB2FE]";
      break;
    case "Delivered":
      return "bg-[#E9FAF7] text-[#1A9882]";
      break;
    default:
      return "";
      break;
  }
};

const ProductShipmentStatusBadge = ({ status }: Props) => {
  const statusClassName = getStatusStyle(status);
  return (
    <span className={`${statusClassName} px-2 py-1 rounded-lg`}>{status}</span>
  );
};

export default ProductShipmentStatusBadge;
