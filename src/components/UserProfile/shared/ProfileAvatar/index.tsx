import React from "react";

const ProfileAvatar = () => {
  return (
    <div className="flex flex-col items-center space-y-2 py-6">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <span className="text-sm font-medium text-[#363739]">Tanvir Rayhan</span>
    </div>
  );
};

export default ProfileAvatar;
