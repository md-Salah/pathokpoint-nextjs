const InStockFilter = ({
  handleInStockChange,
  checked,
}: {
  checked: boolean;
  handleInStockChange: () => void;
}) => {
  return (
    <div className="bg-white form-control">
      <div className="flex justify-between items-center py-4 px-5">
        <h4 className="font-semibold text-black02 text-base">In Stock</h4>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={checked}
          onChange={handleInStockChange}
        />
      </div>
    </div>
  );
};

export default InStockFilter;
