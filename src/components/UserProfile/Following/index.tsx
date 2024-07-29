"use client";
import React, { useState } from "react";
import TabOptions from "../shared/TabOptions";
import { followingTabs } from "@/constants/userProfile";

const Following = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const handleSetActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  };
  return (
    <div className="w-full flex flex-col space-y-0 md:space-y-4">
      <div className="hidden md:block">
        <TabOptions
          tabOptions={followingTabs}
          activeIndex={activeTabIndex}
          setActiveIndex={handleSetActiveTabIndex}
        />
      </div>
      <div className="overflow-y-hidden overflow-x-auto bg-white h-screen p-3 md:p-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Author Name</th>
              <th>Follower</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="w-20 rounded-xl"
                />
              </td>
              <td>
                <span className="text-xs md:text-sm text-nowrap">
                  হুমায়ূন আহমেদ
                </span>
              </td>
              <td>125k</td>
              <td>
                <button className="btn btn-outline btn-xs md:btn-sm btn-primary px-5 md:px-7 bg-primary bg-opacity-10">
                  Unfollow
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Following;
