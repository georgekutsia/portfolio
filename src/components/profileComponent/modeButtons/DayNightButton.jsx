import React from "react";

function DayNightButton() {
  return (
    <>
      <div className="the-container">
        <input type="checkbox" id="toggle" />
        <label htmlForfor="toggle"></label>
        <div className="day-night-cont">
          <span className="the-sun"></span>
          <div className="the-moon">
            <span className="moon-inside"></span>
          </div>
        </div>
        <div className="switch">
          <div className="button">
            <div className="b-inside"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DayNightButton;
