import { Author } from './author';
import { Category } from './category';
import { Image } from './image';
import { Publisher } from './publisher';

export interface Book {
  id: string;
  public_id: number;
  name: string;
  slug: string;
  authors: Array<Author>;
  categories: Array<Category>;
  publisher: Publisher;
  regular_price: number;
  sale_price: number;
  manage_stock: boolean;
  quantity: number;
  in_stock: boolean;
  pre_order: boolean;
  shipping_required: boolean;
  description: string | null;
  short_description: string | null;
  images: Array<Image>;

  is_used: boolean;
  condition: string;
  edition: string | null;
  notes?: string | null;
  cover: string | null;
  translators?: Array<Author>;
  language: string | null;
  isbn: string | null;
  no_of_pages: number | null;
  country: string | null;
  tags: Array<{ id: string; name: string; slug: string }>;
  bar_code: string | null;
  weight_in_gm: number;

  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: string;
  public_id: number;
  name: string;
  slug: string;
  authors: Array<Author>;
  regular_price: number;
  sale_price: number;
  quantity: number;
  condition: string;
  images: Array<Image>;
  cover: string | null;
  selectedQuantity: number;
  weight_in_gm: number;
}
