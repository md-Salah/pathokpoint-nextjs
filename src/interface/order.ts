import { Address, Image } from '@/interface';

export interface Order {
  id: string;
  created_at: string;
  updated_at: string;
  is_full_paid: boolean;
  order_items: OrderItem[];
  customer_note: string | null;
  invoice: string;
  new_book_total: number;
  old_book_total: number;
  shipping_charge: number;
  weight_charge: number;
  total: number;
  discount: number;
  net_amount: number;
  paid: number;
  payment_reversed: number;
  due: number;
  refunded: number;
  tracking_id: string | null;
  order_status: OrderStatus[];
  transactions: Transaction[];
  coupon: {
    id: string;
    code: string;
  } | null;
  customer: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    username: string;
  } | null;
  address: Address | null;
  courier: {
    id: string;
    method_name: string;
  } | null;
}

export interface OrderItem {
  id: string;
  book: {
    id: string;
    name: string;
    slug: string;
    condition: string;
  };
  quantity: number;
  regular_price: number;
  sold_price: number;
}

export interface OrderStatus {
  id: string;
  status: string;
  created_at: string | null;
  note: string | null;
  updated_by?: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    username: string;
  } | null;
}

export interface Transaction {
  id: string;
  created_at: string;
  amount: number;
  transaction_id: string;
  account_number: string;
  gateway: {
    id: string;
    name: string;
  };
}
