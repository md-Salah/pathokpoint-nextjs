import { EditAuthor } from '@/components/Admin/Author';

interface Props {
  params: { author_id: string };
}

const EditAuthorPage = ({ params }: Props) => {
  return <EditAuthor author_id={params.author_id} />;
};

export default EditAuthorPage;
