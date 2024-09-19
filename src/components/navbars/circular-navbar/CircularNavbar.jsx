import React from 'react'
import CircularNavbarLi from './CircularNavbarLi'
function  CircularNavbar({ 
  text, href1, href2, href3, href4, href5, href6, href7, href8, href9, 
  handle1, handle2, handle3, handle4, handle5, handle6,handle7, handle8, 
  aosDelay, item1,item2,item3,item4,item5,item6,item7,item8,item9, 
}) {

  return (
    <div className="pruebas-navbar">
      <div data-aos="zoom-in" data-aos-delay={aosDelay} className="pruebas-navbar-mainNavbar orb">
        <h2 className="pruebas-navbar-mainNavbar-h2">{text}</h2>
        <ul className="pruebas-navbar-mainNavbar-menu">
          <CircularNavbarLi  handle={handle1}       fa={`fa-solid fa-${item1}`} />
          <CircularNavbarLi  handle={handle2}       fa={`fa-solid fa-${item2}`} />
          <CircularNavbarLi  handle={handle3}       fa={`fa-solid fa-${item3}`} />
          <CircularNavbarLi  handle={handle4}       fa={`fa-solid fa-${item4}`} />
          <CircularNavbarLi  handle={handle5}       fa={`fa-solid fa-${item5}`} />
          <CircularNavbarLi  handle={handle6}       fa={`fa-solid fa-${item6}`} />
          <CircularNavbarLi  handle={handle7}        fa={`fa-solid fa-${item7}`} />
          <CircularNavbarLi  handle={handle8}        fa={`fa-solid fa-${item8}`} />
          <CircularNavbarLi  fa={`fa-solid fa-${item9}`} />
        </ul>
      </div>
    </div>
  );
}

export default CircularNavbar;