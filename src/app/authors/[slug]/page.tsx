import { Books } from '@/components';
import { Author } from '@/interface';
import { NotFound } from '@/micro-components';
import { getAuthorBySlug } from '@/utils/api';

import AuthorProfile from './AuthorProfile';

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
      <AuthorProfile author={author} />
      <Books searchParams={searchParams} authorSlug={params.slug} />
    </div>
  );
};

export default AuthorPage;
