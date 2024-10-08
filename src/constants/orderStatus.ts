import { OrderStatus } from '@/interface';

export const orderStatus: OrderStatus[] = [
  {
    id: "1",
    status: "pending",
    isSuccess: false,
    created_at: null,
    note: null,
    updated_by: null,
  },
  {
    id: "2",
    status: "processing",
    isSuccess: false,
    created_at: null,
    note: null,
    updated_by: null,
  },
  {
    id: "3",
    status: "on-delivery",
    isSuccess: false,
    created_at: null,
    note: null,
    updated_by: null,
  },
  {
    id: "4",
    status: "delivered",
    isSuccess: false,
    created_at: null,
    note: null,
    updated_by: null,
  },
];

export const orderStatusAdmin = [
  "pending",
  "processing",
  "on-delivery",
  "delivered",
  "cancelled",
];
