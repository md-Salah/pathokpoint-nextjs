import Link from "next/link";
import { social } from "@/constants";
import { LiaInfoCircleSolid } from "react-icons/lia";

const ConditionExplain = () => {
  return (
    <div>
      <LiaInfoCircleSolid
        tabIndex={0}
        role="button"
        className="ml-2 cursor-pointer w-5 h-5"
      />
      <div
        tabIndex={0}
        className="dropdown-content dropdown-open left-0 right-0 z-[1] bg-white shadow-lg py-4 px-2 mt-4"
      >
        <div className="overflow-x-scroll">
          <table className="table table-xs table-zebra-zebra font-bn">
            <thead>
              <tr>
                <th className="py-4">কন্ডিশন</th>
                <th>বিস্তারিত</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New</td>
                <td>নতুন বই, বর্তমান এডিশন।</td>
              </tr>
              <tr>
                <td>OLD-Like New</td>
                <td>পুরাতন, প্রায় নতুন বলা যাবে।</td>
              </tr>
              <tr>
                <td>OLD-Good Enough</td>
                <td>
                  পুরাতন, যথেষ্ট ভালো কন্ডিশন, বইয়ে দাগ থাকতে পারে তবে অনায়াসে
                  পড়া যাবে।
                </td>
              </tr>
              <tr>
                <td>OLD-Readable</td>
                <td>পুরাতন, বেশ আগের এডিশন। তবে বইটি পাঠযোগ্য।</td>
              </tr>
            </tbody>
            <tfoot className="text-primary">
              <tr>
                <td colSpan={2} className="py-6">
                  পুরাতন বই অর্ডার করে বইয়ের কন্ডিশন দেখতে
                  <Link
                    href={social.Messenger.href}
                    className="btn btn-link btn-sm"
                  >
                    Messenger
                  </Link>
                  /
                  <Link
                    href={social.WhatsApp.href}
                    className="btn btn-link btn-sm"
                  >
                    WhatsApp
                  </Link>
                  এ অর্ডার আইডি ইনবক্স করুন।
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConditionExplain;
