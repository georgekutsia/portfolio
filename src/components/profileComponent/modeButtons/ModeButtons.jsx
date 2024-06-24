import React, { useContext, useState } from 'react';
import ModeButton from './ModeButton';
import DayNightButton from './DayNightButton';
import GamerButton from './GamerButton';

function ModeButtons() {
  const [secondBtnText, setSecondBtnText] = useState("gamer");
  const [thirdBtnText, setThirdBtnText] = useState("fun");

  return (
    <div className="modeBtns">
      <DayNightButton/>
      <GamerButton/>
      <ModeButton text={secondBtnText} />
      <ModeButton text={thirdBtnText} />
    </div>
  );
}

export default ModeButtons;
