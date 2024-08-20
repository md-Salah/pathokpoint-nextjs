const DataCount = ({
  currentPage,
  perPage,
  totalCount,
}: {
  currentPage: number;
  perPage: number;
  totalCount: number;
}) => {
  const startingAt = (currentPage - 1) * perPage + 1;
  const endingAt = Math.min(startingAt + perPage - 1, totalCount);

  return (
    <div className="text-black04 text-sm">
      {`Showing ${startingAt} to ${endingAt} of ${totalCount} items`}
    </div>
  );
};

export default DataCount;
