import React from 'react';

function ModeButton({ text, handleChangeDarkLight }) {
  return (
    <button
      onClick={handleChangeDarkLight ? handleChangeDarkLight : null}
      className='modeBtn'
    >
      {text}
    </button>
  );
}

export default ModeButton;
