import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { legal, shopBy, usefulLinks } from "@/constants/footer";
import { LuMail } from "react-icons/lu";
import { MdOutlineCall } from "react-icons/md";
import { RiFacebookCircleLine, RiMessengerLine } from "react-icons/ri";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <div className="layout-container layout-px font-bn">
        <footer className="footer footer-center text-white md:footer py-10">
          <aside>
            <p className="text-3xl font-semibold font-bn">পাঠক পয়েন্ট</p>
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
        <footer className="footer footer-center text-white pt-8 pb-10 border-t border-gray-600">
          <nav>
            <div className="grid grid-flow-col gap-4 items-center">
              <Link
                href="tel:+8801686347168"
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
    </div>
  );
};

export default Footer;
