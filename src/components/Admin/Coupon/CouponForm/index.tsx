import { Coupon } from '@/interface';
import { Courier, IdNameSlug } from '@/interface/coupon';
import { dateTime } from '@/utils';

import MultiSelector from './MultiSelector';
import SelectConditions from './SelectConditions';
import SelectShippingMethods from './SelectShippingMethods';

interface Props {
  coupon: Coupon;
  setCoupon: (coupon: Coupon) => void;
  handleTouched?: () => void;
}

const CouponForm = ({ coupon, setCoupon, handleTouched }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let value: string | null = e.target.value;
    if (value === "") value = null;
    setCoupon({ ...coupon, [e.target.name]: e.target.value });
    if (handleTouched) handleTouched();
  };

  const toggleIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon({ ...coupon, is_active: e.target.checked });
    if (handleTouched) handleTouched();
  };

  const handleSelectCourier = (item: Courier) => {
    if (coupon.exclude_couriers.find((c) => c.id === item.id)) return;
    setCoupon({
      ...coupon,
      exclude_couriers: [...coupon.exclude_couriers, item],
    });
    if (handleTouched) handleTouched();
  };

  const handleRemoveCourier = (id: string) => {
    setCoupon({
      ...coupon,
      exclude_couriers: coupon.exclude_couriers.filter((c) => c.id !== id),
    });
    if (handleTouched) handleTouched();
  };

  const handleSelect = (name: string, item: IdNameSlug) => {
    // @ts-ignore
    if (coupon[name].find((a) => a.id === item.id)) return;
    // @ts-ignore
    setCoupon({ ...coupon, [name]: [...coupon[name], item] });
    if (handleTouched) handleTouched();
  };

  const handleRemove = (name: string, id: string) => {
    // @ts-ignore
    setCoupon({ ...coupon, [name]: coupon[name].filter((a) => a.id !== id) });
    if (handleTouched) handleTouched();
  };

  const handleSelectCondition = (name: string) => {
    if (coupon.include_conditions.find((c) => c === name)) return;
    setCoupon({
      ...coupon,
      include_conditions: [...coupon.include_conditions, name],
    });
    if (handleTouched) handleTouched();
  };

  const handleRemoveCondition = (name: string) => {
    setCoupon({
      ...coupon,
      include_conditions: coupon.include_conditions.filter((c) => c !== name),
    });
    if (handleTouched) handleTouched();
  };

  return (
    <div className="py-3 lg:px-14 lg:py-8 text-xs lg:text-sm">
      {/* Meta info */}
      {coupon.id && (
        <div className="flex justify-end">
          <div className="grid grid-cols-1 gap-3 font-medium w-fit">
            <div className="flex gap-2">
              <label className="text-black04">Created at:</label>
              <h4>
                {coupon.created_at && dateTime(coupon.created_at).datetime}
              </h4>
            </div>
            <div className="flex gap-2">
              <label className="text-black04">Updated at:</label>
              <h4>
                {coupon.updated_at && dateTime(coupon.updated_at).datetime}
              </h4>
            </div>
          </div>
        </div>
      )}

      {/* Basic Info */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8">
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
          <label className="label-2">Expires at (mm/dd/yyyy)</label>
          <input
            type="datetime-local"
            name="expiry_date"
            value={
              coupon.expiry_date
                ? new Date(coupon.expiry_date)
                    .toLocaleString("sv-SE", { timeZoneName: "short" })
                    .replace(" ", "T")
                    .slice(0, 16)
                : ""
            }
            onChange={handleChange}
            className="input w-full focus:outline-none focus:border-primary"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label-2">Short Description</label>
          <div className="relative w-full">
            <textarea
              className="textarea textarea-sm w-full h-20 focus:outline-none focus:border-primary font-bn"
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
            value={coupon.discount_type}
            onChange={handleChange}
          >
            <option value="percentage">Percentage</option>
            <option value="fixed-amount">Fixed Amount</option>
          </select>
        </div>
        <div>
          <label className="label-2">Is Active</label>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            name="is_active"
            checked={coupon.is_active}
            onChange={toggleIsActive}
          />
        </div>
      </div>

      <h4 className="mt-8 border-b pb-2">Old book discount</h4>
      <div className="mt-3 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8">
        <div>
          <label className="label-2">
            Discount({coupon.discount_type === "percentage" ? "%" : "৳"})
          </label>
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
          <label className="label-2">
            Discount({coupon.discount_type === "percentage" ? "%" : "৳"})
          </label>
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
            value={
              coupon.max_shipping_charge !== null
                ? coupon.max_shipping_charge
                : ""
            }
            onChange={handleChange}
          />
          <span className="text-black04">
            {coupon.max_shipping_charge === null ||
            coupon.max_shipping_charge === "" 
              ? "Regular charge applicable"
              : coupon.max_shipping_charge == 0
              ? "Free Shipping"
              : `Max Shipping Charge: ${coupon.max_shipping_charge}`}
          </span>
        </div>
        <div>
          <label className="label-2">Exclude Shipping Methods</label>
          <SelectShippingMethods
            selectedItems={coupon.exclude_couriers}
            handleSelect={handleSelectCourier}
            handleRemove={handleRemoveCourier}
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
        <div>
          <label className="label-2">Include Conditions</label>
          <SelectConditions
            selectedItems={coupon.include_conditions}
            handleSelect={handleSelectCondition}
            handleRemove={handleRemoveCondition}
          />
        </div>
      </div>
    </div>
  );
};

export default CouponForm;
