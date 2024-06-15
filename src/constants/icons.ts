import { RxDashboard } from "react-icons/rx";
import { MdOutlineStorefront } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";
import { MdOutlineReviews } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";
import { IconKeys } from "@/interface/icon";
import { IconType } from "react-icons";

export const iconsMap: Record<IconKeys, IconType> = {
  "dashboard": RxDashboard,
  "product-management": MdOutlineStorefront,
  "images": IoImagesOutline,
  "order-management": MdOutlineShoppingCart,
  "coupon": CiShoppingTag,
  "reviews": MdOutlineReviews,
  "users": FaRegUser,
  "couriers": PiPackage,
  "transaction": FcStatistics,
};
