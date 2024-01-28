import Link from "next/link";
import { legal, shopBy, usefulLinks } from "@/constants/footer";
import { BsFacebook, BsInstagram, BsLinkedin, BsMessenger, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center md:footer py-10 custom-padding bg-secondary text-secondary-content">
        <aside>
          <p className="text-3xl font-semibold">পাঠক পয়েন্ট</p>
          <p className="max-w-72 text-justify tracking-wide">
            Since 2020, Pathok Point delivers literary treasures, old and new,
            right to your doorstep.
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
          <div className="grid grid-flow-col gap-4">
            <Link href='https://www.facebook.com/pathok.point' className="fill-current">
                <BsFacebook className="w-6 h-6" />
            </Link>
            <Link href='https://m.me/pathok.point' className="fill-current">
                <BsMessenger className="w-6 h-6" />
            </Link>
            <Link href='https://wa.me/8801835963652' className="fill-current">
                <BsWhatsapp className="w-6 h-6" />
            </Link>
            <Link href='https://www.instagram.com/pathok.point/' className="fill-current">
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
