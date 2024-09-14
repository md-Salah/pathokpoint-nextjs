import { EditBook } from '@/components/Admin/Book';

interface Props {
  params: { public_id: string };
};

const EditBookPage = ({ params }: Props) => {
  return <EditBook public_id={params.public_id} />;
};

export default EditBookPage;
