const Step = ({
  status,
  datetime,
  isSuccess = false,
}: {
  status: string;
  datetime?: string | null;
  isSuccess?: boolean;
}) => {
  return (
    <li
      className={`step ${isSuccess && "step-success"}`}
      data-content={isSuccess ? "✔" : ""}
    >
      <div className="flex flex-col items-start lg:items-center gap-1 px-2">
        <span className={`text-xs font-medium ${!isSuccess && "text-black04"}`}>
          {status}
        </span>
        {datetime && <span className="text-black04 text-xxs">{datetime}</span>}
      </div>
    </li>
  );
};

export default Step;
