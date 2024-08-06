import { defaultSrc } from "@/constants";
import { Books, NotFound, Profile } from "@/components";
import { getCategoryBySlug } from "@/utils/api";
import { Category } from "@/interface";

interface Props {
  searchParams?: any;
  params: {
    slug: string;
  };
}

const CategoryPage = async ({ searchParams, params }: Props) => {
  const category: Category = await getCategoryBySlug(params.slug);

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

      <Books searchParams={searchParams} categorySlug={params.slug} />
    </div>
  );
};

export default CategoryPage;
