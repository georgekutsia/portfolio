import React, { useContext, useState } from 'react';
import ModeButton from './ModeButton';
import { GlobalContext } from '../../../App';

function ModeButtons() {
  const {modeDarkLight, handleChangeDarkLight } = useContext(GlobalContext);
  const [firstBtnText, setFirstBtnText] = useState("dark");
  const [secondBtnText, setSecondBtnText] = useState("gamer");
  const [thirdBtnText, setThirdBtnText] = useState("fun");

  return (
    <div className="modeBtns">
      <ModeButton text={modeDarkLight} handleChangeDarkLight={handleChangeDarkLight} />
      <ModeButton text={secondBtnText} />
      <ModeButton text={thirdBtnText} />
    </div>
  );
}

export default ModeButtons;
