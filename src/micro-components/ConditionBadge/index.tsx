import { capitalize } from '@/utils';

interface Props {
  condition: string;
}

const ConditionBadge = ({ condition }: Props) => {
  return (
    <div
      className={`badge block font-semibold text-xxs sm:text-xs whitespace-nowrap
    ${
      condition === "new"
        ? "text-[#02BF6C] bg-[#02BF6C26]"
        : "text-[#EDAB15] bg-[#EDAB1526]"
    }
        
    `}
    >
      {capitalize(condition.replace(/-/g, " "))}
    </div>
  );
};

export default ConditionBadge;
