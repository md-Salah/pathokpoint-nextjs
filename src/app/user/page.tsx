import { SidebarMobile, MyProfile } from "@/components";

const User = () => {
  return (
    <div>
      <div className="md:hidden">
        <SidebarMobile />
      </div>
      <div className="hidden md:block">
        <MyProfile />
      </div>
    </div>
  );
};

export default User;
