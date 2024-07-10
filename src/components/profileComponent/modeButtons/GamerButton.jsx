import { GlobalContext } from "../../../App";
import React, { useContext } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function GamerButton() {
  const { handleChangeDarkLight } = useContext(GlobalContext);

  return (
    <>
      <div className="the-container-gamer"  data-aos="zoom-in" data-aos-delay="50">
        <input className="input-dayNight-gamer" type="checkbox" id="toggle-gamer"  />
        
        <OverlayTrigger placement="bottom" overlay={
            <Tooltip id="tooltip-bottom">
              Cambia entre vista<strong> normal</strong> y de <strong>gamer</strong>.
            </Tooltip>
          }
        >
          <label className="label-dayNight-gamer" htmlFor="toggle-gamer">
          </label>
        </OverlayTrigger>
        
        <div className="day-night-cont-gamer"></div>
        <div className="switch-gamer">
          <div className="moon-draw-gamer"></div>
        </div>
      </div>
    </>
  );
}

export default GamerButton;
