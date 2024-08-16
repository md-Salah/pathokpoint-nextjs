export interface User {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  date_of_birth?: string | null;
  phone_number?: string | null;
  role: string;
  gender: string;
  src: string | null;
}
