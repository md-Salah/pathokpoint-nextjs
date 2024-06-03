export interface Publisher {
  id: string;
  name: string;
  slug: string;
  image: {
    src: string;
  } | null;
}
