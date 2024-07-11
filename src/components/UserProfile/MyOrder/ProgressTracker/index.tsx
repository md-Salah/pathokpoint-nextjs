import React from "react";

const steps = [
  { id: 1, label: "Pending Payment", time: "26 Jan 2024, 16:14" },
  { id: 2, label: "Order Confirmed" },
  { id: 3, label: "Condition Confirmation" },
  { id: 4, label: "Customer Confirmation" },
  { id: 5, label: "Delivered" },
];

type Props = {
  currentStep: number;
};

const ProgressTracker = ({ currentStep }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-sm font-semibold text-gray-600">
        {steps[0].time}
      </div>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`mt-2 text-xs font-medium ${
                  index < currentStep ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {step.label}
              </div>
              <div
                className={`w-4 h-4 rounded-full 
                ${
                  index < currentStep
                    ? "bg-success text-white"
                    : "border-2 border-black05"
                }`}
              >
                {index < currentStep && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-auto border-t-2 ${
                  index < currentStep ? "border-green-500" : "border-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
