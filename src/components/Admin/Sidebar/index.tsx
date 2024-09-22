"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { GoImage } from 'react-icons/go';
import { IoIosArrowBack } from 'react-icons/io';
import { IoPricetagsOutline } from 'react-icons/io5';
import { LiaHashtagSolid } from 'react-icons/lia';
import { LuPenLine } from 'react-icons/lu';
import { MdOutlineReviews, MdOutlineStorefront } from 'react-icons/md';
import { PiBookLight, PiPackage } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import { SlPrinter } from 'react-icons/sl';
import { TbCategory2, TbLocationDollar } from 'react-icons/tb';

import { defaultSrc } from '@/constants';
import { useUser } from '@/hooks';

import MenuItem from './MenuItem';

const Sidebar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const { user } = useUser();

  return (
    <div
      className={`bg-[#111827] text-white py-10 hidden md:block relative transition-all duration-500 ${
        collapse ? "w-32" : "w-60"
      }`}
    >
      {/* Profile */}
      <div className="h-32 flex items-center">
        <div
          className={`mx-4 flex justify-center items-center gap-3 ${
            collapse ? "flex-col" : ""
          }`}
        >
          <div className="avatar justify-center">
            <div className="mask mask-squircle h-12 w-12">
              <Image
                src={user?.src || defaultSrc.user}
                alt="Photo"
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2
              className={`font-semibold text-sm ${collapse && "text-center"}`}
            >
              {user ? `${user.first_name} ${user.last_name}` : "Anonymous"}
            </h2>
            <h6 className={`text-xs opacity-50 ${collapse && "text-center"}`}>
              {user?.role || "Guest"}
            </h6>
          </div>
        </div>
      </div>

      {/* Collapse button */}
      <div
        className={`mt-6 w-fit absolute bg-primary rounded-md py-[8px] px-[5px] cursor-pointer transition-all duration-500 ${
          collapse ? "-right-4" : "right-4"
        }`}
        onClick={() => setCollapse(!collapse)}
      >
        <IoIosArrowBack
          size={24}
          className={`transition-all duration-500 ${collapse && "rotate-180"}`}
        />
      </div>

      {/* Menu Items */}
      <div className="mt-16 text-[#6F6E77] p-2 flex flex-col space-y-2">
        <MenuItem
          collapse={collapse}
          name="Dashboard"
          href="/admin/dashboard"
          Icon={<RxDashboard size={24} />}
        />
        <details className="collapse collapse-arrow">
          <summary className="collapse-title hover:bg-[#374151] hover:text-black05 rounded pl-6">
            <div className="flex items-center gap-2">
              <MdOutlineStorefront size={24} />
              {!collapse && <span>Inventory</span>}
            </div>
          </summary>
          <div className="collapse-content space-y-2">
            <MenuItem
              collapse={collapse}
              name="Book"
              href="/admin/books"
              Icon={<PiBookLight size={24} />}
              sub
            />
            <MenuItem
              collapse={collapse}
              name="Author"
              href="/admin/authors"
              Icon={<LuPenLine size={24} />}
              sub
            />
            <MenuItem
              collapse={collapse}
              name="Category"
              href="/admin/categories"
              Icon={<TbCategory2 size={24} />}
              sub
            />
            <MenuItem
              collapse={collapse}
              name="Publisher"
              href="/admin/publishers"
              Icon={<SlPrinter size={22} />}
              sub
            />
            <MenuItem
              collapse={collapse}
              name="Tag"
              href="/admin/tags"
              Icon={<LiaHashtagSolid size={24} />}
              sub
            />
          </div>
        </details>

        <MenuItem
          collapse={collapse}
          name="Order"
          href="/admin/orders"
          Icon={<BsCartCheck size={24} />}
        />
        <MenuItem
          collapse={collapse}
          name="User"
          href="/admin/users"
          Icon={<CiUser size={24} />}
        />
        <MenuItem
          collapse={collapse}
          name="Coupon"
          href="/admin/coupons"
          Icon={<IoPricetagsOutline size={24} />}
        />
        <MenuItem
          collapse={collapse}
          name="Review"
          href="/admin/reviews"
          Icon={<MdOutlineReviews size={24} />}
        />
        <MenuItem
          collapse={collapse}
          name="Courier"
          href="/admin/couriers"
          Icon={<PiPackage size={24} />}
        />
        <MenuItem
          collapse={collapse}
          name="Image"
          href="/admin/images"
          Icon={<GoImage size={24} />}
        />
        <MenuItem
          collapse={collapse}
          name="Transaction"
          href="/admin/transactions"
          Icon={<TbLocationDollar size={24} />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
