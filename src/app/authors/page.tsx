import { AuthorCard, OnPageSearchBar, PaginationHandler } from '@/components';
import { Author } from '@/interface';
import { DataCount } from '@/micro-components';
import { fetchWithHeader } from '@/utils/axiosConfig';

interface Props {
  searchParams?: any;
}

const Authors = async ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();
  const { data, headers } = await fetchWithHeader(
    `/author/all?per_page=24&${query}`
  );

  return (
    <div className="layout-container layout-px layout-mt bg-white">
      <div className="py-4 sm:px-4">
        <div>
          <h1 className="text-lg lg:text-2xl font-bold mb-1">Authors</h1>
          {headers && (
            <DataCount
              currentPage={parseInt(headers["x-current-page"])}
              perPage={parseInt(headers["x-per-page"])}
              totalCount={parseInt(headers["x-total-count"])}
              context="authors"
            />
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <div className="w-64 sm:w-72 h-10 sm:h-12">
            <OnPageSearchBar placeholder="Search Author" />
          </div>
        </div>
        {data.length === 0 && (
          <p className="mt-4 text-center text-black04 py-10">
            No authors found
          </p>
        )}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 overflow-hidden">
          {data.map((author: Author) => (
            <AuthorCard key={author.id} author={author} fixW={false} />
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

export default Authors;
