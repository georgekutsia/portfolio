import { GlobalContext } from "../../../App";
import React, { useContext } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function DayNightButton() {
  const {handleChangeDarkLight } = useContext(GlobalContext);
  return (
      <div className="the-container">
        <input className="input-dayNight" type="checkbox" id="toggle" onChange={handleChangeDarkLight} />
        <OverlayTrigger placement="left" overlay={
            <Tooltip id="tooltip-bottom">
              Cambia entre <strong> noche</strong> y  <strong>dia</strong>.
            </Tooltip>
          }
        >
        <label className="label-dayNight" htmlFor="toggle">
        </label>
        </OverlayTrigger>

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
