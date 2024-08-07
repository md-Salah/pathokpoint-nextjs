import { defaultSrc } from "@/constants";
import { Books, NotFound, Profile } from "@/components";
import { getAuthorBySlug } from "@/utils/api";
import { Author } from "@/interface";

interface Props {
  searchParams?: any;
  params: {
    slug: string;
  };
}

const AuthorPage = async ({ searchParams, params }: Props) => {
  const author: Author = await getAuthorBySlug(params.slug);

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

      <Books searchParams={searchParams} authorSlug={params.slug} />
    </div>
  );
};

export default AuthorPage;
