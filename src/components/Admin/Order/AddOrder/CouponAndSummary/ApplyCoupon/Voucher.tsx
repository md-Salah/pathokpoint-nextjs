import { RiDiscountPercentFill } from 'react-icons/ri';

const Voucher = ({
  code,
  description,
  handleCoupon,
}: {
  code: string;
  description: string;
  handleCoupon: (code: string) => void;
}) => (
  <div
    className="text-xs p-2 cursor-pointer group"
    onClick={() => handleCoupon(code)}
  >
    <div className="flex items-center text-primary gap-1">
      <RiDiscountPercentFill className="min-w-3.5 min-h-3.5 inline-block " />
      <span className=" group-hover:underline">{code}</span>
      <span className="">:</span>
    </div>
    <p className="text-black04 font-bn mt-1 text-justify">{description}</p>
  </div>
);

export default Voucher;
