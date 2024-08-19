interface Props {
  inStock: Boolean;
}

const InStockBadge = ({ inStock }: Props) => {
  return (
    <div
      className={`badge badge-sm badge-outline ${inStock ? "badge-success w-[64px]" : "badge-error w-[86px]"} `}
    >
      {inStock ? "In stock" : "Out of stock"}
    </div>
  );
};

export default InStockBadge;
