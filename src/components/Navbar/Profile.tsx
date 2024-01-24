import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/account" className="primary-style">
            <BsPerson className="inline-block" />
            My Account
          </Link>
        </li>
        <li>
          <Link href="/orders" className="primary-style">
            <BiShoppingBag className="inline-block" />
            My Orders
          </Link>
        </li>
        <li>
          <Link href="/wishlist" className="primary-style">
            <IoMdHeartEmpty className="inline-block" />
            My Wishlist
          </Link>
        </li>
        <li>
          <Link href="/logout" className="primary-style">
            <IoIosLogOut className="inline-block" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
