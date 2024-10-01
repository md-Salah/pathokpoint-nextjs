"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { CouponForm } from '@/components/Admin/Coupon';
import { useToken } from '@/hooks';
import { Coupon } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

const initialCoupon: Coupon = {
  id: "",
  code: "",
  short_description: null,
  expiry_date: null,
  discount_type: "percentage",
  discount_old: null,
  discount_new: null,
  max_discount_old: null,
  max_discount_new: null,
  min_spend_old: 0,
  min_spend_new: 0,
  use_limit: null,
  use_limit_per_user: null,
  is_active: true,
  max_shipping_charge: null,
  include_conditions: [],
  include_books: [],
  include_authors: [],
  include_categories: [],
  include_publishers: [],
  include_tags: [],
  exclude_books: [],
  exclude_authors: [],
  exclude_categories: [],
  exclude_publishers: [],
  exclude_tags: [],
  exclude_couriers: [],
  user_id: null,
};

const AddCoupon = () => {
  const [coupon, setCoupon] = useState<Coupon>(initialCoupon);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { token } = useToken();

  const handleSubmit = async () => {
    setErr(null);
    setLoading(true);
    const payload = {
      ...coupon,
      short_description: coupon.short_description
        ? coupon.short_description
        : null,
      expiry_date: coupon.expiry_date
        ? new Date(coupon.expiry_date).toISOString()
        : null,
      discount_old: coupon.discount_old ? coupon.discount_old : null,
      discount_new: coupon.discount_new ? coupon.discount_new : null,
      min_spend_old: coupon.min_spend_old ? coupon.min_spend_old : 0,
      min_spend_new: coupon.min_spend_new ? coupon.min_spend_new : 0,
      max_discount_old: coupon.max_discount_old
        ? coupon.max_discount_old
        : null,
      max_discount_new: coupon.max_discount_new
        ? coupon.max_discount_new
        : null,
      use_limit: coupon.use_limit ? coupon.use_limit : null,
      use_limit_per_user: coupon.use_limit_per_user
        ? coupon.use_limit_per_user
        : null,
      max_shipping_charge: coupon.max_shipping_charge
        ? coupon.max_shipping_charge
        : null,
      user_id: coupon.user_id ? coupon.user_id : null,
      include_books: coupon.include_books.map((book) => book.id),
      include_authors: coupon.include_authors.map((author) => author.id),
      include_categories: coupon.include_categories.map(
        (category) => category.id
      ),
      include_publishers: coupon.include_publishers.map(
        (publisher) => publisher.id
      ),
      include_tags: coupon.include_tags.map((tag) => tag.id),
      exclude_books: coupon.exclude_books.map((book) => book.id),
      exclude_authors: coupon.exclude_authors.map((author) => author.id),
      exclude_categories: coupon.exclude_categories.map(
        (category) => category.id
      ),
      exclude_publishers: coupon.exclude_publishers.map(
        (publisher) => publisher.id
      ),
      exclude_tags: coupon.exclude_tags.map((tag) => tag.id),
      exclude_couriers: coupon.exclude_couriers.map((courier) => courier.id),
    };
    try {
      const res = await axiosInstance.post("/coupon", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSuccess(true);
      setCoupon(res.data);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleAddAnother = () => {
    setCoupon(initialCoupon);
    setSuccess(false);
  };

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-4">
        <h1 className="font-medium lg:px-14">Add Coupon</h1>
      </div>
      <CouponForm coupon={coupon} setCoupon={setCoupon} />
      <div className="lg:px-14 mb-2 lg:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success font-medium">
              Coupon is added successfully
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-center sm:justify-end gap-2">
          {success ? (
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href={`edit/${coupon.id}`} className="btn btn-error w-32">
                Edit
              </Link>
              <button
                className="btn btn-secondary w-72 sm:w-56"
                onClick={handleAddAnother}
              >
                <FiPlus size={20} className="inline-block" />
                Add Another Coupon
              </button>
            </div>
          ) : (
            <button
              className="btn btn-md btn-primary w-full sm:w-52 sm:max-w-52"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading && <span className="loading loading-spinner"></span>}
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;
