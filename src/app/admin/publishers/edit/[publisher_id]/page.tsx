import { EditPublisher } from '@/components/Admin/Publisher';

interface Props {
  params: { publisher_id: string };
}

const EditPublisherPage = ({ params }: Props) => {
  return <EditPublisher publisher_id={params.publisher_id} />;
};

export default EditPublisherPage;
