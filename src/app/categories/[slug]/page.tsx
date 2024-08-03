import { defaultSrc } from "@/constants";
import { Books, NotFound, Profile } from "@/components";
import { getBooks, getCategoryBySlug } from "@/utils/api";
import { Book, Category } from "@/interface";

interface Params {
  slug: string;
}

const CategoryPage = async ({ params }: { params: Params }) => {
  const category: Category = await getCategoryBySlug(params.slug);
  const books: Book[] = category
    ? await getBooks("category__id__in=" + category.id)
    : [];

  if (!category)
    return (
      <NotFound>
        দুঃখিত! <br />
        ক্যাটাগরি খুঁজে পাওয়া যায়নি
      </NotFound>
    );

  return (
    <div>
      <Profile
        name={category.name}
        description={category.description}
        dp={category.image?.src || defaultSrc.category}
      />

      <Books books={books} />
    </div>
  );
};

export default CategoryPage;
