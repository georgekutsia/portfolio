import React, { useState } from 'react'
import { CircularNavbarLi } from '../..';

function CornerNavbar({text, handleNavbars}) {
  const [nav1, setnav1] = useState(false)
  const [nav2, setnav2] = useState(false)

  return (
    <div className="cornerNavbar">
      <div className="cornerNavbar-navbar-mainNavbar">
        <h2 className="cornerNavbar-navbar-mainNavbar-h2">{text}</h2>
        <ul className="cornerNavbar-navbar-mainNavbar-menu">
          <CircularNavbarLi to={"/profile"} fa={"fa-solid fa-user"} />
          <CircularNavbarLi handle={handleNavbars} to={"/apis"}  fa={"fa-solid fa-person-drowning"} />
          <CircularNavbarLi to={"/components"} fa={"fa-solid fa-gamepad"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-bars"}/>
        </ul>
      </div>
    </div>
  );
}

export default CornerNavbar