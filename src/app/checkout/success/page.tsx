import Link from 'next/link';

import { social } from '@/constants';
import { MessengerSVG, NotFound, PaymentSuccessSVG, WhatsAppSVG } from '@/micro-components';

import CopyInvoice from './CopyInvoice';
import TrackOrder from './TrackOrder';

interface Props {
  searchParams?: {
    invoice?: string;
  };
}

const Success = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const invoice = params.get("invoice") || null;

  if (!invoice) return <NotFound>Empty!</NotFound>;
  return (
    <div className="layout-container layout-mt layout-p bg-white">
      <div className="mx-auto my-4 max-w-3xl flex flex-col items-center">
        <h1 className="font-bold text-xl md:text-2xl">Payment successful!</h1>
        <div className="mt-7 w-64">
          <PaymentSuccessSVG />
        </div>
        <p className="mt-6 text-xs sm:text-sm">Order placed successfully.</p>
        <div className="mt-2 text-xs sm:text-sm flex items-center gap-1">
          <p>
            Track your order with invoice&nbsp;
            <span className="text-primary font-semibold">#{invoice}</span>
          </p>
          <CopyInvoice invoice={invoice} />
        </div>

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
        <p className="mt-3 text-xs sm:text-sm font-bn text-center text-black04">
          পুরাতন বই অর্ডার করে থাকলে বইয়ের কন্ডিশন দেখতে
          <br />
          অর্ডার আইডি আমাদেরকে ইনবক্স করুন।
        </p>

        <TrackOrder invoice={invoice} />
      </div>
    </div>
  );
};

export default Success;
