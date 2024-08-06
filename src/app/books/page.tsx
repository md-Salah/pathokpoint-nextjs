import { Books } from "@/components";

interface Props {
  searchParams?: {
    category__slug__in?: string;
    category_q?: string;
    page?: string;
  };
}

const BooksPage = async ({ searchParams }: Props) => {
  return (
    <div>
      <Books searchParams={searchParams} />
    </div>
  );
};

export default BooksPage;
