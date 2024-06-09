import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";


const Profile = () => {
  const src = "/default/user.avif";

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar btn-sm sm:btn-md"
      >
        <Image
          alt="Profile"
          src={src}
          width={36}
          height={36}
          className="rounded-full"
        />
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
