import { Coupons } from '@/components/Admin/Coupon';

interface Props {
  searchParams?: any;
}

const CouponsPage = ({ searchParams }: Props) => {
  return <Coupons searchParams={searchParams} />;
};

export default CouponsPage;
