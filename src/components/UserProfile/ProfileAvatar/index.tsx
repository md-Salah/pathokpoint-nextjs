import Image from "next/image";

const ProfileAvatar = () => {
  const defaultSrc = "/default/avatar.png";

  return (
    <div className="flex flex-col items-center space-y-2 py-6">
      <div className="avatar online">
        <div className="w-20 h-20 rounded-full">
          <Image
            src={defaultSrc}
            alt="avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <h2 className="text-sm font-medium text-[#363739]">Tanvir Rayhan</h2>
    </div>
  );
};

export default ProfileAvatar;
