import React from "react";

function CirclePopupNavbar2Component() {
  return (
    <nav class="nav-12">
      <input id="circle-popup-menu2" type="checkbox" />
      <label for="circle-popup-menu2">menu2</label>
      <ul class="circle-popup-menu2">
        <li>
          <a href="#0">
            <span>About</span>
            <i class="fas fa-address-card" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#0">
            <span>Projects</span>
            <i class="fas fa-tasks" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#0">
            <span>Clients</span>
            <i class="fas fa-users" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#0">
            <span>Contact</span>
            <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default CirclePopupNavbar2Component;
