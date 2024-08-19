"use client";
import { useDispatch, useSelector } from 'react-redux';

import { setTab } from '@/redux/features/search-slice';
import { AppDispatch, RootState } from '@/redux/store';

import Author from './Author';
import Book from './Book';
import Category from './Category';

const SearchSuggestion = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tab, books, authors, categories, loading } = useSelector(
    (state: RootState) => state.search
  );
  return (
    <div role="tablist" className="min-w-80">
      {/* Tab */}
      <div className="tabs tabs-bordered rounded-t-lg mt-3 font-bn">
        <div
          role="tab"
          className={`tab ${tab === "book" && "tab-active"}`}
          onClick={() => dispatch(setTab("book"))}
        >
          বই
        </div>
        <div
          role="tab"
          className={`tab ${tab === "author" && "tab-active"}`}
          onClick={() => dispatch(setTab("author"))}
        >
          লেখক
        </div>
        <div
          role="tab"
          className={`tab ${tab === "category" && "tab-active"}`}
          onClick={() => dispatch(setTab("category"))}
        >
          বিষয়
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full max-h-96 min-h-80 overflow-y-scroll rounded-b">
        {tab === "book" && (
          <div>
            {loading ? (
              <Loading />
            ) : (
              <>
                {books.length > 0 ? (
                  books.map((book) => <Book key={book.id} book={book} />)
                ) : (
                  <NoResult />
                )}
              </>
            )}
          </div>
        )}
        {tab === "author" && (
          <div>
            {loading ? (
              <Loading />
            ) : (
              <>
                {authors.length > 0 ? (
                  authors.map((author) => (
                    <Author key={author.id} author={author} />
                  ))
                ) : (
                  <NoResult />
                )}
              </>
            )}
          </div>
        )}
        {tab === "category" && (
          <div>
            {loading ? (
              <Loading />
            ) : (
              <>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <Category key={category.id} category={category} />
                  ))
                ) : (
                  <NoResult />
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSuggestion;

const NoResult = () => (
  <p className="text-center text-black04 mt-10">No result found</p>
);

const Loading = () => (
  <div className="flex w-full justify-center mt-4">
    <div className="loading loading-spinner loading-sm text-black04"></div>
  </div>
);
