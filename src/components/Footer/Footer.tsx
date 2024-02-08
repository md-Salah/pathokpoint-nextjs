import Link from "next/link";

// Constants
import { legal, shopBy, usefulLinks } from "@/constants/footer";
import { platforms } from "@/constants";

// Icon imports
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { MdOutlineCall } from "react-icons/md";
import { RiFacebookCircleLine, RiMessengerLine } from "react-icons/ri";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="custom-mt pt-10">
      <footer className="footer footer-center bg-neutral text-neutral-content md:footer py-10 custom-px">
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
      <footer className="footer footer-center bg-neutral text-neutral-content pt-8 pb-10 custom-px border-t border-gray-600">
        <nav>
          <div className="grid grid-flow-col gap-4 items-center">
            <Link
              href={platforms.Phone.href}
              className="tooltip tooltip-primary"
              data-tip={platforms.Phone.tooltip}
            >
              <MdOutlineCall className="w-6 h-6" />
            </Link>

            <Link
              href={platforms.Email.href}
              className="tooltip tooltip-primary"
              data-tip={platforms.Email.tooltip}
            >
              <LuMail className="w-6 h-6" />
            </Link>
            <Link
              href={platforms.Messenger.href}
              className="tooltip tooltip-primary"
              data-tip={platforms.Messenger.tooltip}
            >
              <RiMessengerLine className="w-7 h-7" />
            </Link>
            <Link
              href={platforms.Facebook.href}
              className="tooltip tooltip-primary"
              data-tip={platforms.Facebook.tooltip}
            >
              <RiFacebookCircleLine className="w-7 h-7" />
            </Link>
            <Link
              href={platforms.WhatsApp.href}
              className="tooltip tooltip-primary"
              data-tip={platforms.WhatsApp.tooltip}
            >
              <BsWhatsapp className="w-6 h-6" />
            </Link>
            <Link
              href={platforms.Instagram.href}
              className="tooltip tooltip-primary"
              data-tip={platforms.Instagram.tooltip}
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
