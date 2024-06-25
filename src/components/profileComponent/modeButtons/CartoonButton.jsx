import React, { useContext } from "react";
import { GlobalContext } from "../../../App";

function CartoonButton() {
  const {handleChangeDarkLight } = useContext(GlobalContext);
  return (
      <div className="the-container-cartoon">
        <input className="input-dayNight-cartoon" type="checkbox" id="toggle-cartoon"  />
        <label className="label-dayNight-cartoon" htmlFor="toggle-cartoon">
        Normal-cartoon
        </label>
        <div className="day-night-cont-cartoon">
        </div>
        <div className="switch-cartoon">
          <div className="moon-draw-cartoon">
          </div>
        </div>
      </div>
  );
}

export default CartoonButton;
