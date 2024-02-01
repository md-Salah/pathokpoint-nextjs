interface Props {
  condition: string;
}

const ConditionBadge = ({ condition }: Props) => {
  return <div className="badge badge-sm badge-warning">{condition}</div>;
};

export default ConditionBadge;
