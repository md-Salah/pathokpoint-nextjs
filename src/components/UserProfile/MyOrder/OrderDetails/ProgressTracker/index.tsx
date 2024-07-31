import Step from "./Step";

const ProgressTracker = () => {
  return (
    <div className="w-full p-4 lg:p-7 lg:mt-4">
      <div className="mx-auto w-fit">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <Step
            status="Pending"
            datetime="26 Jan 2024, 4:04 PM"
            isSuccess={true}
          />
          <Step
            status="Confirmed"
            datetime="26 Jan 2024, 5:30 PM"
            isSuccess={true}
          />
          <Step status="Out for Delivery" />
          <Step status="Delivered" />
          <Step status="Completed" />
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
