import React from 'react'
import CircularNavbarLi from './CircularNavbarLi'

function CircularNavbar({text}) {
  return (
    <div className="pruebas-navbar">
      <div data-aos="zoom-in" className="pruebas-navbar-mainNavbar">
        <h2 className="pruebas-navbar-mainNavbar-h2">{text}</h2>
        <ul className="pruebas-navbar-mainNavbar-menu">
          <CircularNavbarLi to={"/calculator"} fa={"fa-solid fa-calculator"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-palette"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-bomb"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-calendar"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-ghost"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-gears"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-globe"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-crown"} />
          <CircularNavbarLi to={"#"} fa={"fa-solid fa-gamepad"} />
        </ul>
      </div>
    </div>
  );
}

export default CircularNavbar;