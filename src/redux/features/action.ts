import { Address, CartItem } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';
import { validateAddress } from '@/utils/validate';

export const selectCourierAPI = async ({
  cartItems,
  address,
  isCashOnDelivery,
  courierId,
  coupon,
  token,
}: {
  cartItems: CartItem[];
  address: Address;
  isCashOnDelivery: boolean;
  courierId: string;
  coupon: string;
  token: string;
}) => {
  try {
    if (cartItems.length === 0)
      throw "Your cart is empty, please add some items";
    const addrErr = validateAddress(address);
    if (addrErr) throw addrErr;

    const payload = {
      order_items: cartItems.map((item: CartItem) => ({
        book_id: item.id,
        quantity: item.selectedQuantity,
      })),
      address: {
        ...address,
        email: address.email?.trim() || null,
        phone_number: `+88${address.phone_number}`,
      },
      is_full_paid: !isCashOnDelivery,
      courier_id: courierId,
      coupon_code: coupon,
    };

    const response = await axiosInstance.post("/checkout/summary", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { ...response.data, courier_id: courierId };
  } catch (error) {
    throw extractAxiosErr(error);
  }
};

export const applyCouponAPI = async ({
  coupon,
  cartItems,
  token,
}: {
  coupon: string;
  cartItems: CartItem[];
  token: string;
}) => {
  try {
    const response = await axiosInstance.post(
      "/cart/apply-coupon",
      {
        coupon_code: coupon,
        order_items: cartItems.map((item: CartItem) => ({
          book_id: item.id,
          quantity: item.selectedQuantity,
        })),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      coupon: coupon,
      ...response.data,
    };
  } catch (error) {
    throw extractAxiosErr(error);
  }
};
