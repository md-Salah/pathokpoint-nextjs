import { MobileHeader } from "@/components/UserProfile";
import { OrderDetails } from "@/components/UserProfile/MyOrder";

const OrderDetailsPage = () => {
  return (
    <div>
      <MobileHeader title="Order Details" href="/user/my-order" />
      <OrderDetails />
    </div>
  );
};

export default OrderDetailsPage;
