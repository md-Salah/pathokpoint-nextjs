import { EditCategory } from '@/components/Admin/Category';

interface Props {
  params: { category_id: string };
}

const EditCategoryPage = ({ params }: Props) => {
  return <EditCategory category_id={params.category_id} />;
};

export default EditCategoryPage;
