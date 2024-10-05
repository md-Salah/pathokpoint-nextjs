import Link from 'next/link';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { PiPhoneCallLight } from 'react-icons/pi';

import { social } from '@/constants';
import { MessengerSVG, MiscHeader, WhatsAppSVG } from '@/micro-components';

const ContactUs = () => {
  return (
    <div className="bg-white">
      <MiscHeader
        title="Contact Us"
        subtitle="Questions, bug reports, feedback — we're here for it all."
      />

      <div className="layout-container layout-px mt-8 pb-8 lg:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col lg:pt-10 gap-4 text-sm">
          <h4 className="font-semibold">How would you like to contact?</h4>
          <div className="flex items-center gap-4">
            <CiLocationOn size="18" className="text-primary" />
            <span>{social.Address.text}</span>
          </div>
          <div className="flex items-center gap-4">
            <PiPhoneCallLight size="18" className="text-primary" />
            <Link href={social.Phone.href} className="hover:underline">
              {social.Phone.text}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <CiMail size="18" className="text-primary" />
            <Link href={social.Email.href} className="hover:underline">
              {social.Email.text}
            </Link>
          </div>
          <div className="flex gap-3">
            <Link
              href={social.Messenger.href}
              target="_blank"
              className="w-12 md:w-14 h-12 md:h-14 border-black05 rounded border"
            >
              <MessengerSVG />
            </Link>
            <Link
              href={social.WhatsApp.href}
              target="_blank"
              className="w-12 md:w-14 h-12 md:h-14 border-black05 rounded border p-2 md:p-3"
            >
              <WhatsAppSVG />
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-white max-w-[512px] sm:p-10 sm:shadow-lg mx-auto">
            <div className="mx-auto">
              <h4 className="text-sm font-medium">
                Or, tell us what you need help with
              </h4>
              <form className="mt-4 flex flex-col gap-4">
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="input input-bordered focus:outline-none focus:border-primary bg-white"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="input input-bordered focus:outline-none focus:border-primary bg-white"
                  placeholder="Phone Number"
                />
                <textarea
                  className="textarea textarea-bordered focus:outline-none focus:border-primary bg-white h-32"
                  placeholder="Message"
                />
                <button className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
