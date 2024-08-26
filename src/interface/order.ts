import { Address, Author, Image } from '@/interface';

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
  courier: Courier | null;
}

export interface Courier {
  id: string;
  method_name: string;
  company_name: string;
}

export interface OrderItem {
  id: string;
  book: {
    id: string;
    public_id: string;
    name: string;
    slug: string;
    condition: string;
    cover: string;
    images: Image[];
    authors: Author[];
  };
  quantity: number;
  regular_price: number;
  sold_price: number;
}

export interface OrderStatus {
  id: string;
  status: string;
  isSuccess?: boolean;
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
  reference: string | null;
  is_manual: boolean;
  is_refund: boolean;
  refunded_by?: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    username: string;
  } | null;
  refund_reason: string | null;
  gateway: {
    id: string;
    name: string;
  };
}
