import { IoIosLogOut, IoIosStarOutline, IoMdHeartEmpty } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";

const Profile = () => {
  const loggedIn = false;
  const src = "/default/user.avif";

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar btn-sm sm:btn-md text-black02 hover:bg-primary hover:text-white"
      >
        {loggedIn && src ? (
          <Image
            alt="Profile"
            src={src}
            width={36}
            height={36}
            className="rounded-full"
          />
        ) : (
          <IoPersonCircleOutline className="inline-block w-6 h-6" />
          // <button className="btn btn-primary btn-outline btn-sm w-32 h-10 text-sm text-nowrap">Sign In/Sign Up</button>
        )}
      </div>

      {/* Dropdown content */}
      <ul
        tabIndex={0}
        className="menu dropdown-content shadow bg-white text-black02 text-sm rounded-box w-52"
      >
        <li>
          <Link href="/profile" className="gap-2">
            <BsPerson className="inline-block w-5 h-5" />
            My Profile
          </Link>
        </li>
        <li>
          <Link href="/orders" className="gap-2">
            <BiShoppingBag className="inline-block w-5 h-5" />
            My Orders
          </Link>
        </li>
        <li>
          <Link href="/wishlist" className="gap-2">
            <IoMdHeartEmpty className="inline-block w-5 h-5" />
            Wishlist
          </Link>
        </li>
        <li>
          <Link href="/wishlist" className="gap-2">
            <IoIosStarOutline className="inline-block w-5 h-5" />
            My Reviews
          </Link>
        </li>
        <li>
          <Link href="/logout" className="gap-2">
            <IoIosLogOut className="inline-block w-5 h-5" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
