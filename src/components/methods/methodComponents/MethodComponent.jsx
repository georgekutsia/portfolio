import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Button1 } from '../..';

function MethodComponent({ metodoUsado, inputValue, inputValueExtra, text1, text2, mdnRef, setInputValue, setInputValueExtra, result, holder, handleClick, extraValue, extraHolder }) {
  
  const [isFocused, setIsFocused] = useState(false); // Estado para manejar el focus

  const handleFocus = () => {
    setIsFocused(true); // Cuando el input recibe focus
  };

  const handleBlur = () => {
    setIsFocused(false); // Cuando el input pierde focus
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^[^a-zA-Z]*$/.test(value)) { // Solo acepta números y guiones
      setInputValue(value);
    }
  };

  const handleChangeExtra = (e) => {
    const value = e.target.value;
    if (/^[^a-zA-Z]*$/.test(value)) { // Solo acepta números para los decimales
      setInputValueExtra(value);
    }
  };

  return (
    <div className='methodComponent'>
      <h5>La función <span className='methodComponent-h5'>{metodoUsado}</span> {text1}</h5>
      <h6>{text2}</h6>
      <div className='methodComponent-form'>
        <form>
          <input
            className={`methodComponent-form-input1 ${isFocused ? 'methodComponent-form-focused' : ''}`} 
            type="text"  value={inputValue}  
            onChange={handleChange}  
            onFocus={handleFocus} 
            onBlur={handleBlur}
            placeholder={holder || "..."} 
          />
          {extraValue && (
            <input 
              className='methodComponent-form-input2'  
              type="text"  
              value={inputValueExtra}  
              onChange={handleChangeExtra}  
              placeholder={extraHolder || "..."} 
            />
          )}
          <Button1 classBtn={"button4"} text={metodoUsado} onClick={handleClick} />
          {result !== null && <span className='methodComponent-span'>  {result}</span>}
        </form>
        <NavLink className='methodComponent-navLinkMdn' href={mdnRef} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-globe"></i> <span className='methodComponent-navLinkMdn-span'>{metodoUsado}</span> 
        </NavLink>
      </div>
    </div>
  );
}

export default MethodComponent;
