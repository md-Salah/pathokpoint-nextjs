import { capitalize } from "@/utils";

interface Props {
  condition: string;
}

const ConditionBadge = ({ condition }: Props) => {
  return (
    <div
      className={`badge font-semibold text-xxs sm:text-xs 
    ${
      condition === "new" ||
      (condition === "old-like-new" && "text-[#02BF6C] bg-[#02BF6C26]")
    }
    ${condition === "old-good-enough" && "text-[#02BF6C] bg-[#02BF6C26]"}
    ${condition === "old-readable" && "text-[#EDAB15] bg-[#EDAB1526]"}
    `}
    >
      {capitalize(condition.replace(/-/g, " "))}
    </div>
  );
};

export default ConditionBadge;
