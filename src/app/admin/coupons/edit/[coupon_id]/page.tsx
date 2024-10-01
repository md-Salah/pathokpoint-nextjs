import { EditCoupon } from '@/components/Admin/Coupon';

interface Props {
  params: { coupon_id: string };
}

const EditCouponPage = ({ params }: Props) => {
  return <EditCoupon coupon_id={params.coupon_id} />;
};

export default EditCouponPage;
