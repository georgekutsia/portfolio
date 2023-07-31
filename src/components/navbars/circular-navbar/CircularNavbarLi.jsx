import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function CircularNavbarLi({to, fa, onClick, backColor, href}) {
  const [hover, setHover] = useState("1")

  const handleMenuMouseEnter = () => {
    setHover("1.2");
  };

  const handleMenuMouseLeave = () => {
    setHover("1");
  };

  return (
    <li onClick={onClick} className="navbar-li">
      <a  href={href} target="_blank " className={`${fa}`}></a>
      <Link data-aos="zoom-in"  onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} 
      style={{ scale: `${hover}`, transition:"0.3s", backgroundColor:`${backColor}`}} className={`nav-a small-orb ${fa}`} to={to} href={"https://fontawesome.com/search?q=box&o=r&m=free"}><i ></i>
      </Link> 
    </li>
  );
}

export default CircularNavbarLi