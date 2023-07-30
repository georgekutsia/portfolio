import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function MainNavbarLi({to, fa}) {
  const [hover, setHover] = useState("1")
  const handleMenuMouseEnter = () => {
    setHover("1.2");
  };

  const handleMenuMouseLeave = () => {
    setHover("1");
  };

  return (
    <li className="navbar-li">
      <NavLink data-aos="zoom-in"  onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} 
      onHover style={{ scale: `${hover}`, transition:"0.3s" }} className="nav-a" to={to} href="#"><i className={`${fa}`}></i>
      </NavLink>
    </li>
  );
}

export default MainNavbarLi