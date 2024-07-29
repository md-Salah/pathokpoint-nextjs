import { Pagination } from "@/components";
import { authors } from "@/constants";
import { IPagination } from "@/interface";
import { isEnglish } from "@/utils";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

type Props = {
  pagination: IPagination;
};

const AuthorsContent = ({ pagination }: Props) => {
  const { currentPage, totalPages, handleChangeCurrentPage } = pagination;
  return (
    <div className="w-[95%] sm:w-[80%] my-8 mx-auto">
      <div className="w-full p-4 sm:p-8 bg-white rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-medium">Authors</h1>
          <button className="btn btn-secondary font-medium text-white text-base rounded-lg">
            <Link
              href={"/admin/product-management/authors/add-author"}
              className="flex items-center space-x-4"
            >
              <FiPlus color="#ffffff" size={20} />
              Add Author
            </Link>
          </button>
        </div>
        <div className="overflow-y-hidden overflow-x-auto">
          <table className="table w-full text-xs sm:text-sm table-pin-rows">
            <thead className="bg-base-200">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Country</th>
                <th>Is Popular</th>
                <th>Followers</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.id}>
                  <td>
                    <img
                      className="w-12 h-12 rounded-lg"
                      src={
                        author.image?.src ||
                        "https://static01.nyt.com/images/2023/05/01/reader-center/author-zachary-small/author-zachary-small-superJumbo.png"
                      }
                      alt=""
                    />
                  </td>
                  <td className={`${!isEnglish(author.name) && "font-bn"}`}>
                    {author.name}
                  </td>
                  <td>{"Bangladesh"}</td>
                  <td>{"Yes"}</td>
                  <td>{"Yes"}</td>
                  <td>
                    <button className="btn btn-outline btn-primary text-white btn-sm rounded-lg px-6">
                      Edit
                    </button>
                  </td>
                  <td>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <div tabIndex={0} role="button">
                        <GoKebabHorizontal
                          color="#363739"
                          size={18}
                          className="text-center rotate-90"
                        />
                      </div>

                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-36"
                      >
                        <li>
                          <a>Copy</a>
                        </li>
                        <li>
                          <a>Delete</a>
                        </li>
                        <li>
                          <a>Out of Stock</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-[#6F6E77] py-6">
        <span>1-11 of 1260 Authors</span>
        <div className="flex items-center space-x-3">
          <span>The page you’re on</span>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleChangeCurrentPage={handleChangeCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorsContent;
