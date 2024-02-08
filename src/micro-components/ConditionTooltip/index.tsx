import { FaInfoCircle } from "react-icons/fa";

const ConditionTooltip = () => {
  const tooltip =
    "পুরাতন বই অর্ডার করে বইয়ের কন্ডিশন দেখতে Messenger/WhatsApp এ অর্ডার আইডি ইনবক্স করুন।";
  return (
    <div className="tooltip tooltip-right" data-tip={tooltip}>
      <FaInfoCircle className="text-secondary-content inline-block ml-2 cursor-pointer" />
    </div>
  );
};

export default ConditionTooltip;
