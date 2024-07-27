"use client";

import { removeItemFromCart } from "@/redux/features/cart-slice";
import { AppDispatch } from "@/redux/store";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const RemoveItem = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <FaRegTrashCan
      className="w-4 h-4 cursor-pointer"
      onClick={() => dispatch(removeItemFromCart({ id }))}
    />
  );
};

export default RemoveItem;
