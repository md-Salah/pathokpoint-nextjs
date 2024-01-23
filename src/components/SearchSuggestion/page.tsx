const SearchSuggestion = () => {
  return (
    <div className="mt-2">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="বই"
        />
        <div
          role="tabpanel"
          className="tab-content py-4 px-2"
        >
          Tab content 1
        </div>

        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="লেখক"
        />
        <div
          role="tabpanel"
          className="tab-content py-4 px-2"
        >
          Tab content 2
        </div>

        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="বিষয়"
        />
        <div
          role="tabpanel"
          className="tab-content py-4 px-2"
        >
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestion;
