import { Book } from '@/interface';
import { capitalize } from '@/utils';
import { getBookByPublicId } from '@/utils/api';

interface Props {
  params: {
    public_id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const book: Book = await getBookByPublicId(params.public_id);

  if (!book) {
    return {
      title: "Book not found | Pathok Point",
      description: "Book not found",
    };
  }

  const description =
    (book.authors.length > 0
      ? `by ${book.authors[0]?.name}`
      : book.short_description) + ` | ${book.sale_price} BDT`;

  return {
    title: `${capitalize(book.name)} | Pathok Point`,
    description: description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
