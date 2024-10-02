export interface IdNameSlug {
  id: string;
  name: string;
  slug: string;
}

export interface Courier {
  id: string;
  method_name: string;
}

export interface Coupon {
  id: string;
  code: string;
  short_description: string | null;
  expiry_date: string | null;
  discount_type: string;
  discount_old: number | null;
  discount_new: number | null;
  max_discount_old: number | null;
  max_discount_new: number | null;
  min_spend_old: number;
  min_spend_new: number;
  use_limit: number | null;
  use_limit_per_user: number | null;
  is_active: boolean;
  max_shipping_charge: number | string | null;
  include_conditions: string[];
  include_books: IdNameSlug[];
  include_authors: IdNameSlug[];
  include_categories: IdNameSlug[];
  include_publishers: IdNameSlug[];
  include_tags: IdNameSlug[];
  exclude_books: IdNameSlug[];
  exclude_authors: IdNameSlug[];
  exclude_categories: IdNameSlug[];
  exclude_publishers: IdNameSlug[];
  exclude_tags: IdNameSlug[];
  exclude_couriers: Courier[];
  user_id: string | null;
  updated_at?: string;
  created_at?: string;
}
