"use client";
import { Category } from '@/interface';
import { Checkbox } from '@/micro-components/Admin';
import { dateTime, isEnglish } from '@/utils';

import SelectCategory from './SelectCategory';

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  handleTouched?: () => void;
}

const CategoryForm = ({ category, setCategory, handleTouched }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
    if (handleTouched) handleTouched();
  };

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, [e.target.name]: e.target.checked });
    if (handleTouched) handleTouched();
  };

  return (
    <div className="py-3 lg:px-14 lg:py-8 text-xs lg:text-sm">
      {/* Meta info */}
      {category.id && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 border-b pb-8 mb-4 font-medium">
          <div className="col-span-2 lg:col-span-1">
            <label className="label-2">ID</label>
            <h4>{category.id}</h4>
          </div>
          <div>
            <label className="label-2">Created at</label>
            <h4>
              {category.created_at && dateTime(category.created_at).datetime}
            </h4>
          </div>
          <div>
            <label className="label-2">Updated at</label>
            <h4>
              {category.updated_at && dateTime(category.updated_at).datetime}
            </h4>
          </div>
        </div>
      )}

      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8 border-b pb-8 mb-4">
        <div className="relative">
          <label className="label-2">Name</label>
          <input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
            className={`input w-full ${!isEnglish(category.name) && "font-bn"}`}
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {category.name.length}/100
          </span>
        </div>
        <div className="relative">
          <label className="label-2">Slug</label>
          <input
            type="text"
            name="slug"
            value={category.slug}
            onChange={handleChange}
            className="input w-full"
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {category.slug.length}/100
          </span>
        </div>
        <div className="sm:col-span-2">
          <label className="label-2">Description</label>
          <div className="relative w-full">
            <textarea
              className="textarea textarea-sm w-full focus:outline-none focus:border-primary"
              name="description"
              value={category.description || ""}
              onChange={handleChange}
              placeholder="Enter category description"
            ></textarea>
            <span className="absolute right-2 bottom-2 z-20 text-xs">
              {category.description?.length || 0}/10,000
            </span>
          </div>
        </div>
        <div>
          <label className="label-2">Parent Category</label>
          <SelectCategory category={category} setCategory={setCategory} handleTouched={handleTouched} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:gap-8">
        <Checkbox
          label="Islamic Featured"
          name="is_islamic"
          checked={category.is_islamic}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="English Featured"
          name="is_english_featured"
          checked={category.is_english_featured}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Bangla Featured"
          name="is_bangla_featured"
          checked={category.is_bangla_featured}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Job Featured"
          name="is_job_featured"
          checked={category.is_job_featured}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Comics Featured"
          name="is_comics"
          checked={category.is_comics}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Popular"
          name="is_popular"
          checked={category.is_popular}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Big Sale"
          name="is_big_sale"
          checked={category.is_big_sale}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Show in menu"
          name="is_in_menu"
          checked={category.is_in_menu}
          handleChange={toggleCheckbox}
        />
      </div>
    </div>
  );
};

export default CategoryForm;
