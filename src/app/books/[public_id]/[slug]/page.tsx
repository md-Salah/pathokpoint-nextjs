import { BookPage } from "@/components";
import { Book as BookInterface } from "@/interface";
import { getBookByPublicId } from "@/utils/api";
import { Metadata } from "next";

type Props = {
  params: { public_id: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book: BookInterface = await getBookByPublicId(params.public_id);
  if (!book) return { title: "Book | Pathok Point", description: "Book" };
  const en_name = book.slug.replace(/-/g, " ");
  return {
    title: `${book.name} - ${en_name} | Pathok Point`,
    description: `${book.name} - ${en_name} by ${book.authors[0]?.name}`,
  };
}

const Book = async ({ params }: Props) => {
  const book = await getBookByPublicId(params.public_id);
  return <BookPage book={book} />;
};

export default Book;
