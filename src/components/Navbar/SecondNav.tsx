import { menuItems } from "@/constants/constants";
import Link from "next/link";

const SecondNav = () => {
  return (
    <div className="custom-padding shadow-sm bg-base-200 flex justify-center border-y-2">
      <ul className="menu menu-horizontal p-0 [&_li>*]:rounded-none">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`primary-style border-r-2 ${
              index == 0 ? "border-l-2" : ""
            }`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondNav;
