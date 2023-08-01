import React, { useState } from 'react'

function Pagination({ changePage }) {
  const [activePage, setActivePage] = useState(1);

const handleChangePage = (newPage)=>{
  setActivePage(newPage);
  changePage(newPage)

}
  return (
    <div className="rickandmorty-pagination">
      <button onClick={()=>handleChangePage(activePage + 1)}> <i class="fa-solid fa-chevron-left"></i></button>
      <span>{activePage}</span>
      <button onClick={()=>handleChangePage(activePage - 1)}> <i class="fa-solid fa-chevron-right"></i></button>
    </div>
  );
}

export default Pagination