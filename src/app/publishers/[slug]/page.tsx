import { defaultSrc } from "@/constants";
import { Books, NotFound, Profile } from "@/components";
import { Publisher } from "@/interface";
import { getPublisherBySlug } from "@/utils/api";

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
        cover="/banner/b (2).png"
      />

      <Books searchParams={searchParams} publisherSlug={params.slug} />
    </div>
  );
};

export default PublisherPage;
