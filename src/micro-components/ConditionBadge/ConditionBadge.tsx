interface Props {
  condition: string;
}

const ConditionBadge = ({ condition }: Props) => {
  return <div className="badge badge-sm bg-green-100 text-green-700 min-w-fit py-2 capitalize">{condition}</div>;
};

export default ConditionBadge;
