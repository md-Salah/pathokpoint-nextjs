import { Category } from "./category";
import { Author } from "./author";
import { Publisher } from "./publisher";
import { Image } from "./image";

export interface Book {
  id: string;
  name: string;
  authors: Array<Author>;
  categories: Array<Category>;
  publisher: Publisher;
  regular_price: number;
  sale_price: number;
  quantity: number;
  description: string;
  condition: string;
  slug: string;
  short_description: string;
  images: Array<Image>;
}
