interface Props {
  condition: string;
}

const ConditionBadge = ({ condition }: Props) => {
  return <div className="badge badge-sm badge-accent">{condition}</div>;
};

export default ConditionBadge;
