import React from "react";
import Link from "next/link";

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
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1, 2);
      if (currentPage > 4) {
        pageNumbers.push("...");
      }
      const startPage = Math.max(3, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 3) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex justify-center items-center space-x-1">
      <a
        className={`btn btn-sm ${currentPage === 1 ? "btn-disabled" : ""}`}
        aria-disabled={currentPage === 1}
        onClick={() => handleChangeCurrentPage(currentPage - 1)}
      >
        &lt;
      </a>
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={index} className="btn btn-sm btn-ghost">
            ...
          </span>
        ) : (
          <a
            key={index}
            className={`btn btn-sm ${
              currentPage === number ? "btn-primary" : "btn-ghost"
            }`}
            onClick={() => handleChangeCurrentPage(number as number)}
          >
            {number}
          </a>
        )
      )}
      <a
        className={`btn btn-sm ${
          currentPage === totalPages ? "btn-disabled" : ""
        }`}
        aria-disabled={currentPage === totalPages}
        onClick={() => handleChangeCurrentPage(currentPage + 1)}
      >
        &gt;
      </a>
    </div>
  );
};

export default Pagination;
