import { useState } from 'react';

import { Order } from '@/interface';

interface Props {
  order: Order;
}

const CopyText = ({ order }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `Invoice ${order.invoice}\n` +
        `${order.address?.name ? order.address.name + "\n" : ""}` +
        `${
          order.address?.phone_number ? order.address.phone_number + "\n" : ""
        }` +
        `${order.address?.address ? order.address.address + "\n" : ""}` +
        `${order.address?.thana ? order.address.thana + "\n" : ""}` +
        `${order.address?.city ? order.address.city + "\n" : ""}` +
        `\n` +
        `${
          order.courier?.method_name ? order.courier.method_name + "\n\n" : ""
        }` +
        `${order.order_items
          .map(
            (item) =>
              `${item.book.public_id} ${item.book.name}\nx${item.quantity} ${item.sold_price}`
          )
          .join("\n")}\n\n` +
        `Old: ${order.old_book_total}\n` +
        `New: ${order.new_book_total}\n` +
        `Sub Total: ${order.old_book_total + order.new_book_total}\n` +
        `Delivery Charge: ${order.shipping_charge}\n` +
        `Weight Charge: ${order.weight_charge}\n` +
        `${
          order.discount
            ? `Discount (${order.coupon?.code}): ${order.discount}\n`
            : ""
        }` +
        `Grand Total: ${order.net_amount}\n` +
        `Paid: ${order.paid}\n` +
        `${order.is_full_paid ? "Due" : "Cash On Delivery"}: ${order.due}\n\n`
    );

    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <li onClick={copyToClipboard}>
      <span>{copied ? "Copied!" : "Copy Text"}</span>
    </li>
  );
};

export default CopyText;
