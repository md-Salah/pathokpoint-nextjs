interface IdName {
  id: string;
  name: string;
  slug: string;
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
  max_shipping_charge: number | null;
  include_conditions: string[];
  include_books: IdName[];
  include_authors: IdName[];
  include_categories: IdName[];
  include_publishers: IdName[];
  include_tags: IdName[];
  exclude_books: IdName[];
  exclude_authors: IdName[];
  exclude_categories: IdName[];
  exclude_publishers: IdName[];
  exclude_tags: IdName[];
  exclude_couriers: IdName[];
  user_id: string | null;
  updated_at?: string;
  created_at?: string;
}
