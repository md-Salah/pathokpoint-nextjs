import { Address, CartItem } from '@/interface';
import { isEmail, isPhoneNumber } from '@/utils';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

export const validateAddress = (address: Address): string | null => {
  if (!address.name.trim()) {
    return "Please provide your name";
  } else if (!address.phone_number.trim()) {
    return "Please provide your phone number";
  } else if (!isPhoneNumber(address.phone_number)) {
    return "Invalid phone number";
  } else if (address.email && !isEmail(address.email)) {
    return "Invalid email address";
  } else if (!address.address.trim()) {
    return "Please provide shipping address";
  } else if (!address.thana.trim()) {
    return "Please provide your thana";
  } else if (!address.city.trim()) {
    return "Please select your district";
  }
  return null;
};

interface Transaction {
  payment_method: string;
  account_number: string;
  transaction_id: string;
  reference?: string | null;
  refund_reason?: string | null;
  amount: string;
}

export const validateTransaction = (
  transaction: Transaction
): string | null => {
  if (!transaction.payment_method) return "Payment method is required";
  else if (!transaction.account_number) return "Account number is required";
  else if (!isPhoneNumber(transaction.account_number))
    return "Invalid account/phone number";
  else if (!transaction.transaction_id) return "Transaction ID is required";
  else if (
    !transaction.amount ||
    isNaN(Number(transaction.amount)) ||
    !/^\d+$/.test(transaction.amount)
  )
    return "Amount is required and must be a number";
  else if (parseInt(transaction.amount) <= 0)
    return "Amount must be greater than 0";
  return null;
};

export const verifyStock = async (
  cartItems: CartItem[]
): Promise<string | null> => {
  try {
    await axiosInstance.post("/cart/verify-stock", {
      order_items: cartItems.map(({ id, selectedQuantity }) => ({
        book_id: id,
        selectedQuantity,
      })),
    });
    return null;
  } catch (error) {
    return extractAxiosErr(error);
  }
};
