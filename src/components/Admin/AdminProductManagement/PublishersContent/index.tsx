import { Pagination } from "@/components";
import { publishers } from "@/constants";
import { IPagination } from "@/interface";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";

type Props = {
  pagination: IPagination;
};

const PublishersContent = ({ pagination }: Props) => {
  const { currentPage, totalPages, handleChangeCurrentPage } = pagination;
  return (
    <div className="w-[95%] sm:w-[80%] my-8 mx-auto">
      <div className="w-full p-4 sm:p-8 bg-white rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Publishers</h1>
          <button className="btn btn-secondary text-white text-base rounded-lg">
            <Link href={"/admin/product-management/publishers/add-publisher"}>
              Add Publisher
            </Link>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full text-xs sm:text-sm">
            <thead className="bg-base-200">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Country</th>
                <th>Is Islamic</th>
                <th>Is English</th>
                <th>Is Popular</th>
                <th>Is Big Sale</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {publishers.map((publisher) => (
                <tr key={publisher.id}>
                  <td>
                    <img
                      className="w-12 h-12 rounded-lg"
                      src={
                        publisher.image?.src ||
                        "https://static01.nyt.com/images/2023/05/01/reader-center/author-zachary-small/author-zachary-small-superJumbo.png"
                      }
                      alt=""
                    />
                  </td>
                  <td>{publisher.name}</td>
                  <td>{"Bangladesh"}</td>
                  <td>{"Yes"}</td>
                  <td>{"Yes"}</td>
                  <td>{"Yes"}</td>
                  <td>{"Yes"}</td>
                  <td>
                    <button className="btn btn-primary text-white btn-sm rounded-lg px-6">
                      Edit
                    </button>
                  </td>
                  <td>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <CiMenuKebab
                        tabIndex={0}
                        role="button"
                        color="#363739"
                        size={18}
                        className="text-center"
                      />

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

export default PublishersContent;
