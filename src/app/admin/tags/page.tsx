import { Tags } from '@/components/Admin/Tag';

interface Props {
  searchParams?: any;
}

const TagsPage = ({ searchParams }: Props) => {
  return <Tags searchParams={searchParams} />;
};

export default TagsPage;
