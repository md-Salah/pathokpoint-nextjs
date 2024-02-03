import { Category } from "./category";
import { Author } from "./author";

export interface Book {
  id: number;
  name: string;
  authors: Array<Author>;
  categories: Array<Category>;
  regular_price: number;
  sale_price: number;
  quantity: number;
  description: string;
  condition: string;
  slug: string;
  short_description: string;
  images: Array<{
    src: string;
  }>;
}
