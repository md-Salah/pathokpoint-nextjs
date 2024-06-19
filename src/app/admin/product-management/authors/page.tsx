import { Sidebar } from "@/components";
import { authors } from "@/constants";
import Link from "next/link";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Authors = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Authors</h1>
          <button className="btn btn-secondary text-white text-base rounded-lg">
            <Link href={"/admin/product-management/authors/add-author"}>
              Add Author
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
                  <td>{author.name}</td>
                  <td>{"Bangladesh"}</td>
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
    </div>
  );
};

export default Authors;
