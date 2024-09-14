"use client";

import { BookAdmin } from '@/interface';
import { Checkbox } from '@/micro-components/Admin';
import { dateTime, isEnglish } from '@/utils';

import SelectAuthor from './SelectAuthor';
import SelectCategory from './SelectCategory';
import SelectPublisher from './SelectPublisher';
import SelectTag from './SelectTag';
import SelectTranslator from './SelectTranslator';

interface Props {
  book: BookAdmin;
  setBook: (book: BookAdmin) => void;
  handleTouched?: () => void;
}

const AddBookForm = ({ book, setBook, handleTouched }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    if (handleTouched) handleTouched();
  };

  const handleCondition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const isUsed = e.target.value === "new" ? false : true;
    setBook({ ...book, condition: e.target.value, is_used: isUsed });
    if (handleTouched) handleTouched();
  };

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [e.target.name]: e.target.checked });
    if (handleTouched) handleTouched();
  };

  return (
    <>
      <div className="py-3 lg:px-14 lg:py-8 text-xs lg:text-sm">
        {/* Meta Info */}
        {book.id ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 border-b pb-8 mb-4 font-medium">
            <div className="col-span-2 lg:col-span-1">
              <label className="label-2">ID</label>
              <h4>{book.id}</h4>
            </div>
            <div>
              <label className="label-2">Public ID</label>
              <h4>{book.public_id}</h4>
            </div>
            <div>
              <label className="label-2">SKU</label>
              <h4>{book.sku}</h4>
            </div>
            <div>
              <label className="label-2">Created at</label>
              <h4>{book.created_at && dateTime(book.created_at).datetime}</h4>
            </div>
            <div>
              <label className="label-2">Updated at</label>
              <h4>{book.updated_at && dateTime(book.updated_at).datetime}</h4>
            </div>
          </div>
        ) : (
          <div className=" mb-4">
            <label className="label-2">SKU</label>
            <input
              type="text"
              name="sku"
              value={book.sku}
              onChange={handleChange}
              className="input max-w-full"
            />
          </div>
        )}

        {/* Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8 border-b pb-8 mb-4">
          <div className="relative">
            <label className="label-2">Name</label>
            <input
              type="text"
              name="name"
              value={book.name}
              onChange={handleChange}
              className={`input w-full ${!isEnglish(book.name) && "font-bn"}`}
            />
            <span className="absolute bottom-0 right-1 text-xxs">
              {book.name.length}/100
            </span>
          </div>
          <div className="relative">
            <label className="label-2">Slug</label>
            <input
              type="text"
              name="slug"
              value={book.slug}
              onChange={handleChange}
              className="input w-full"
            />
            <span className="absolute bottom-0 right-1 text-xxs">
              {book.slug.length}/100
            </span>
          </div>
          <div className="sm:col-span-2">
            <label className="label-2">Short Description</label>
            <div className="relative">
              <input
                type="text"
                name="short_description"
                value={book.short_description || ""}
                onChange={handleChange}
                className="input w-full"
              />
              <span className="absolute bottom-0 right-1 text-xxs">
                {book.short_description?.length || 0}/1000
              </span>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="label-2">Description</label>
            <div className="relative w-full">
              <textarea
                className="textarea textarea-sm w-full focus:outline-none focus:border-primary"
                name="description"
                value={book.description || ""}
                onChange={handleChange}
                placeholder="Enter book description"
              ></textarea>
              <span className="absolute right-2 bottom-2 z-20 text-xs">
                {book.description?.length || 0}/10,000
              </span>
            </div>
          </div>
          <div>
            <label className="label-2">Author</label>
            <SelectAuthor book={book} setBook={setBook} />
          </div>
          <div>
            <label className="label-2">Translator</label>
            <SelectTranslator book={book} setBook={setBook} />
          </div>
          <div>
            <label className="label-2">Publisher</label>
            <SelectPublisher book={book} setBook={setBook} />
          </div>
          <div>
            <label className="label-2">Category</label>
            <SelectCategory book={book} setBook={setBook} />
          </div>
          <div>
            <label className="label-2">Tag</label>
            <SelectTag book={book} setBook={setBook} />
          </div>
          <div></div>
          <div>
            <label className="label-2">Cover</label>
            <select
              className="select select-bordered focus:outline-none focus:border-primary"
              name="cover"
              value={book.cover || ""}
              onChange={handleChange}
            >
              <option value="">Select cover</option>
              <option value="hardcover">Hardcover</option>
              <option value="paperback">Paperback</option>
            </select>
          </div>
          <div>
            <label className="label-2">Edition</label>
            <input
              type="text"
              name="edition"
              value={book.edition || ""}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="label-2">Condition</label>
            <select
              className="select select-bordered focus:outline-none focus:border-primary"
              value={book.condition}
              onChange={handleCondition}
            >
              <option value="">Select condition</option>
              <option value="new">New</option>
              <option value="old-like-new">Old like new</option>
              <option value="old-good-enough">Old good enough</option>
              <option value="old-readable">Old readable</option>
            </select>
          </div>
          <div>
            <label className="label-2">Is Used</label>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              name="is_used"
              checked={book.is_used}
              onChange={toggleCheckbox}
            />
          </div>
        </div>

        {/* Price */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          <div>
            <label className="label-2">Regular Price</label>
            <input
              type="text"
              className="input w-full"
              name="regular_price"
              value={book.regular_price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label-2">Sale Price</label>
            <input
              type="text"
              className="input w-full"
              name="sale_price"
              value={book.sale_price}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Stock */}
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 pb-8 border-b mb-4">
          <div>
            <label className="label-2">Quantity</label>
            <input
              type="text"
              className="input w-full"
              name="quantity"
              value={book.quantity}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label-2">In Stock</label>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              name="in_stock"
              checked={book.in_stock}
              onChange={toggleCheckbox}
            />
          </div>
          <div>
            <label className="label-2">Manage Stock</label>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              name="manage_stock"
              checked={book.manage_stock}
              onChange={toggleCheckbox}
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 pb-8 border-b mb-4">
          <div>
            <label className="label-2">Language</label>
            <select
              className="select select-bordered focus:outline-none focus:border-primary"
              name="language"
              value={book.language || ""}
              onChange={handleChange}
            >
              <option value="">Select language</option>
              <option value="bangla">Bangla</option>
              <option value="english">English</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="label-2">Country</label>
            <select
              className="select select-bordered focus:outline-none focus:border-primary"
              name="country"
              value={book.country || ""}
              onChange={handleChange}
            >
              <option value="">Select country</option>
              <option value="BD">Bangladesh</option>
              <option value="IN">India</option>
              <option value="GB">United Kingdom</option>
            </select>
          </div>
          <div>
            <label className="label-2">No. of Pages</label>
            <input
              type="text"
              className="input max-w-full"
              name="no_of_pages"
              value={book.no_of_pages || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label-2">Weight in gm</label>
            <input
              type="text"
              className="input max-w-full"
              name="weight_in_gm"
              value={book.weight_in_gm || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="label-2">ISBN</label>
            <div className="relative w-fit">
              <input
                type="text"
                className="input max-w-full"
                name="isbn"
                value={book.isbn || ""}
                onChange={handleChange}
              />
              <span className="absolute right-1 bottom-0 text-xxs">
                {book.isbn?.length || 0}/
                {(book.isbn?.length || 0) > 10 ? 13 : 10}
              </span>
            </div>
          </div>
        </div>

        {/* Inventory management */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
          <div>
            <label className="label-2">Cost</label>
            <input
              type="text"
              className="input max-w-full"
              name="cost"
              value={book.cost}
              onChange={handleChange}
            />
          </div>
          <div className="relative lg:col-span-2">
            <label className="label-2">Notes</label>
            <input
              type="text"
              name="notes"
              value={book.notes || ""}
              onChange={handleChange}
              className="input w-full"
            />
            <span className="absolute bottom-0 right-1 text-xxs">
              {book.notes?.length || 0}/1000
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          <div>
            <label className="label-2">Stock Location</label>
            <select
              className="select select-bordered focus:outline-none focus:border-primary"
              name="stock_location"
              value={book.stock_location}
              onChange={handleChange}
            >
              <option value="">Select stock</option>
              <option value="mirpur-11">Mirpur-11</option>
              <option value="on-demand">On Demand</option>
            </select>
          </div>
          <div className="lg:hidden"></div>
          <div>
            <label className="label-2">Shelf</label>
            <input
              type="text"
              name="shelf"
              placeholder="e.g. 1, 2"
              value={book.shelf || ""}
              onChange={handleChange}
              className="input max-w-full"
            />
          </div>
          <div>
            <label className="label-2">Row Column</label>
            <input
              type="text"
              className="input max-w-full"
              placeholder="e.g. A1, B2"
              name="row_col"
              value={book.row_col || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Images */}
        <div></div>

        {/* Featured */}
        <div className="grid grid-cols-2 gap-3 lg:gap-8 mt-8 border-t pt-8">
          <Checkbox
            label="Featured"
            name="is_featured"
            checked={book.is_featured}
            handleChange={toggleCheckbox}
          />
          <Checkbox
            label="Must read"
            name="is_must_read"
            checked={book.is_must_read}
            handleChange={toggleCheckbox}
          />
          <Checkbox
            label="Vintage"
            name="is_vintage"
            checked={book.is_vintage}
            handleChange={toggleCheckbox}
          />
          <Checkbox
            label="Islamic featured"
            name="is_islamic"
            checked={book.is_islamic}
            handleChange={toggleCheckbox}
          />
          <Checkbox
            label="Translated featured"
            name="is_translated"
            checked={book.is_translated}
            handleChange={toggleCheckbox}
          />
          <Checkbox
            label="Recommended"
            name="is_recommended"
            checked={book.is_recommended}
            handleChange={toggleCheckbox}
          />
          <Checkbox
            label="Big sale"
            name="is_big_sale"
            checked={book.is_big_sale}
            handleChange={toggleCheckbox}
          />
          <Checkbox
            label="Popular"
            name="is_popular"
            checked={book.is_popular}
            handleChange={toggleCheckbox}
          />
        </div>
      </div>
    </>
  );
};

export default AddBookForm;
