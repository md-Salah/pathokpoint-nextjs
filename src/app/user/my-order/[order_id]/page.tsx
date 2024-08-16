import { MobileHeader } from '@/components/UserProfile';
import { OrderDetails } from '@/components/UserProfile/MyOrder';

interface Props {
  params: {
    order_id: string;
  };
}

const OrderDetailsPage = ({ params }: Props) => {
  return (
    <div>
      <MobileHeader title="Order Details" href="/user/my-order" />
      <OrderDetails />
    </div>
  );
};

export default OrderDetailsPage;
