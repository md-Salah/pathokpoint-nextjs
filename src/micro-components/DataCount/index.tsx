interface Props {
  currentPage: number;
  perPage: number;
  totalCount: number;
  context?: string;
}

const DataCount = ({
  currentPage,
  perPage,
  totalCount,
  context = "items",
}: Props) => {
  const startingAt = (currentPage - 1) * perPage + 1;
  const endingAt = Math.min(startingAt + perPage - 1, totalCount);

  const formatNumber = (num: number) => new Intl.NumberFormat().format(num);

  return (
    <div className="text-black04 text-sm">
      {`Showing ${formatNumber(startingAt)} to ${formatNumber(
        endingAt
      )} of ${formatNumber(totalCount)} ${context}`}
    </div>
  );
};

export default DataCount;
