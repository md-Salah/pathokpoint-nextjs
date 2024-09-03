import { Books, Profile } from '@/components';
import { defaultSrc } from '@/constants';
import { Publisher } from '@/interface';
import { NotFound } from '@/micro-components';
import { getPublisherBySlug } from '@/utils/api';

interface Props {
  searchParams?: any;
  params: {
    slug: string;
  };
}

const PublisherPage = async ({ searchParams, params }: Props) => {
  const publisher: Publisher = await getPublisherBySlug(params.slug);

  if (!publisher)
    return (
      <NotFound>
        দুঃখিত! <br />
        প্রকাশনী খুঁজে পাওয়া যায়নি
      </NotFound>
    );

  return (
    <div>
      <Profile
        name={publisher.name}
        dp={publisher.image?.src || defaultSrc.publisher}
        cover={defaultSrc.publisherCover}
      />

      <Books searchParams={searchParams} publisherSlug={params.slug} />
    </div>
  );
};

export default PublisherPage;
