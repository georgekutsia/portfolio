import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function MainNavbarLi({to, fa, onClick,backColor}) {
  const [hover, setHover] = useState("1")
  const handleMenuMouseEnter = () => {
    setHover("1.2");
  };

  const handleMenuMouseLeave = () => {
    setHover("1");
  };

  return (
    <li onClick={onClick} className="navbar-li">
      <NavLink data-aos="zoom-in"  onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} 
      style={{ scale: `${hover}`, transition:"0.3s", backgroundColor:`${backColor}`}} className="nav-a small-orb" to={to} href="#"><i className={`${fa}`}></i>
      </NavLink> 
    </li>
  );
}

export default MainNavbarLi