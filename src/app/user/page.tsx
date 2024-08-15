import { SidebarMobile } from '@/components';
import { MyProfile } from '@/components/UserProfile';

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
