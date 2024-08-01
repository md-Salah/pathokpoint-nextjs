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
            className={`flex items-center space-x-2 hover:bg-[#E8E9EB] py-2 px-4 rounded-lg cursor-pointer text-sm ${
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
      <div className="p-6 h-screen">
        <label className="input input-bordered flex items-center gap-2 w-[25%] rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-8 w-8 opacity-50"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow w-full" placeholder="Search" />
        </label>
        <div className="pt-20 grid grid-cols-6 grid-flow-row gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <ImageContainer key={item} />
          ))}
        </div>
        <div className="flex items-center space-x-3 justify-start bottom-0 absolute">
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
