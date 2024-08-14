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
  quantity: number;
  description: string | null;
  condition: string;
  short_description: string | null;
  images: Array<Image>;
  
  in_stock?: boolean;
  is_used?: boolean;
  edition?: string;
  cover?: string;
  translators?: Array<Author>;
  language?: string;
  isbn?: string;
  no_of_pages?: number;
  tags?: Array<{ id: string; name: string; slug: string }>;
  weight_in_gm?: number;
}

export interface CartItem {
  id: string;
  public_id?: number;
  name: string;
  slug: string;
  authors: Array<Author>;
  regular_price: number;
  sale_price: number;
  quantity: number;
  condition: string;
  images: Array<Image>;
  cover?: string;
  selectedQuantity: number;
  weight_in_gm: number;
}
