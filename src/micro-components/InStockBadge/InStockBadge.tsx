interface Props {
  inStock: Boolean;
}

const InStockBadge = ({ inStock }: Props) => {
  return (
    <div
      className={`badge badge-sm ${inStock ? "badge-success w-16" : "badge-accent w-20"} `}
    >
      {inStock ? "In stock" : "Out of stock"}
    </div>
  );
};

export default InStockBadge;
