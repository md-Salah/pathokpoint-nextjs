import { Order } from '@/interface';
import { Divider } from '@/micro-components';

import ShippingMethod from './ShippingMethod';

interface Props {
  order: Order;
}

const CustomerInfo = ({ order }: Props) => {
  return (
    <div className="border border-black05 p-4 lg:p-8 rounded overflow-x-auto w-full">
      <div className="flex gap-8 h-64 justify-between text-sm md:text-base">
        <div className="min-w-48">
          <h3 className="text-lg font-medium mb-5">Customer</h3>
          {order.customer ? (
            <>
              <div className="flex items-center gap-2">
                <span className="font-light">Username:</span>
                <span className="font-medium">{order.customer.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-light">Name:</span>
                <span className="font-medium">
                  {order.customer.first_name + " " + order.customer.last_name}
                </span>
              </div>
            </>
          ) : (
            <div className="font-light">Guest order</div>
          )}
        </div>
        <Divider className="hidden lg:block mr-0 ml-0" />
        <div className="min-w-48 max-w-72">
          <h3 className="text-lg font-medium mb-5">Shipping Address</h3>
          {order.address ? (
            <div className="font-light space-y-2">
              <h4>{order.address.name}</h4>
              <h4>{order.address.phone_number}</h4>
              <h4>{order.address.email}</h4>
              <p>{order.address.address}</p>
              <p>{order.address.thana + ", " + order.address.city}</p>
            </div>
          ) : (
            <div className="font-light">Shipping is not required</div>
          )}
        </div>
        <Divider className="hidden lg:block mr-0 ml-0" />
        <div className="min-w-60">
          <h3 className="text-lg font-medium mb-5">Shipping Method</h3>
          <ShippingMethod order={order} />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
