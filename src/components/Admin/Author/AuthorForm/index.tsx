"use client";

import { Author } from '@/interface';
import { DateInput } from '@/micro-components';
import { Checkbox, FileUpload, ImageWithRemoveIcon, SelectCountry } from '@/micro-components/Admin';
import { dateTime, isEnglish } from '@/utils';

interface Props {
  author: Author;
  setAuthor: (author: Author) => void;
  setLogo: (logo: File | null) => void;
  setBanner: (banner: File | null) => void;
  handleTouched?: () => void;
}

const AuthorForm = ({
  author,
  setAuthor,
  handleTouched,
  setLogo,
  setBanner,
}: Props) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
    if (handleTouched) handleTouched();
  };

  const handleBirthDate = (date: string) => {
    setAuthor({ ...author, birth_date: date });
    if (handleTouched) handleTouched();
  };

  const handleDeathDate = (date: string) => {
    setAuthor({ ...author, death_date: date });
    if (handleTouched) handleTouched();
  };

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor({ ...author, [e.target.name]: e.target.checked });
    if (handleTouched) handleTouched();
  };

  const handleRemoveLogo = () => {
    setAuthor({ ...author, image_id: null, image: null });
    if (handleTouched) handleTouched();
  };

  const handleRemoveBanner = () => {
    setAuthor({ ...author, banner_id: null, banner: null });
    if (handleTouched) handleTouched();
  };

  return (
    <div className="py-3 lg:px-14 lg:py-8 text-xs lg:text-sm">
      {/* Meta info */}
      {author.id && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 border-b pb-8 mb-4 font-medium">
          <div className="col-span-2 lg:col-span-1">
            <label className="label-2">ID</label>
            <h4>{author.id}</h4>
          </div>
          <div>
            <label className="label-2">Created at</label>
            <h4>{author.created_at && dateTime(author.created_at).datetime}</h4>
          </div>
          <div>
            <label className="label-2">Updated at</label>
            <h4>{author.updated_at && dateTime(author.updated_at).datetime}</h4>
          </div>
          <div>
            <label className="label-2">Followers count</label>
            <h4>{author.followers_count}</h4>
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
            value={author.name}
            onChange={handleChange}
            className={`input w-full ${!isEnglish(author.name) && "font-bn"}`}
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {author.name.length}/100
          </span>
        </div>
        <div className="relative">
          <label className="label-2">Slug</label>
          <input
            type="text"
            name="slug"
            value={author.slug}
            onChange={handleChange}
            className="input w-full"
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {author.slug.length}/100
          </span>
        </div>
        <div className="sm:col-span-2">
          <label className="label-2">Description</label>
          <div className="relative w-full">
            <textarea
              className="textarea textarea-sm w-full h-32 focus:outline-none focus:border-primary"
              name="description"
              value={author.description || ""}
              onChange={handleChange}
              placeholder="Enter author description"
            ></textarea>
            <span className="absolute right-2 bottom-2 z-20 text-xs">
              {author.description?.length || 0}/10,000
            </span>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8">
        <div className="max-w-sm">
          <label className="label-2">Birth Date</label>
          <DateInput
            currentDate={author.birth_date}
            handleChange={handleBirthDate}
          />
        </div>
        <div className="max-w-sm">
          <label className="label-2">Death Date</label>
          <DateInput
            currentDate={author.death_date}
            handleChange={handleDeathDate}
          />
        </div>
        <div>
          <label className="label-2">Book Published</label>
          <input
            type="text"
            name="book_published"
            value={author.book_published || ""}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label className="label-2">City</label>
          <input
            type="text"
            name="city"
            value={author.city || ""}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label className="label-2">Country</label>
          <SelectCountry
            name="country"
            value={author.country || ""}
            handleChange={handleChange}
          />
        </div>
      </div>

      {/* Logo & Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 mt-8 border-t pt-4">
        <div>
          <h3 className="label-2 mb-2">Profile Picture</h3>
          <div
            className="w-32"
            style={{
              aspectRatio: "120/120",
            }}
          >
            {author.image ? (
              <ImageWithRemoveIcon
                src={author.image.src}
                handleRemove={handleRemoveLogo}
              />
            ) : (
              <FileUpload
                setFile={setLogo}
                handleTouched={handleTouched}
                helperText="120x120px"
              />
            )}
          </div>
        </div>
        <div>
          <h3 className="label-2 mb-2">Banner</h3>
          <div
            className="w-full"
            style={{
              aspectRatio: "1328/256",
            }}
          >
            {author.banner ? (
              <ImageWithRemoveIcon
                src={author.banner.src}
                handleRemove={handleRemoveBanner}
              />
            ) : (
              <FileUpload
                setFile={setBanner}
                handleTouched={handleTouched}
                helperText="1328x256px"
              />
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:gap-8 mt-8 border-t pt-8">
        <Checkbox
          label="Popular"
          name="is_popular"
          checked={author.is_popular}
          handleChange={toggleCheckbox}
        />
        <Checkbox
          label="Show in menu"
          name="is_in_menu"
          checked={author.is_in_menu}
          handleChange={toggleCheckbox}
        />
      </div>
    </div>
  );
};

export default AuthorForm;
