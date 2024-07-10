import { GlobalContext } from "../../../App";
import React, { useContext } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CartoonButton() {
  const {normalCartoon, setNormalCartoon } = useContext(GlobalContext);
  return (
      <div className="the-container-cartoon"  data-aos="zoom-in" data-aos-delay="100">
        <input onClick={()=> setNormalCartoon(!normalCartoon)} className="input-dayNight-cartoon" type="checkbox" id="toggle-cartoon"  />
        <OverlayTrigger placement="right" overlay={
            <Tooltip id="tooltip-bottom">
              Cambia entre vista<strong> seria</strong> y <strong>animada</strong>.
            </Tooltip>
          }
        >
        <label className="label-dayNight-cartoon" htmlFor="toggle-cartoon">
        </label>
        </OverlayTrigger>
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
