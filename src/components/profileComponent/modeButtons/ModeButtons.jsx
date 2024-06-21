import React, { useState } from 'react';
import ModeButton from './ModeButton';

function ModeButtons() {
  const [firstBtnText, setFirstBtnText] = useState("dark");
  const [secondBtnText, setSecondBtnText] = useState("gamer");
  const [thirdBtnText, setThirdBtnText] = useState("fun");

  const handleChangeDarkLight = () => {
    setFirstBtnText(firstBtnText === "dark" ? "light" : "dark");
  };

  return (
    <div className="modeBtns">
      <ModeButton text={firstBtnText} handleChangeDarkLight={handleChangeDarkLight} />
      <ModeButton text={secondBtnText} />
      <ModeButton text={thirdBtnText} />
    </div>
  );
}

export default ModeButtons;
