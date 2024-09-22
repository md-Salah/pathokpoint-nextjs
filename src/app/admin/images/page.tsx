import { Images } from '@/components/Admin/Image';

interface Props {
  searchParams?: any;
}

const ImagesPage = ({ searchParams }: Props) => {
  return <Images searchParams={searchParams} />;
};

export default ImagesPage;
