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
  const [logo, setLogo] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);

  const { token } = useToken();

  const handleSubmit = async () => {
    console.log(coupon);
    // setErr(null);
    // setLoading(true);
    // try {
    //   const res = await axiosInstance.post(
    //     "/category",
    //     {
    //       ...category,
    //       parent: category.parent.map((p) => p.id),
    //     },
    //     {
    //       headers: { Authorization: `Bearer ${token}` },
    //     }
    //   );

    //   // Upload logo if exists
    //   if (logo) {
    //     const formData = new FormData();
    //     formData.append("files", logo);
    //     await axiosInstance.post(
    //       `/image/admin?category_id=${res.data.id}`,
    //       formData,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //           "Content-Type": "multipart/form-data",
    //         },
    //       }
    //     );
    //   }

    //   // Upload banner if exists
    //   if (banner) {
    //     const formData = new FormData();
    //     formData.append("files", banner);
    //     await axiosInstance.post(
    //       `/image/admin?category_id=${res.data.id}&is_banner=true`,
    //       formData,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //           "Content-Type": "multipart/form-data",
    //         },
    //       }
    //     );
    //   }

    //   setSuccess(true);
    //   setCoupon(res.data);
    //   setLogo(null);
    //   setBanner(null);
    // } catch (error) {
    //   setErr(extractAxiosErr(error));
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleAddAnother = () => {
    setCoupon(initialCoupon);
    setSuccess(false);
    setLogo(null);
    setBanner(null);
  };

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-4">
        <h1 className="font-medium lg:px-14">Add Coupon</h1>
      </div>
      <CouponForm
        coupon={coupon}
        // setCoupon={setCoupon}
        // setLogo={setLogo}
        // setBanner={setBanner}
      />
      <div className="lg:px-14 mb-2 lg:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success font-medium">
              Category is added successfully
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-center sm:justify-end gap-2">
          {success ? (
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href={`/admin/coupons/${coupon.id}`}
                target="_blank"
                className="btn btn-secondary btn-outline w-32"
              >
                View
              </Link>
              <Link
                href={`/admin/coupons/edit/${coupon.id}`}
                className="btn btn-error w-32"
              >
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
