import { Books } from "@/components";

interface Props {
  searchParams?: {
    category__slug__in?: string;
    category_q?: string;
    page?: string;
  };
}

const BooksPage = async ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();

  return (
    <div>
      <Books query={query} category_q={params.get("category_q") || ""} />
    </div>
  );
};

export default BooksPage;
