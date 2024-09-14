import { Books } from '@/components/Admin/Book';

interface Props {
  searchParams?: any;
};

const BooksPage = ({ searchParams }: Props) => {
  return <Books searchParams={searchParams} />;
};

export default BooksPage;
