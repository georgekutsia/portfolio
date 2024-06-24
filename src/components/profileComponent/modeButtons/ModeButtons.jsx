import React, { useContext, useState } from 'react';
import ModeButton from './ModeButton';
import { GlobalContext } from '../../../App';
import DayNightButton from './DayNightButton';

function ModeButtons() {
  const {modeDarkLight, handleChangeDarkLight } = useContext(GlobalContext);
  const [secondBtnText, setSecondBtnText] = useState("gamer");
  const [thirdBtnText, setThirdBtnText] = useState("fun");

  return (
    <div className="modeBtns">
    <DayNightButton/>
      <ModeButton text={modeDarkLight} handleChangeDarkLight={handleChangeDarkLight} />
      <ModeButton text={secondBtnText} />
      <ModeButton text={thirdBtnText} />
    </div>
  );
}

export default ModeButtons;
