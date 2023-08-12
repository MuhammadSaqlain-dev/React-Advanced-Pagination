import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        breakClassName="break-class"
        containerClassName="pagination"
        activeClassName="current-page"
        previousLinkClassName="previous-btn"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        nextClassName="next"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
