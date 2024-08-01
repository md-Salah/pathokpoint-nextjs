"use client";
import React, { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

export interface SuggestionOpitonType {
  id: number;
  title: string;
}

interface InputWrapperProps {
  value: SuggestionOpitonType[];
  setValue: React.Dispatch<React.SetStateAction<SuggestionOpitonType[]>>;
  suggestions: SuggestionOpitonType[];
}

interface StyledTagProps {
  label: string;
  onRemove: () => void;
}

const StyledTag = ({ label, onRemove }: StyledTagProps) => {
  return (
    <div className="flex items-center bg-gray-200 rounded px-2 py-1 m-1 w-fit text-sm text-black02 space-x-1">
      <span>{label}</span>

      <RxCross2 size={16} className="cursor-pointer" onClick={onRemove} />
    </div>
  );
};

const MultipleItemSelector: React.FC<InputWrapperProps> = ({
  value,
  setValue,
  suggestions,
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    SuggestionOpitonType[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleOnChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const removeTag = (index: number) => {
    setValue(value.filter((_, i) => i !== index));
  };

  const handleSelectItem = (id: number) => {
    const suggestion = suggestions?.find((suggestion) => suggestion.id === id);
    if (!value.find((item) => item.id === id)) {
      setValue([...value, { ...(suggestion as SuggestionOpitonType) }]);
    }
    setSearchTerm("");
  };

  const handleAddNewCategory = () => {
    const newCategory = {
      id: suggestions.length + 1,
      title: searchTerm,
    };

    setValue([...value, { ...newCategory }]);
  };

  useEffect(() => {
    function filterItems() {
      const remainingSuggestions = suggestions.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredSuggestions(remainingSuggestions);
    }
    filterItems();
  }, [searchTerm]);

  return (
    <div className="dropdown w-full relative">
      <div
        ref={inputRef}
        className={`flex flex-wrap items-center border-2 p-2 rounded ${
          focused ? "border-blue-400" : "border-gray-300"
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {value.map((option, index) => (
          <StyledTag
            key={index}
            label={option.title}
            onRemove={() => removeTag(index)}
          />
        ))}
        <input
          className="w-full border-none outline-none"
          onChange={handleOnChange}
          value={searchTerm}
        />
      </div>
      <div className="dropdown-content bg-white top-18 rounded-lg shadow-md absolute w-full z-10">
        <ul
          className="flex flex-col space-y-2 h-36 overflow-y-auto p-4 w-full"
          style={{ width: inputRef.current?.clientWidth }}
        >
          {filteredSuggestions.map((suggestion, index) => {
            const isIncluded = value.find((item) => item.id === suggestion.id)
              ? true
              : false;
            return (
              <li
                className={`w-full ${
                  isIncluded && "bg-[#E8E9EB]"
                } hover:bg-[#E8E9EB] p-3 rounded-md text-black02 cursor-pointer`}
                key={index}
              >
                <button
                  onClick={() => handleSelectItem(suggestion.id)}
                  className="w-full text-start"
                >
                  {suggestion.title}
                </button>
              </li>
            );
          })}
        </ul>
        <div
          className="border-t border-[#E8E9EB] text-center py-3 text-primary font-semibold cursor-pointer"
          onClick={handleAddNewCategory}
        >
          <span className="border-b border-primary">Add Categories</span>
        </div>
      </div>
    </div>
  );
};

export default MultipleItemSelector;
