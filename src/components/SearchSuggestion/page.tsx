"use client";

import { useState } from "react";

const SearchSuggestion = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="mt-2">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="বই"
          checked={tab === 0}
          onChange={() => setTab(0)}
        />
        <div role="tabpanel" className="tab-content py-4 px-2">
          Tab content 1
        </div>

        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="লেখক"
          checked={tab === 1}
          onChange={() => setTab(1)}
        />
        <div role="tabpanel" className="tab-content py-4 px-2">
          Tab content 2
        </div>

        <input
          type="radio"
          name="suggestion-tab"
          role="tab"
          className="tab"
          aria-label="বিষয়"
          checked={tab === 2}
          onChange={() => setTab(2)}
        />
        <div role="tabpanel" className="tab-content py-4 px-2">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestion;
