import Link from "next/link";

import { Category } from "@/interface";
import { isEnglish } from "@/utils";

export const CategoryExpand = ({ categories }: { categories: Category[] }) => {
  return (
    <aside className="h-96 w-full p-10 min-w-0 bg-white shadow-sm text-sm overflow-hidden">
      <div className="flex h-full">
        <ul className="min-w-20 w-40 max-w-40 overflow-hidden">
          {categories.slice(0, 10).map((subCat) => (
            <li key={subCat.id}>
              <SubCat subCat={subCat} />
            </li>
          ))}
        </ul>

        {categories.length > 10 && (
          <>
            <Divider />
            <ul className="min-w-20 w-40 max-w-40 overflow-hidden">
              {categories.slice(10, 20).map((subCat) => (
                <li key={subCat.id}>
                  <SubCat subCat={subCat} />
                </li>
              ))}
            </ul>
          </>
        )}

        {categories.length > 20 && (
          <>
            <Divider className="hidden lg:block" />
            <ul className="min-w-20 w-40 max-w-40 overflow-hidden hidden lg:block">
              {categories.slice(20, 30).map((subCat) => (
                <li key={subCat.id}>
                  <SubCat subCat={subCat} />
                </li>
              ))}
            </ul>
          </>
        )}

        {categories.length > 30 && (
          <>
            <Divider className="hidden lg:block" />
            <ul className="min-w-20 w-40 max-w-40 overflow-hidden hidden lg:block">
              {categories.slice(30, 40).map((subCat) => (
                <li key={subCat.id}>
                  <SubCat subCat={subCat} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
};

export default CategoryExpand;

const SubCat = ({ subCat }: { subCat: Category }) => {
  return (
    <Link
      href={"/category/" + subCat.slug}
      className={`block py-[5px] truncate text-black02 ${
        isEnglish(subCat.name) ? "" : "font-bn"
      } hover:cursor-pointer hover:text-primary hover:underline visited:text-black05`}
    >
      {subCat.name}
    </Link>
  );
};

const Divider = ({ className }: { className?: string }) => (
  <div
    className={`border-l border-black06 mx-16 h-4/5 my-auto ${className}`}
  ></div>
);
