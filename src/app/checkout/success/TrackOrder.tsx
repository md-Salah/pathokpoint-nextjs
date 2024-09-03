"use client";
import Link from 'next/link';

import { useUser } from '@/hooks';

interface Props {
  id: string;
}

const TrackOrder = ({ id }: Props) => {
  const { user } = useUser();
  
  if (!user) return null;
  return (
    <div className="mt-6 flex gap-2">
      <Link
        href={`/user/my-order/${id}`}
        className="btn btn-primary btn-sm w-72 h-10 md:h-11"
      >
        Track Order
      </Link>
      {/* <button className="btn btn-primary btn-sm btn-outline w-36 md:w-40 h-10 md:h-11">
        Invoice
      </button> */}
    </div>
  );
};

export default TrackOrder;
