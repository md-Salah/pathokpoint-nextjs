"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FiEye } from 'react-icons/fi';
import useSWR from 'swr';

import { CarouselModal, Pagination, PaginationHandler, ReviewDetailsModal } from '@/components';
import { useToken } from '@/hooks';
import { IPagination, Review } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error, Tabs } from '@/micro-components/Admin';
import { isEnglish, truncateString } from '@/utils';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

type Props = {
  tabOptions: {
    label: string;
    value: string;
  }[];
  searchParams?: any;
};

const Reviews = ({ tabOptions, searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();
  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/review/all?order_by=-created_at&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <>
      <div className="admin-container bg-white">
        <div className="flex justify-between h-14">
          <div>
            <h1 className="text-lg sm:text-2xl font-medium mb-1">Reviews</h1>
            {data && (
              <DataCount
                currentPage={parseInt(data.headers["x-current-page"])}
                perPage={parseInt(data.headers["x-per-page"])}
                totalCount={parseInt(data.headers["x-total-count"])}
                context="reviews"
              />
            )}
          </div>
        </div>

        <Tabs tabOptions={tabOptions} name="is_approved" />

        {/* Table */}
        {isLoading ? (
          <div className="mt-4 skeleton h-96"></div>
        ) : (
          <>
            {data?.data.length === 0 ? (
              <p className="text-black04 py-10 text-center mt-4">
                No result found
              </p>
            ) : (
              <div className="overflow-y-hidden overflow-x-auto mt-6 min-h-72">
                <table className="table w-full text-xs sm:text-sm">
                  <thead className="bg-base-200">
                    <tr>
                      <th>Review Type</th>
                      <th>Name</th>
                      <th>Comment</th>
                      <th>Avg. Rating</th>
                      <th>Image</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data.map((item: Review) => (
                      <tr key={item.id}>
                        <td>{item.book_id ? "Book Review" : "Order Review"}</td>
                        <td>
                          {item.user.first_name + " " + item.user.last_name}
                        </td>
                        <td
                          className={`${!isEnglish(item.comment) && "font-bn"}`}
                        >
                          <h4 className="min-w-64 line-clamp-2">{item.comment}</h4>
                        </td>
                        <td>
                          <div className="flex items-center">
                            <span>{item.average_rating}</span>
                            <CiStar className="inline-block" size="18" />
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-2 w-28">
                            {item.images[0] ? (
                              <Image
                                src={item.images[0]?.src}
                                alt="Review"
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded"
                              />
                            ) : (
                              <div className="w-12 h-12 border rounded bg-black06"></div>
                            )}
                            {item.images[1] && (
                              <div
                                className="relative"
                                // onClick={handleOpenCarouselModal}
                              >
                                <Image
                                  src={item.images[1]?.src}
                                  alt="Review"
                                  width={48}
                                  height={48}
                                  className="w-12 h-12 rounded opacity-30"
                                />
                                {item.images.length > 2 && (
                                  <span className="absolute inset-0 text-center top-4 text-base text-black02 font-bold z-20">
                                    {item.images.length - 2}+
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                        <td>
                          <Link
                            href="#"
                            className="btn btn-outline btn-primary btn-sm w-16"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {data && (
          <div className="mt-8 flex justify-end">
            <PaginationHandler totalPages={data.headers["x-total-pages"]} />
          </div>
        )}
      </div>
      {/* <dialog id="review_details_modal" className="modal">
        <ReviewDetailsModal onClose={handleCloseReviewModal} />
      </dialog>
      <dialog id="carousel_modal" className="modal">
        <CarouselModal
          isOpen={isCarouselModalOpen}
          onClose={handleCloseCarouselModal}
        />
      </dialog> */}
    </>
  );
};

export default Reviews;
