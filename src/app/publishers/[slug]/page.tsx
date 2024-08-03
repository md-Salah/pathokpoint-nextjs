import { defaultSrc } from "@/constants";
import { Books, NotFound, Profile } from "@/components";
import { Book, Publisher } from "@/interface";
import { getBooks, getPublisherBySlug } from "@/utils/api";

interface Params {
  slug: string;
}

const PublisherPage = async ({ params }: { params: Params }) => {
  const publisher: Publisher = await getPublisherBySlug(params.slug);
  const books: Book[] = publisher
    ? await getBooks("publisher__id__in=" + publisher.id)
    : [];

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

      <Books books={books} />
    </div>
  );
};

export default PublisherPage;
