"use client";
import { Publisher } from '@/interface';
import { Checkbox, SelectCountry } from '@/micro-components/Admin';
import { dateTime, isEnglish } from '@/utils';

interface Props {
  publisher: Publisher;
  setPublisher: (publisher: Publisher) => void;
  handleTouched?: () => void;
}

const PublisherForm = ({ publisher, setPublisher, handleTouched }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setPublisher({ ...publisher, [e.target.name]: e.target.value });
    if (handleTouched) handleTouched();
  };

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPublisher({ ...publisher, [e.target.name]: e.target.checked });
    if (handleTouched) handleTouched();
  };

  return (
    <div className="py-3 lg:px-14 lg:py-8 text-xs lg:text-sm">
      {/* Meta info */}
      {publisher.id && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 border-b pb-8 mb-4 font-medium">
          <div className="col-span-2 lg:col-span-1">
            <label className="label-2">ID</label>
            <h4>{publisher.id}</h4>
          </div>
          <div>
            <label className="label-2">Created at</label>
            <h4>
              {publisher.created_at && dateTime(publisher.created_at).datetime}
            </h4>
          </div>
          <div>
            <label className="label-2">Updated at</label>
            <h4>
              {publisher.updated_at && dateTime(publisher.updated_at).datetime}
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
            value={publisher.name}
            onChange={handleChange}
            className={`input w-full ${
              !isEnglish(publisher.name) && "font-bn"
            }`}
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {publisher.name.length}/100
          </span>
        </div>
        <div className="relative">
          <label className="label-2">Slug</label>
          <input
            type="text"
            name="slug"
            value={publisher.slug}
            onChange={handleChange}
            className="input w-full"
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {publisher.slug.length}/100
          </span>
        </div>
        <div className="sm:col-span-2">
          <label className="label-2">Description</label>
          <div className="relative w-full">
            <textarea
              className="textarea textarea-sm w-full focus:outline-none focus:border-primary"
              name="description"
              value={publisher.description || ""}
              onChange={handleChange}
              placeholder="Enter publisher description"
            ></textarea>
            <span className="absolute right-2 bottom-2 z-20 text-xs">
              {publisher.description?.length || 0}/10,000
            </span>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8">
        <div>
          <label className="label-2">Book Published</label>
          <input
            type="text"
            name="book_published"
            value={publisher.book_published || ""}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label className="label-2">Country</label>
          <SelectCountry
            name="country"
            value={publisher.country || ""}
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:gap-8 mt-8 border-t pt-8">
        <Checkbox
          label="Islamic Featured"
          name="is_islamic"
          checked={publisher.is_islamic}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="English Featured"
          name="is_english"
          checked={publisher.is_english}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Popular"
          name="is_popular"
          checked={publisher.is_popular}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Big Sale"
          name="is_big_sale"
          checked={publisher.is_big_sale}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Show in menu"
          name="is_in_menu"
          checked={publisher.is_in_menu}
          handleChange={toggleCheckbox}
        />
      </div>
    </div>
  );
};

export default PublisherForm;
