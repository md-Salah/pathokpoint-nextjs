import { EditTag } from '@/components/Admin/Tag';

interface Props {
  params: { tag_id: string };
}

const EditTagPage = ({ params }: Props) => {
  return <EditTag tag_id={params.tag_id} />;
};

export default EditTagPage;
