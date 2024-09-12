export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: {
    src: string;
  } | null;
  description?: string;
}
