"use client";

import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <div
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => onPageChange(i)}
            className={currentPage === i ? `is-active` : ""}
          >
            {i}
          </div>
        );
      }
    } else {
      pageNumbers.push(
        <div
          key={1}
          style={{ cursor: "pointer" }}
          onClick={() => onPageChange(1)}
          className={currentPage === 1 ? `is-active` : ""}
        >
          1
        </div>
      );

      if (currentPage > 3) {
        pageNumbers.push(<div key="dots1">...</div>);
      }

      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pageNumbers.push(
          <div
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => onPageChange(i)}
            className={currentPage === i ? `is-active` : ""}
          >
            {i}
          </div>
        );
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(<div key="dots2">...</div>);
      }

      pageNumbers.push(
        <div
          key={totalPages}
          style={{ cursor: "pointer" }}
          onClick={() => onPageChange(totalPages)}
          className={currentPage === totalPages ? `is-active` : ""}
        >
          {totalPages}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination justify-center">
      <button
        onClick={handlePrevClick}
        className="pagination__button customStylePaginationPre button -accent-1 mr-15 -prev"
      >
        <i className="icon-arrow-left text-15"></i>
      </button>

      <div className="pagination__count">{renderPageNumbers()}</div>

      <button
        onClick={handleNextClick}
        className="pagination__button customStylePaginationNext button -accent-1 ml-15 -next"
      >
        <i className="icon-arrow-right text-15"></i>
      </button>
    </div>
  );
}
