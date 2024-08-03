import { Category } from "./category";
import { Author } from "./author";
import { Publisher } from "./publisher";
import { Image } from "./image";

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
  
  is_used?: boolean;
  edition?: string;
  cover?: string;
  translators?: Array<Author>;
  language?: string;
  isbn?: string;
  no_of_pages?: number;
  tags?: Array<{ id: string; name: string; slug: string }>;
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
}
