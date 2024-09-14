import { Categories } from '@/components/Admin/Category';

interface Props {
  searchParams?: any;
}

const CategoriesPage = ({ searchParams }: Props) => {
  return <Categories searchParams={searchParams} />;
};

export default CategoriesPage;
