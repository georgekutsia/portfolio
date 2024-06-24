import React, { useContext } from "react";
import { GlobalContext } from "../../../App";

function DayNightButton() {
  const {handleChangeDarkLight } = useContext(GlobalContext);

  return (
    <>
      <div className="the-container">
        <input className="input-dayNight" type="checkbox" id="toggle" onChange={handleChangeDarkLight} />
        <label className="label-dayNight" for="toggle"></label>
        <div className="day-night-cont">
          <span className="the-sun"></span>
          <div className="the-moon">
            <span className="moon-inside"></span>
          </div>
        </div>
        <div className="switch">
          <div className="moon-draw">
          </div>
        </div>
      </div>
      {/* <div class="moon-draw-container">
        <div class="moon-draw"></div>
      </div> */}
    </>
  );
}

export default DayNightButton;
