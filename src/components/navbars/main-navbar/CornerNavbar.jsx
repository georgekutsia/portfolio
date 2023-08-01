import React from 'react'
import { CircularNavbarLi } from '../..';

function CornerNavbar({text}) {
  return (
    <div className="cornerNavbar">
      <div className="cornerNavbar-navbar-mainNavbar">
        <h2 className="cornerNavbar-navbar-mainNavbar-h2">{text}</h2>
        <ul className="cornerNavbar-navbar-mainNavbar-menu">
          <CircularNavbarLi to={"/bulala"} fa={"fa-solid fa-palette"} />
          <CircularNavbarLi to={"/myself"} fa={"fa-solid fa-user"} />
          <CircularNavbarLi to={"/games"} fa={"fa-solid fa-gamepad"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-bars"} />
        </ul>
      </div>
    </div>
  );
}

export default CornerNavbar