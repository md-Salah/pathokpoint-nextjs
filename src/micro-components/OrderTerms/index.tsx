import Link from "next/link";

import { social } from "@/constants";

const OrderTerms = () => {
  return (
    <div className="font-bn">
      <h4 className="font-semibold sm:text-lg md:text-xl">শর্তাবলী</h4>
      <p className="mt-4 text-justify text-xs">
        নতুন বই আমাদের স্টকে না থাকলে প্রকাশনী থেকে সংগ্রহ করা হবে। কোন বই
        প্রিন্ট আউট হলে পাঠককে Messenger/WhatsApp/ফোন এর মাধ্যমে জানিয়ে দেয়া
        হবে।
        <br />
        <br />
        পুরাতন বইয়ের ক্ষেত্রে প্যাকেজিং এর সময় বইগুলোর ছবি/ভিডিও পাঠিয়ে কন্ডিশন
        কনফার্ম করা হবে।
        <br />
        পাঠক পয়েন্ট এ কোনো ছেঁড়া, পেইজ মিসিং/পাঠ অযোগ্য বই নেই। ছবি দেখে বইয়ের
        কোয়ালিটি সন্তোষজনক মনে না হলেঃ
        <br />
        ১। বই পরিবর্তন/ বাদ দেয়া যাবে,
        <br />
        ২। অর্ডার বাতিল করা যাবে। সেক্ষেত্রে ৩ কার্যদিবসের মধ্যে রিফান্ড করা
        হবে।
        <br />
        ৩। বইয়ের কন্ডিশন দেখতে
        &nbsp;
        <Link href={social.Messenger.href} target="_blank" className="btn btn-link">Messenger</Link>/
        <Link href={social.WhatsApp.href} target="_blank" className="btn btn-link">WhatsApp</Link>
        &nbsp;
        এ অর্ডার আইডি ইনবক্স করুন।
        <br />
        <br />
        পার্সেল কুরিয়ার করা হয়ে গেলে ডেলিভারি চার্জ রিফান্ড করা হবে না। তবে
        বিশেষ ক্ষেত্রে পাঠক পয়েন্ট পলিসি অনুযায়ী রিফান্ড করা যেতে পারে।
      </p>
    </div>
  );
};

export default OrderTerms;
