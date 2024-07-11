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
    <div className="w-full flex flex-col space-y-4">
      <TabOptions
        tabOptions={followingTabs}
        activeIndex={activeTabIndex}
        setActiveIndex={handleSetActiveTabIndex}
      />
      <div className="overflow-x- bg-white rounded-lg h-screen p-10">
        <table className="table">
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
              <td>হুমায়ূন আহমেদ</td>
              <td>125k</td>
              <td>
                <button className="btn btn-outline btn-primary px-5">
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
