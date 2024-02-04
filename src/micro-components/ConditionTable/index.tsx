import Link from "next/link";
import { platforms } from "@/constants";

const ConditionTable = () => {
  return (
    <table className="table table-xs table-zebra">
      <thead>
        <tr>
          <th>কন্ডিশন</th>
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
            পুরাতন, যথেষ্ট ভালো কন্ডিশন, বইয়ে দাগ থাকতে পারে তবে অনায়াসে পড়া
            যাবে।
          </td>
        </tr>
        <tr>
          <td>OLD-Readable</td>
          <td>পুরাতন, বেশ আগের এডিশন। তবে বইটি পাঠযোগ্য।</td>
        </tr>
      </tbody>
      <tfoot className="text-accent">
        <tr>
          <td colSpan={2} className="pt-2 pb-4">
            পুরাতন বই অর্ডার করে বইয়ের কন্ডিশন দেখতে{" "}
            <Link
              href={platforms.Messenger.href}
              className="underline hover:text-primary"
            >
              Messenger
            </Link>
            /
            <Link
              href={platforms.WhatsApp.href}
              className="underline hover:text-primary"
            >
              WhatsApp
            </Link>{" "}
            এ অর্ডার আইডি ইনবক্স করুন।
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ConditionTable;
