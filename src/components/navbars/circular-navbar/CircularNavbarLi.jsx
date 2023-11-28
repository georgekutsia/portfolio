import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function CircularNavbarLi({to, fa, handle, backColor, href}) {
  const [hover, setHover] = useState("1")

  const handleMenuMouseEnter = () => {
    setHover("1.2");
  };

  const handleMenuMouseLeave = () => {
    setHover("1");
  };

  return (
    <li onClick={handle} className="navbar-li">
      <NavLink  data-aos="zoom-in" data-aos-delay="2300"  onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} 
      style={{ scale: `${hover}`, transition:"0.3s", backgroundColor:`${backColor}`, color: handle? "white":"" }}  className={`nav-a small-orb ${fa}`} to={to} href={"https://fontawesome.com/search?q=box&o=r&m=free"}>
      </NavLink> 
    </li>
  );
}

export default CircularNavbarLi