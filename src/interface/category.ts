import { Image } from '@/interface';

export interface CatParent {
  id: string;
  name: string;
  slug: string;
}

export interface Category {
  id: string;
  created_at?: string;
  updated_at?: string;
  name: string;
  slug: string;
  description?: string | null;
  is_islamic: boolean;
  is_english_featured: boolean;
  is_bangla_featured: boolean;
  is_job_featured: boolean;
  is_comics: boolean;
  is_popular: boolean;
  is_big_sale: boolean;
  is_in_menu: boolean;
  parent: CatParent[];
  children?: CatParent[];
  image_id?: string | null;
  banner_id?: string | null;
  image?: Image | null;
  banner?: Image | null;
}
