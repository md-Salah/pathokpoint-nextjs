"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const LanguageFilter = ({
  updateSearchParams,
}: {
  updateSearchParams: (params: URLSearchParams) => void;
}) => {
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState<string>(
    searchParams.get("language") || ""
  );

  const handleLanguage = (ln: string) => {
    setLanguage((prev) => (prev === ln ? "" : ln));
    const params = new URLSearchParams(searchParams.toString());
    const language = params.get("language");
    if (language && language === ln) params.delete("language");
    else params.set("language", ln);
    updateSearchParams(params);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-3 px-5 border-b">
        <h4 className="font-semibold text-black02 text-base">Language</h4>
      </div>
      <div className="px-5 pt-3 pb-5 form-control">
        <CheckBox
          label="Bangla"
          handleLanguage={handleLanguage}
          ln={language}
        />
        <CheckBox
          label="English"
          handleLanguage={handleLanguage}
          ln={language}
        />
        <CheckBox label="Other" handleLanguage={handleLanguage} ln={language} />
      </div>
    </div>
  );
};

export default LanguageFilter;

const CheckBox = ({
  label,
  ln,
  handleLanguage,
}: {
  label: string;
  ln: string;
  handleLanguage: (ln: string) => void;
}) => (
  <label className="label py-1 pl-0 cursor-pointer justify-start gap-2">
    <input
      type="checkbox"
      className="checkbox checkbox-xs checkbox-primary"
      checked={ln === label.toLowerCase()}
      onChange={() => handleLanguage(label.toLowerCase())}
    />
    <span className="label-text">{label}</span>
  </label>
);
