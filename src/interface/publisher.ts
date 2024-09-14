import { Image } from '@/interface';

export interface Publisher {
  id: string;
  created_at?: string;
  updated_at?: string;
  name: string;
  slug: string;
  description?: string | null;
  is_islamic: boolean;
  is_english: boolean;
  is_popular: boolean;
  is_big_sale: boolean;
  is_in_menu: boolean;
  country?: string | null;
  book_published?: number | null;
  image?: Image | null;
  banner?: Image | null;
}
