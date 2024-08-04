"use client";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

type Props = {
  currentPage: number;
  totalPages: number;
  handleChangeCurrentPage: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  handleChangeCurrentPage,
}: Props) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage >= 4) {
        pageNumbers.push("...");
      }
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex justify-center sm:justify-end items-center gap-1.5 sm:gap-2">
      <button
        className={`btn btn-xs rounded-sm w-8 h-8 sm:w-9 sm:h-9  bg-black07`}
        onClick={() => handleChangeCurrentPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <GoChevronLeft size="20" />
      </button>
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <button
            key={index}
            className="btn btn-xs rounded-sm w-8 h-8 sm:w-9 sm:h-9  bg-black07"
          >
            ...
          </button>
        ) : (
          <button
            key={index}
            className={`btn btn-xs rounded-sm w-8 h-8 sm:w-9 sm:h-9 ${
              currentPage === number ? "btn-primary" : "bg-black07"
            }`}
            onClick={() => handleChangeCurrentPage(number as number)}
          >
            {number}
          </button>
        )
      )}
      <button
        className={`btn btn-xs rounded-sm w-8 h-8 sm:w-9 sm:h-9  bg-black07`}
        onClick={() => handleChangeCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <GoChevronRight size="20" />
      </button>
    </div>
  );
};

export default Pagination;
