import React, { useState } from "react";

function Pagination({ changePage, limit, cambiar }) {
  const [activePage, setActivePage] = useState(1);

  const handleChangePage = (newPage) => {
    setActivePage(newPage);
    changePage(newPage);
    console.log(activePage);
  };

  return (
    <div className="rickandmorty-pagination">
      {activePage > 1 && (
        <button onClick={() => handleChangePage(activePage - 1)}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
      <span>{activePage}</span>
      {activePage < 42 && (
        <button onClick={() => handleChangePage(activePage + 1)}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
      <input type="text" name="numero" value={limit} onChange={cambiar} />
    </div>
  );
}

export default Pagination;
