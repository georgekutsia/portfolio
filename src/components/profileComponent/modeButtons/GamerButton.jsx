import React, { useContext } from "react";
import { GlobalContext } from "../../../App";

function GamerButton() {
  const {handleChangeDarkLight } = useContext(GlobalContext);
  return (
      <div className="the-container-gamer">
        <input className="input-dayNight-gamer" type="checkbox" id="toggle-gamer"  />
        <label className="label-dayNight-gamer" htmlFor="toggle-gamer">
        Normal-gamer
        </label>
        <div className="day-night-cont-gamer">
        </div>
        <div className="switch-gamer">
          <div className="moon-draw-gamer">
          </div>
        </div>
      </div>
  );
}

export default GamerButton;
