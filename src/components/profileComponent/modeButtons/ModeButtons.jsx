import React, { useContext, useState } from 'react';
import ModeButton from './ModeButton';
import DayNightButton from './DayNightButton';

function ModeButtons() {
  const [secondBtnText, setSecondBtnText] = useState("gamer");
  const [thirdBtnText, setThirdBtnText] = useState("fun");

  return (
    <div className="modeBtns">
      <DayNightButton/>
      <ModeButton text={secondBtnText} />
      <ModeButton text={thirdBtnText} />
    </div>
  );
}

export default ModeButtons;
