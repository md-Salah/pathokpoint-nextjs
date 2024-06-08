import { categories } from "@/constants";
import { Category } from "@/interface";
import { isEnglish } from "@/utils";
import Link from "next/link";

const Genre = () => {
  return (
    <div className="layout-container layout-mt layout-px sm:px-0">
      <ul className="flex overflow-x-scroll no-scrollbar gap-3">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Cat cat={cat} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cat = ({ cat }: { cat: Category }) => (
  <Link
    href={"category/" + cat.slug}
    className="flex items-center bg-[#FF820014] border-[0.5px] border-primary rounded h-12 text-nowrap"
  >
    <h4
      className={`text-black02 mx-6 ${
        isEnglish(cat.name) ? "" : "font-bn"
      } hover:text-primary hover:underline`}
    >
      {cat.name}
    </h4>
  </Link>
);

export default Genre;
