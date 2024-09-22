export interface Review {
  id: string;
  book_id?: string | null;
  order_id?: string | null;
  user: {
    first_name: string;
    last_name: string;
    image: {
      src: string;
    } | null;
  };
  comment: string;
  average_rating: number;
  images: {
    src: string;
  }[];
  created_at: string;
}
