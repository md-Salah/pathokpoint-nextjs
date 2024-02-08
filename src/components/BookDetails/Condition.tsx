"use client";
import { ConditionBadge, ConditionTable } from "@/micro-components";
import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const Condition = ({ condition }: { condition: string }) => {
  const [showConditionTable, setShowConditionTable] = useState(false);

  const toggleConditonTable = () => {
    setShowConditionTable((prev) => !prev);
  };

  return (
    <div className="relative">
      <div>
        <p className="w-20 inline-block">কন্ডিশন:</p>
        <ConditionBadge condition={condition} />
        <FaInfoCircle
          className="text-secondary-content inline-block ml-2 cursor-pointer"
          onClick={toggleConditonTable}
        />
      </div>
      <div
        className={`mt-4 shadow-xl rounded-md overflow-x-auto absolute bg-base-200 right-0 left-0 max-w-lg ${
          !showConditionTable && "hidden"
        }`}
      >
        <ConditionTable />
      </div>
    </div>
  );
};

export default Condition;
