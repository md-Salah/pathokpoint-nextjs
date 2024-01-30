interface Props {
  condition: string;
}

const ConditionBadge = ({ condition }: Props) => {
  return (
    <div
      className={`badge badge-sm ${
        condition.toLowerCase() == "new"
          ? "badge-secondary badge-outline"
          : "badge-warning"
      }`}
    >
      {condition}
    </div>
  );
};

export default ConditionBadge;
