export interface Coupon {
  id: string;
  code: string;
  short_description: string | null;
  discount_type: string;
  discount_old: number | null;
  discount_new: number | null;
  max_discount_old: number | null;
  max_discount_new: number | null;
  min_spend_old: number | null;
  min_spend_new: number | null;
  is_active: boolean;
  max_shipping_charge: number | null;
  expiry_date: string | null;
}
