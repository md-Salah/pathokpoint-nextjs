import { defaultSrc } from "@/constants";
import { Books, NotFound, Profile } from "@/components";
import { getAuthorBySlug, getBooks } from "@/utils/api";
import { Author, Book } from "@/interface";

interface Params {
  slug: string;
}

const AuthorPage = async ({ params }: { params: Params }) => {
  const author: Author = await getAuthorBySlug(params.slug);
  const books: Book[] = author
    ? await getBooks("author__id__in=" + author.id)
    : [];

  if (!author)
    return (
      <NotFound>
        দুঃখিত! <br />
        লেখক খুঁজে পাওয়া যায়নি
      </NotFound>
    );

  return (
    <div>
      <Profile
        name={author.name}
        description={author.description}
        dp={author.image?.src || defaultSrc.author}
        cover="/banner/b (2).png"
        handleFollow={() => {}}
      />

      <Books books={books} />
    </div>
  );
};

export default AuthorPage;
