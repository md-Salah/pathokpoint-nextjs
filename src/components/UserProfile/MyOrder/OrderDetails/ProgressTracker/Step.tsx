import { OrderStatus } from '@/interface';
import { dateTime, title } from '@/utils';

const Step = ({ status }: { status: OrderStatus }) => {
  const { datetime } = dateTime(status.created_at ? status.created_at : "");
  return (
    <li
      className={`step ${status.isSuccess && "step-success"}`}
      data-content={status.isSuccess ? "✔" : ""}
    >
      <div className="flex flex-col items-start lg:items-center gap-1 px-2">
        <span
          className={`text-xs font-medium ${
            !status.isSuccess && "text-black04"
          }`}
        >
          {title(status.status.replace(/-/g, " "))}
        </span>
        {status.created_at && (
          <span className="text-black04 text-xxs">{datetime}</span>
        )}
      </div>
    </li>
  );
};

export default Step;
