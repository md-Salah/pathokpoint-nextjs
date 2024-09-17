import { Image } from '@/interface';

export interface Author {
  id: string;
  created_at?: string;
  updated_at?: string;
  name: string;
  slug: string;
  description?: string | null;
  birth_date?: string | null;
  death_date?: string | null;
  book_published?: number | null;
  city?: string | null;
  country?: string | null;
  is_popular: boolean;
  is_in_menu: boolean;
  image_id?: string | null;
  banner_id?: string | null;
  image?: Image | null;
  banner?: Image | null;
  followers_count?: number | null;
}

export interface Tag {
  id: string;
  created_at?: string;
  updated_at?: string;
  name: string;
  slug: string;
  private: boolean;
  is_in_menu: boolean;
}
