import React from 'react';
import ReactPaginate from 'react-paginate';

const Page = ({ pageClick, pageCount }) => {
  return(
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      onPageChange={pageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
  />
  );
};

export default Page;
