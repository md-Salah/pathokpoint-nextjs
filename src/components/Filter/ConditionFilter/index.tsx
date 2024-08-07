"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const ConditionFilter = ({
  updateSearchParams,
}: {
  updateSearchParams: (params: URLSearchParams) => void;
}) => {
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string>(
    searchParams.get("condition__in") || ""
  );

  const handleCondition = (condition: string) => {
    setValue(condition);
    const params = new URLSearchParams(searchParams.toString());
    const currentCondition = params.get("condition__in");
    if (currentCondition && currentCondition === condition)
      params.delete("condition__in");
    else params.set("condition__in", condition);
    updateSearchParams(params);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-3 px-5 border-b">
        <h4 className="font-semibold text-black02 text-base">Condition</h4>
      </div>
      <div className="px-5 pt-3 pb-5 form-control">
        <CheckBox
          label="New"
          value="new"
          handleCondition={handleCondition}
          checked={value === "new"}
        />
        <CheckBox
          label="Old"
          value="old-like-new,old-good-enough,old-readable"
          checked={value === "old-like-new,old-good-enough,old-readable"}
          handleCondition={handleCondition}
        />
        <div className="ml-4">
          <CheckBox
            label="Old like new"
            value="old-like-new"
            checked={value.includes("old-like-new")}
            handleCondition={handleCondition}
          />
          <CheckBox
            label="Old good enough"
            value="old-good-enough"
            checked={value.includes("old-good-enough")}
            handleCondition={handleCondition}
          />
          <CheckBox
            label="Old readable"
            value="old-readable"
            checked={value.includes("old-readable")}
            handleCondition={handleCondition}
          />
        </div>
      </div>
    </div>
  );
};

export default ConditionFilter;

const CheckBox = ({
  label,
  value,
  handleCondition,
  checked,
}: {
  label: string;
  value: string;
  handleCondition: (condition: string) => void;
  checked?: boolean;
}) => (
  <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
    <input
      type="checkbox"
      className="checkbox checkbox-xs checkbox-primary"
      checked={checked}
      value={value}
      onChange={() => handleCondition(value)}
    />
    <span className="label-text">{label}</span>
  </label>
);
