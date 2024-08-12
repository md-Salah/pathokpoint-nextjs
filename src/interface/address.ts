export interface Address {
  id: string;
  name: string;
  email?: string | null;
  phone_number: string;
  alternative_phone_number: string | null;
  address: string;
  thana: string;
  city: string;
  country: string;
}
