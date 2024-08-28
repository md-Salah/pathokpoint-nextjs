"use client";
import Link from 'next/link';

interface Props {
  invoice: string;
}

const TrackOrder = ({ invoice }: Props) => {
  return (
    <div className="mt-6 flex gap-2">
      <Link
        href={`/user/my-order/${invoice}`}
        className="btn btn-primary btn-sm w-36 md:w-40 h-10 md:h-11"
      >
        Track Order
      </Link>
      <button className="btn btn-primary btn-sm btn-outline w-36 md:w-40 h-10 md:h-11">
        Invoice
      </button>
    </div>
  );
};

export default TrackOrder;
