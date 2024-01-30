import Link from "next/link";
import { FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import { legal, shopBy, usefulLinks } from "@/constants/footer";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { LuMail } from "react-icons/lu";
import { MdOutlineCall } from "react-icons/md";
import { LiaFacebook } from "react-icons/lia";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";
import {
  BsFacebook,
  BsInstagram,
  BsTelephoneForward,
  BsMessenger,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center md:footer py-10 custom-padding bg-secondary text-secondary-content">
        <aside>
          <p className="text-3xl font-semibold">পাঠক পয়েন্ট</p>
          <p className="max-w-72 md:text-justify tracking-wide uppercase">
            Since 2020, Pathok Point delivers literary treasures, old & new,
            right to your doorstep.
          </p>
          <p className="max-w-72 md:text-justify tracking-wide uppercase mt-2">
            <FaMapMarkerAlt className="inline-block mr-2 text-primary" />
            Head office: House-4/7, Av-3, Mirpur-11, Dhaka -1216
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">shop by</h6>
          {shopBy.map((item, index) => (
            <Link href={item.link} key={index} className="link link-hover">
              {item.title}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Useful links</h6>
          {usefulLinks.map((item, index) => (
            <Link href={item.link} key={index} className="link link-hover">
              {item.title}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          {legal.map((item, index) => (
            <Link href={item.link} key={index} className="link link-hover">
              {item.title}
            </Link>
          ))}
        </nav>
      </footer>
      <footer className="footer footer-center pt-8 pb-10 custom-padding bg-secondary text-secondary-content border-t border-gray-600">
        <nav>
          <div className="grid grid-flow-col gap-4 items-center">
            <Link
              href="tell:+8801686347168"
              className="fill-current tooltip"
              data-tip="01686 -347 168"
            >
              <MdOutlineCall className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:hello@pathokpoint.com"
              className="fill-current tooltip"
              data-tip="hello@pathokpoint.com"
            >
              <LuMail className="w-6 h-6" />
            </Link>
            <Link
              href="https://m.me/pathok.point"
              className="fill-current tooltip"
              data-tip="Messenger"
            >
              <RiMessengerLine className="w-7 h-7" />
            </Link>
            <Link
              href="https://www.facebook.com/pathok.point"
              className="fill-current tooltip"
              data-tip="Facebook"
            >
              <RiFacebookCircleLine className="w-7 h-7" />
            </Link>
            <Link
              href="https://wa.me/8801835963652"
              className="fill-current tooltip"
              data-tip="Whatsapp"
            >
              <BsWhatsapp className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/pathok.point/"
              className="fill-current tooltip"
              data-tip="Instagram"
            >
              <BsInstagram className="w-6 h-6" />
            </Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by PATHOK POINT</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
