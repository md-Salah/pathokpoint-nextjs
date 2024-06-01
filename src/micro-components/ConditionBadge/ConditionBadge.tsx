interface Props {
  condition: string;
}

const ConditionBadge = ({ condition }: Props) => {
  return <div className="badge font-semibold text-xxs sm:text-xs text-[#02BF6C] bg-[rgba(2,191,108,0.15)]">{condition}</div>;
};

export default ConditionBadge;
