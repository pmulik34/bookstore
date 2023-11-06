import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  let paginationItems;

  // If there are fewer than or equal to 3 total pages, display all pages
  if (totalPages <= 3) {
    paginationItems = [...Array(totalPages)].map((_, index) => (
      <span
        key={index + 1}
        className={currentPage === index + 1 ? 'pagination__selected' : ''}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </span>
    ));
  } else {
    // Logic for handling cases when there are more than 3 pages
    if (currentPage === 1) {
      paginationItems = [...Array(3)].map((_, index) => (
        <span
          key={index + 1}
          className={currentPage === index + 1 ? 'pagination__selected' : ''}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </span>
      ));
    } else if (currentPage === totalPages) {
      paginationItems = [...Array(3)].map((_, index) => (
        <span
          key={totalPages - 2 + index}
          className={currentPage === totalPages - 2 + index ? 'pagination__selected' : ''}
          onClick={() => handlePageChange(totalPages - 2 + index)}
        >
          {totalPages - 2 + index}
        </span>
      ));
    } else {
      paginationItems = [...Array(3)].map((_, index) => (
        <span
          key={currentPage - 1 + index}
          className={currentPage === currentPage - 1 + index ? 'pagination__selected' : ''}
          onClick={() => handlePageChange(currentPage - 1 + index)}
        >
          {currentPage - 1 + index}
        </span>
      ));
    }
  }

  return (
    <div className="row mt-4">
      <div className="col-12 d-flex justify-content-center">
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          {/* "Prev" button */}
          <span onClick={() => handlePageChange(currentPage - 1)} className={currentPage > 1 ? '' : 'pagination_disabled'}>
            Prev
          </span>
          {/* Pagination items */}
          {paginationItems}
          {/* "Next" button */}
          <span onClick={() => handlePageChange(currentPage + 1)} className={currentPage < totalPages ? '' : 'pagination_disabled'}>
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

// Exporting the Pagination component
export default Pagination;
