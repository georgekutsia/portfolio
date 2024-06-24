import React, { useContext } from "react";
import { GlobalContext } from "../../../App";

function DayNightButton() {
  const {handleChangeDarkLight } = useContext(GlobalContext);
  return (
      <div className="the-container">
        <input className="input-dayNight" type="checkbox" id="toggle" onChange={handleChangeDarkLight} />
        <label className="label-dayNight" htmlFor="toggle">Noche-Dia</label>
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
  );
}

export default DayNightButton;
