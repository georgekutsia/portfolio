import React from "react";

function CirclePopupNavbar1Component() {
  return (
    <div className="circle-popbar">
      <nav className="nav-11">
        <input id="circle-popbar-menu" type="checkbox" />
        <label htmlFor="circle-popbar-menu">
          <h5 className="circle-popbar-menu-h5">MENU</h5>
          <div className="bottom-left"></div> {/* Parte inferior izquierda */}
          <div className="bottom-right"></div> {/* Parte inferior derecha */}
        </label>
        <ul className="circle-popbar-menu">
          <li>
            <a href="#0">
              <span>About</span>
              <i className="fas fa-address-card" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Projects</span>
              <i className="fas fa-tasks" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Clients</span>
              <i className="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Contact</span>
              <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CirclePopupNavbar1Component;
