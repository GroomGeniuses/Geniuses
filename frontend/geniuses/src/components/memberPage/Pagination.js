import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageClick }) => {
  return (
    <div className="pagination flex justify-center mt-5">
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <span
            key={pageNumber}
            className={`page-number mx-2 cursor-pointer ${currentPage === pageNumber ? 'font-bold text-blue-500' : ''}`}
            onClick={() => onPageClick(pageNumber)}
          >
            {pageNumber}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
