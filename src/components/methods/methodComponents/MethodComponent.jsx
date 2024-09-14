import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MethodComponent({metodoUsado, inputValue, setInputValue, setResult, result, hey, handleClick}) {

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^-?\d*\.?\d*$/.test(value)) {
      setInputValue(value);
    }
  };


  return (
    <div className='methodComponent'>
      <form>
        <input  type="text"  value={inputValue}  onChange={handleChange}  placeholder={hey || "..."} 
        />
        <button type="button" onClick={handleClick}>
          {metodoUsado}
        </button>
        {result !== null && <span className='methodComponent-span'>  Res: {result}</span>}
      </form>
      <NavLink className='methodComponent-navLinkMdm' href="https://www.google.com" target="_blank" rel="noopener noreferrer">mdn web docs sobre <span className='methodComponent-navLinkMdm-span'>{metodoUsado}</span> </NavLink>
    </div>
  );
}

export default MethodComponent;
