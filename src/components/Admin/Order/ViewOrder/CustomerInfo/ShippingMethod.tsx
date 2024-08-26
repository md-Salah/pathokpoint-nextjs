import React from 'react';
import { PiNotePencilLight } from 'react-icons/pi';

import { CourierInOrder, Order } from '@/interface';

interface Props {
  order: Order;
}

const ShippingMethod = ({ order }: Props) => {
  return (
    <div>
      {order.courier ? (
        <>
          <div className="space-y-2">
            <h4>{order.courier.method_name}</h4>
            <h4 className="font-light">{order.courier.company_name}</h4>
          </div>
          <table className="mt-6 table table-xs table-no-border table-px-0">
            <tbody>
              <tr>
                <td className="w-28">Tracking</td>
                <td className="flex items-center gap-4">
                  <span>DT-567432</span>
                  <PiNotePencilLight
                    size="20"
                    className="cursor-pointer hover:text-primary"
                  />
                </td>
              </tr>
              <tr>
                <td>Charge</td>
                <td>100৳</td>
              </tr>
              <tr>
                <td>COD Receivable</td>
                <td>100৳</td>
              </tr>
              <tr>
                <td>COD Received</td>
                <td>100৳</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <div className="font-light">Shipping is not required</div>
      )}
    </div>
  );
};

export default ShippingMethod;
