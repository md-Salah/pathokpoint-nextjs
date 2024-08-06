import { BookPage } from "@/components";
import { getBookByPublicId } from "@/utils/api";

type Props = {
  params: { public_id: string; slug: string };
};

const Book = async ({ params }: Props) => {
  const book = await getBookByPublicId(params.public_id);
  return <BookPage book={book} />;
};

export default Book;
