import { OrderStatus } from '@/interface';
import { capitalize, dateTime } from '@/utils';

const Step = ({ status }: { status: OrderStatus }) => {
  const { datetime } = dateTime(status.created_at ? status.created_at : "");
  const isSuccess = status.created_at ? true : false;
  return (
    <li
      className={`step ${isSuccess && "step-success"}`}
      data-content={isSuccess ? "✔" : ""}
    >
      <div className="flex flex-col items-start lg:items-center gap-1 px-2">
        <span className={`text-xs font-medium ${!isSuccess && "text-black04"}`}>
          {capitalize(status.status.replace(/-/g, " "))}
        </span>
        {status.created_at && (
          <span className="text-black04 text-xxs">{datetime}</span>
        )}
      </div>
    </li>
  );
};

export default Step;
