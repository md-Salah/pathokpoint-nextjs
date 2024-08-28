export interface Courier {
  id: string;
  method_name: string;
  company_name: string;
  base_charge: number;
  weight_charge_per_kg: number;
  allow_cash_on_delivery: boolean;
  delivery_time: string;
  note: string | null;
  include_country: string[];
  include_city: string[];
  exclude_city: string[];
}
