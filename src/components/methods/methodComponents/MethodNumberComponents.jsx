import React, { useState } from 'react';
import MethodComponent from './MethodComponent';

function MethodNumberComponents() {
  // Usar un solo objeto para manejar los valores de entrada y resultados
  const [state, setState] = useState({
    inputValueAbs: '',
    resultAbs: null,
    inputValueCeil: '',
    resultCeil: null,
    inputValueFloor: '',
    resultFloor: null
  });

  const handleInputChange = (method, value) => {
    setState({
      ...state,
      [method]: value
    });
  };

  const handleClick = (method, mathFunc) => {
    const num = parseFloat(state[method]);
    setState({
      ...state,
      [`result${method.replace('inputValue', '')}`]: mathFunc(num)
    });
  };

  return (
    <>
      <MethodComponent 
        hey="Example: -33" 
        metodoUsado={"Math.abs()"} 
        inputValue={state.inputValueAbs} 
        setInputValue={(value) => handleInputChange('inputValueAbs', value)} 
        result={state.resultAbs} 
        handleClick={() => handleClick('inputValueAbs', Math.abs)}
      />

      <MethodComponent 
        hey="Example: 5.234" 
        metodoUsado={"Math.ceil()"} 
        inputValue={state.inputValueCeil} 
        setInputValue={(value) => handleInputChange('inputValueCeil', value)} 
        result={state.resultCeil} 
        handleClick={() => handleClick('inputValueCeil', Math.ceil)}
      />

      <MethodComponent 
        hey="Example: 3.934" 
        metodoUsado={"Math.floor()"} 
        inputValue={state.inputValueFloor} 
        setInputValue={(value) => handleInputChange('inputValueFloor', value)} 
        result={state.resultFloor} 
        handleClick={() => handleClick('inputValueFloor', Math.floor)}
      />
    </>
  );
}

export default MethodNumberComponents;
