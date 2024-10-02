"use client";
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import { CouponForm } from '@/components/Admin/Coupon';
import Modal from '@/components/Modal';
import { useToken } from '@/hooks';
import { Coupon } from '@/interface';
import { AreYouSure, Error, Skeleton } from '@/micro-components/Admin';
import axiosInstance, { extractAxiosErr, fetchWithToken } from '@/utils/axiosConfig';

interface Props {
  coupon_id: string;
}

const EditCoupon = ({ coupon_id }: Props) => {
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/coupon/id/${coupon_id}`, token, refresh],
    ([url, token, refresh]) => fetchWithToken(url, token)
  );

  useEffect(() => {
    if (data) setCoupon(data);
  }, [data]);

  const handleUpdate = async () => {
    if (!coupon) return;
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
      max_shipping_charge: coupon.max_shipping_charge === ""? null : coupon.max_shipping_charge,
      use_limit: coupon.use_limit ? coupon.use_limit : null,
      use_limit_per_user: coupon.use_limit_per_user
        ? coupon.use_limit_per_user
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
      await axiosInstance.patch(`/coupon/${coupon.id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(true);
      setRefresh(!refresh);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setCoupon(data);
    setTouched(false);
  };

  const handleTouched = () => {
    setTouched(true);
    setSuccess(false);
    setErr(null);
  };

  const handleDelete = async () => {
    if (!coupon) return;
    setErr(null);
    setLoading(true);
    try {
      await axiosInstance.delete(`/coupon/${coupon.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRefresh(!refresh);
    } catch (error) {
      setErr(extractAxiosErr(error));
    } finally {
      setLoading(false);
      modalRef.current?.close();
    }
  };

  if (isLoading) return <Skeleton />;
  if (error) return <Error err={error} />;
  if (!coupon) return <Error err="Coupon not found" />;

  return (
    <div className="bg-white admin-container">
      <div className="border-b border-[#E6E6E6] py-2 lg:px-14 flex justify-between items-center">
        <h1 className="font-medium">Edit Coupon</h1>
        <button
          className="btn btn-sm btn-error"
          onClick={() => modalRef.current?.showModal()}
        >
          Delete
        </button>
        <Modal modalRef={modalRef}>
          <AreYouSure
            loading={loading}
            err={err}
            handleYes={handleDelete}
            handleNo={() => {
              modalRef.current?.close();
            }}
          />
        </Modal>
      </div>
      <CouponForm
        coupon={coupon}
        setCoupon={setCoupon}
        handleTouched={handleTouched}
      />
      <div className="lg:px-14 mb-4 sm:mb-8">
        <div className="mt-12 flex justify-center lg:justify-end">
          {err && <p className="text-error text-sm">{err}</p>}
          {success && (
            <p className="text-success text-sm">
              Coupon is updated successfully
            </p>
          )}
        </div>
        {touched && (
          <div className="mt-4 flex items-center justify-center lg:justify-end gap-2">
            <button
              className="btn btn-md btn-error btn-outline w-32"
              onClick={handleCancel}
              disabled={loading || success}
            >
              Cancel
            </button>
            <button
              className="btn btn-md btn-primary w-32"
              onClick={handleUpdate}
              disabled={loading}
            >
              {loading && <span className="loading loading-spinner"></span>}
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditCoupon;
