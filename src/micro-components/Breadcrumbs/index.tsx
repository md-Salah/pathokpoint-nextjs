import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Breadcrumbs = ({ pages }: { pages: string[] }) => {
  return (
    <div className="breadcrumbs mt-2 bg-base-200 rounded-2xl px-8 py-4 shadow-lg custom-mx">
      <ul>
        {pages.map((page, index) => {
          const path = `/${pages
            .slice(1, index + 1)
            .map((p) => p.toLowerCase())
            .join("/")}`;
          if (index === 0) {
            return (
              <li key={index}>
                <Link href="/">
                  <IoHome />
                </Link>
              </li>
            );
          } else if (index === pages.length - 1) {
            return <li key={index} className="capitalize">{page}</li>;
          } else {
            return (
              <li key={index}>
                <Link href={path} className="capitalize">
                  {page}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
