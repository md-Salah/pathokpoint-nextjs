import { CategoryCard, OnPageSearchBar, PaginationHandler } from '@/components';
import { Category } from '@/interface';
import { DataCount } from '@/micro-components';
import { fetchWithHeader } from '@/utils/axiosConfig';

interface Props {
  searchParams?: any;
}

const Categories = async ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();
  const { data, headers } = await fetchWithHeader(
    `/category/all?per_page=24&${query}`
  );

  return (
    <div className="layout-container layout-px layout-mt bg-white">
      <div className="py-4 sm:px-4">
        <div>
          <h1 className="text-lg lg:text-2xl font-bold mb-1">Categories</h1>
          {headers && (
            <DataCount
              currentPage={parseInt(headers["x-current-page"])}
              perPage={parseInt(headers["x-per-page"])}
              totalCount={parseInt(headers["x-total-count"])}
            />
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <OnPageSearchBar placeholder="Search Category" />
        </div>
        {data.length === 0 && (
          <p className="mt-4 text-center text-black04 py-10">
            No category found
          </p>
        )}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 overflow-hidden">
          {data.map((category: Category) => (
            <CategoryCard key={category.id} category={category} fixW={false} />
          ))}
        </div>
        {headers && (
          <div className="mt-4 flex justify-center sm:justify-end">
            <PaginationHandler totalPages={headers["x-total-pages"]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
