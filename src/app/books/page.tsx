import { Books } from "@/components";
import { Book } from "@/interface";
import { getBooks } from "@/utils/api";

const BooksPage = async () => {
  const books: Book[] = await getBooks();
  return (
    <div>
      <Books books={books} />
    </div>
  );
};

export default BooksPage;
