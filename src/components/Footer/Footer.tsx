import Link from 'next/link';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { MdOutlineCall } from 'react-icons/md';
import { RiFacebookCircleLine, RiMessengerLine } from 'react-icons/ri';

import { social } from '@/constants';
import { legal, shopBy, usefulLinks } from '@/constants/footer';

const Footer = () => {
  return (
    <div className="bg-neutral layout-mt">
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
              Head office:
              <br />
              House-4/7, Av-3, Mirpur-11, Dhaka -1216
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
                href={social.Phone.href}
                className="fill-current tooltip"
                data-tip={social.Phone.tooltip}
              >
                <MdOutlineCall className="w-6 h-6" />
              </Link>
              <Link
                href={social.Email.href}
                className="fill-current tooltip"
                data-tip={social.Email.tooltip}
              >
                <LuMail className="w-6 h-6" />
              </Link>
              <Link
                href={social.Messenger.href}
                className="fill-current tooltip"
                data-tip={social.Messenger.tooltip}
              >
                <RiMessengerLine className="w-7 h-7" />
              </Link>
              <Link
                href={social.Facebook.href}
                className="fill-current tooltip"
                data-tip={social.Facebook.tooltip}
              >
                <RiFacebookCircleLine className="w-7 h-7" />
              </Link>
              <Link
                href={social.WhatsApp.href}
                className="fill-current tooltip"
                data-tip={social.WhatsApp.tooltip}
              >
                <BsWhatsapp className="w-6 h-6" />
              </Link>
              <Link
                href={social.Instagram.href}
                className="fill-current tooltip"
                data-tip={social.Instagram.tooltip}
              >
                <BsInstagram className="w-6 h-6" />
              </Link>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              PATHOK POINT
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
