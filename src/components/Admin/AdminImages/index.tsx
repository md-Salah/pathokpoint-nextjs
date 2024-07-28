import { ImageContainer, Pagination } from "@/components";
import { imageFolders } from "@/constants/constants";
import { IPagination } from "@/interface";
import { CiFolderOn } from "react-icons/ci";

type Props = {
  pagination: IPagination;
  currentFolder: number;
  handleFolderChange: (currentFolder: number) => void;
};

const AdminImages = ({
  pagination,
  currentFolder,
  handleFolderChange,
}: Props) => {
  const { currentPage, totalPages, handleChangeCurrentPage } = pagination;
  return (
    <div className="w-[95%] sm:w-[80%] bg-white rounded-lg my-8 mx-auto flex items-start">
      <div className="flex flex-col space-y-2 w-[20%] border-r min-h-screen p-6">
        {imageFolders.map((folder) => (
          <div
            className={`flex items-center space-x-2 hover:bg-[#E8E9EB] py-1 px-4 rounded-lg cursor-pointer ${
              currentFolder === folder.id && "bg-[#E8E9EB] font-semibold"
            }`}
            key={folder.id}
            onClick={() => handleFolderChange(folder.id)}
          >
            <CiFolderOn size={18} />
            <span>{folder.name}</span>
          </div>
        ))}
      </div>
      <div className="p-6">
        <div className="flex items-center p-2 border border-gray-300 rounded-lg w-[30%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l3.85 3.85a1 1 0 01-1.414 1.414l-3.85-3.85zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search File Name"
            className="ml-2 w-full border-none focus:outline-none focus:ring-0"
          />
        </div>
        <div className="py-6 grid grid-cols-6 grid-flow-row gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <ImageContainer key={item} />
          ))}
        </div>
        <div className="flex items-center space-x-3 justify-start">
          <span className="text-sm text-[#6F6E77]">
            The page you&apos;re on
          </span>
          <Pagination
            currentPage={currentPage}
            handleChangeCurrentPage={handleChangeCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminImages;
