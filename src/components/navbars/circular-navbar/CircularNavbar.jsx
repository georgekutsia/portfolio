import React from 'react'
import CircularNavbarLi from './CircularNavbarLi'
import { NavLink } from 'react-router-dom';
function CircularNavbar({ text, handleCalculator, item1, item2, item3, item4, item5, item6, item7, item8, item9, backColor }) {
  // https://threejs.org/examples/?q=particle#webgl_points_billboards

  return (
    <div className="pruebas-navbar">
      <div data-aos="zoom-in" className="pruebas-navbar-mainNavbar">
        <h2 className="pruebas-navbar-mainNavbar-h2">{text}</h2>
        <ul className="pruebas-navbar-mainNavbar-menu">
          <CircularNavbarLi backColor={backColor} onClick={handleCalculator} fa={`fa-solid fa-${item1}`}/>
          <CircularNavbarLi backColor={backColor} fa={`fa-solid fa-${item2}`} />
          <CircularNavbarLi backColor={backColor} fa={`fa-solid fa-${item3}`} />
          <CircularNavbarLi backColor={backColor} fa={`fa-solid fa-${item4}`} />
          <CircularNavbarLi backColor={backColor} fa={`fa-solid fa-${item5}`} />
          <CircularNavbarLi backColor={backColor} fa={`fa-solid fa-${item6}`} />
          <CircularNavbarLi backColor={backColor} fa={`fa-solid fa-${item7}`} />
          <CircularNavbarLi backColor={backColor} fa={`fa-solid fa-${item8}`} />
          <CircularNavbarLi backColor={backColor} fa={`fa-solid fa-${item9}`} />
        </ul>
      </div>
    </div>
  );
}

export default CircularNavbar;