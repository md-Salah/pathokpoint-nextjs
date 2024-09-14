"use client";
import { Tag } from '@/interface';
import { Checkbox } from '@/micro-components/Admin';
import { dateTime, isEnglish } from '@/utils';

interface Props {
  tag: Tag;
  setTag: (tag: Tag) => void;
  handleTouched?: () => void;
}

const TagForm = ({ tag, setTag, handleTouched }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setTag({ ...tag, [e.target.name]: e.target.value });
    if (handleTouched) handleTouched();
  };

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag({ ...tag, [e.target.name]: e.target.checked });
    if (handleTouched) handleTouched();
  };

  return (
    <div className="py-3 lg:px-14 lg:py-8 text-xs lg:text-sm">
      {/* Meta info */}
      {tag.id && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 border-b pb-8 mb-4 font-medium">
          <div className="col-span-2 lg:col-span-1">
            <label className="label-2">ID</label>
            <h4>{tag.id}</h4>
          </div>
          <div>
            <label className="label-2">Created at</label>
            <h4>{tag.created_at && dateTime(tag.created_at).datetime}</h4>
          </div>
          <div>
            <label className="label-2">Updated at</label>
            <h4>{tag.updated_at && dateTime(tag.updated_at).datetime}</h4>
          </div>
        </div>
      )}

      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8">
        <div className="relative">
          <label className="label-2">Name</label>
          <input
            type="text"
            name="name"
            value={tag.name}
            onChange={handleChange}
            className={`input w-full ${!isEnglish(tag.name) && "font-bn"}`}
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {tag.name.length}/100
          </span>
        </div>
        <div className="relative">
          <label className="label-2">Slug</label>
          <input
            type="text"
            name="slug"
            value={tag.slug}
            onChange={handleChange}
            className="input w-full"
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {tag.slug.length}/100
          </span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 lg:gap-8">
        <Checkbox
          label="Private"
          name="private"
          checked={tag.private}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Show in menu"
          name="is_in_menu"
          checked={tag.is_in_menu}
          handleChange={toggleCheckbox}
        />
      </div>
    </div>
  );
};

export default TagForm;
