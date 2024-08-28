import Link from 'next/link';
import React from 'react';

import { social } from '@/constants';
import { MessengerSVG, PaymentCanceledSVG, WhatsAppSVG } from '@/micro-components';

const Failed = () => {
  return (
    <div className="layout-container layout-mt layout-p bg-white">
      <div className="mx-auto my-4 max-w-3xl flex flex-col items-center">
        <h1 className="font-bold text-xl md:text-2xl">Payment canceled!</h1>
        <div className="mt-7 w-64">
          <PaymentCanceledSVG />
        </div>
        <p className="mt-6 text-xs sm:text-sm">Your order has been canceled.</p>
        <div className="mt-6 flex gap-2">
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
        <p className="mt-4 text-xs sm:text-sm font-bn max-w-64 text-center">
          আপনি যদি কোন সমস্যার সম্মুখীন হয়ে থাকেন তাহলে আমাদের সাথে যোগাযোগ
          করুন।
        </p>
        <Link
          href="/checkout"
          className="mt-8 btn btn-primary btn-sm h-11 w-72"
        >
          Back to checkout
        </Link>
      </div>
    </div>
  );
};

export default Failed;
