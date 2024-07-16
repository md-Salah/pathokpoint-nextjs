import React from "react";

const ProgressTracker = () => {
  return (
    <div className="w-full pl-[30%] py-5 md:pl-0 md:py-0">
      <ul className="steps steps-vertical md:steps-horizontal w-full">
        <li className="step step-success ">
          <div className="flex flex-col items-start md:items-center">
            <span className="text-black02 text-sm">Register</span>
            <span className="text-black04 text-xxs">26 Jan 2024, 16:14</span>
          </div>
        </li>
        <li className="step">
          <span className="text-black04 text-sm">Choose plan</span>
        </li>
        <li className="step">
          <span className="text-black04 text-sm">Purchase</span>
        </li>
        <li className="step">
          <span className="text-black04 text-sm">Recieve Product</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressTracker;
