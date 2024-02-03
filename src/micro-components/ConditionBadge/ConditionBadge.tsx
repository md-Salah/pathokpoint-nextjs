interface Props {
  condition: string;
}

const ConditionBadge = ({ condition }: Props) => {
  return <div className="badge badge-sm badge-info badge-outline">{condition}</div>;
};

export default ConditionBadge;
