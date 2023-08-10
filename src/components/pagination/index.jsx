import React from "react";
import ReactPaginate from 'react-paginate';

import style from './pagination.module.scss'

const Pagination = ({ onChangePage }) => {
  return (
    
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={event => onChangePage(event.selected+1)}
      pageRangeDisplayed={4} //4 pizzas for page  
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
  />

  )
}

export default Pagination;