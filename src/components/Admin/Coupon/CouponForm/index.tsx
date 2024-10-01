import MultiSelect from '@/components/MultiSelect';
import { Coupon } from '@/interface';
import { dateTime, isEnglish } from '@/utils';

import MultiSelector from './MultiSelector';

interface Item {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  coupon: Coupon;
}

const AddCouponForm = ({ coupon }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // setCoupon({ ...coupon, [e.target.name]: e.target.value });
  };

  const handleSelect = (name: string, item: Item) => {
    // setCoupon({ ...coupon, [name]: items });
  };

  const handleRemove = (name: string, id: string) => {
    // setCoupon({ ...coupon, [name]: coupon[name].filter((a) => a.id !== id) });
  };

  return (
    <div className="py-3 lg:px-14 lg:py-8 text-xs lg:text-sm">
      {/* Meta info */}
      {coupon.id && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 border-b pb-8 mb-4 font-medium">
          <div className="col-span-2 lg:col-span-1">
            <label className="label-2">ID</label>
            <h4>{coupon.id}</h4>
          </div>
          <div>
            <label className="label-2">Created at</label>
            <h4>{coupon.created_at && dateTime(coupon.created_at).datetime}</h4>
          </div>
          <div>
            <label className="label-2">Updated at</label>
            <h4>{coupon.updated_at && dateTime(coupon.updated_at).datetime}</h4>
          </div>
        </div>
      )}

      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8">
        <div className="relative">
          <label className="label-2">Coupon Code</label>
          <input
            type="text"
            name="code"
            value={coupon.code}
            onChange={handleChange}
            className="input w-full"
          />
          <span className="absolute bottom-0 right-1 text-xxs">
            {coupon.code.length}/20
          </span>
        </div>
        <div className="relative">
          <label className="label-2">Expires at</label>
          <input
            type="text"
            name="expiry_date"
            value={coupon.expiry_date || ""}
            onChange={handleChange}
            className="input w-full"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label-2">Short Description</label>
          <div className="relative w-full">
            <textarea
              className="textarea textarea-sm w-full h-32 focus:outline-none focus:border-primary font-bn"
              name="short_description"
              value={coupon.short_description || ""}
              onChange={handleChange}
              placeholder="৫৯৯ টাকার বই কিনলে ফ্রি ডেলিভারি"
            ></textarea>
            <span className="absolute right-2 bottom-2 z-20 text-xs">
              {coupon.short_description?.length || 0}/100
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-8">
        <div>
          <label className="label-2">Discount Type</label>
          <select
            className="select select-bordered focus:outline-none focus:border-primary"
            name="discount_type"
            value={coupon.discount_type || ""}
            onChange={handleChange}
          >
            <option value="percentage">Percentage</option>
            <option value="fixed-amount">Fixed Amount</option>
          </select>
        </div>
        <div>
          <label className="label-2">Is Active</label>
          <select
            className="select select-bordered focus:outline-none focus:border-primary"
            name="discount_type"
            value={coupon.discount_type || ""}
            onChange={handleChange}
          >
            <option value="percentage">Percentage</option>
            <option value="fixed-amount">Fixed Amount</option>
          </select>
        </div>
      </div>

      <h4 className="mt-8 border-b pb-2">Old book discount</h4>
      <div className="mt-3 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
        <div>
          <label className="label-2">Discount(%)</label>
          <input
            type="text"
            className="input w-full"
            name="discount_old"
            value={coupon.discount_old || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label-2">Max Discount(৳)</label>
          <input
            type="text"
            className="input w-full"
            name="max_discount_old"
            value={coupon.max_discount_old || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="label-2">Min Spend(৳)</label>
          <input
            type="text"
            className="input w-full"
            name="min_spend_old"
            value={coupon.min_spend_old || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <h4 className="mt-8 border-b pb-2">New book discount</h4>
      <div className="mt-3 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
        <div>
          <label className="label-2">Discount(%)</label>
          <input
            type="text"
            className="input w-full"
            name="discount_new"
            value={coupon.discount_new || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label-2">Max Discount(৳)</label>
          <input
            type="text"
            className="input w-full"
            name="max_discount_new"
            value={coupon.max_discount_new || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label-2">Min Spend(৳)</label>
          <input
            type="text"
            className="input w-full"
            name="min_spend_new"
            value={coupon.min_spend_new || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <h4 className="mt-8 border-b pb-2"></h4>
      <div className="mt-3 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8">
        <div>
          <label className="label-2">Use limit</label>
          <input
            type="text"
            className="input w-full"
            name="use_limit"
            value={coupon.use_limit || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label-2">Use limit per user</label>
          <input
            type="text"
            className="input w-full"
            name="use_limit_per_user"
            value={coupon.use_limit_per_user || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <h4 className="mt-8 border-b pb-2">Shipping</h4>
      <div className="mt-3 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
        <div>
          <label className="label-2">Shipping Charge</label>
          <input
            type="text"
            className="input w-full"
            name="max_shipping_charge"
            value={coupon.max_shipping_charge || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label-2">Exclude Shipping Methods</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="exclude_couriers"
            selectedItems={coupon.exclude_couriers}
            searchUrl="/courier/all"
          />
        </div>
      </div>

      <h4 className="mt-8 border-b pb-2">Filter</h4>
      <div className="mt-3 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8">
        <div>
          <label className="label-2">Include Books</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="include_books"
            selectedItems={coupon.include_books}
            searchUrl="/book/all"
          />
        </div>
        <div>
          <label className="label-2">Exclude Books</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="exclude_books"
            selectedItems={coupon.exclude_books}
            searchUrl="/book/all"
          />
        </div>
        <div>
          <label className="label-2">Include Authors</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="include_authors"
            selectedItems={coupon.include_authors}
            searchUrl="/author/all"
          />
        </div>
        <div>
          <label className="label-2">Exclude Authors</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="exclude_authors"
            selectedItems={coupon.exclude_authors}
            searchUrl="/author/all"
          />
        </div>
        <div>
          <label className="label-2">Include Categories</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="include_categories"
            selectedItems={coupon.include_categories}
            searchUrl="/category/all"
          />
        </div>
        <div>
          <label className="label-2">Exclude Categories</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="exclude_categories"
            selectedItems={coupon.exclude_categories}
            searchUrl="/category/all"
          />
        </div>
        <div>
          <label className="label-2">Include Publishers</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="include_publishers"
            selectedItems={coupon.include_publishers}
            searchUrl="/publisher/all"
          />
        </div>
        <div>
          <label className="label-2">Exclude Publishers</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="exclude_publishers"
            selectedItems={coupon.exclude_publishers}
            searchUrl="/publisher/all"
          />
        </div>
        <div>
          <label className="label-2">Include Tags</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="include_tags"
            selectedItems={coupon.include_tags}
            searchUrl="/tag/all"
          />
        </div>
        <div>
          <label className="label-2">Exclude Tags</label>
          <MultiSelector
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            name="exclude_tags"
            selectedItems={coupon.exclude_tags}
            searchUrl="/tag/all"
          />
        </div>
      </div>
    </div>
  );
};

export default AddCouponForm;
