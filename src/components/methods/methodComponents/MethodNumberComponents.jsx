import React, { useState } from 'react';
import MethodComponent from './MethodComponent';

function MethodNumberComponents() {
  const [state, setState] = useState({
    inputValueAbs: '',
    resultAbs: null,
    inputValueSign: '',
    resultSign: null,
    inputValueCeil: '',
    resultCeil: null,
    inputValueFloor: '',
    resultFloor: null,
    inputValueMax: '',
    resultMax: null,
    inputValueMin: '',
    resultMin: null,
    inputValuePow: '',
    resultPow: null,
    inputValueRandom: '',
    resultRandom: null,
    inputValueToFixed: '',
    resultToFixed: null,
    inputValueToFixedExtra: '',
    resultToFixedExtra: null,
    extraValue:'',
    inputValueSqrt: '',
    resultSqrt: null,
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


  const handleClickMax = () => {
    const numbers = state.inputValueMax.split('-').map(Number);
    if (numbers.length >= 2) {
      const maxNumber = Math.max(...numbers);
      setState({
        ...state,
        resultMax: maxNumber
      });
    } else {
      setState({
        ...state,
        resultMax: 'Por favor, ingresa al menos dos números separados por "-"'
      });
    }
  };
  
  const handleClickMin = () => {
    const numbers = state.inputValueMax.split('-').map(Number);
    if (numbers.length >= 2) {
      const minNumber = Math.min(...numbers);
      setState({
        ...state,
        resultMin: minNumber
      });
    } else {
      setState({
        ...state,
        resultMin: 'Por favor, ingresa al menos dos números separados por "-"'
      });
    }
  };
  const handleClickPow = () => {
    const numbers = state.inputValuePow.split('-').map(Number);
    if(numbers.length === 2){
      const numb = numbers[0];
      const pot = numbers[1];

      const powNumber = Math.pow(numb, pot); 
      setState({
        ...state,
        resultPow: powNumber
      });
    } else {
      setState({
        ...state,
        resultPow: 'Por favor, ingresa un número base y una potencia separados por "-"'
      });
    }
  };
  const handleClickRandom = () => {
    const numbers = state.inputValueRandom.split('-').map(Number);
    if (numbers.length === 2) { 
      const min = numbers[0];
      const max = numbers[1];
      
      const randomNumber = min + Math.random() * (max - min);
  
      setState({
        ...state,
        resultRandom: randomNumber
      });
    } else {
      setState({
        ...state,
        resultRandom: 'Por favor, ingresa dos números separados por "-"'
      });
    }
  };


  const handleClickToFixed = () => {
    const numbers = state.inputValueToFixed.split('-').map(Number);
    const decimalPlaces = parseInt(state.inputValueToFixedExtra); 
    
    if (numbers.length === 2 && !isNaN(decimalPlaces)) { 
      const min = numbers[0];
      const max = numbers[1];
      const randomNumber = min + Math.random() * (max - min);
      const limitedRandomNumber = parseFloat(randomNumber.toFixed(decimalPlaces)); 
      
      setState({
        ...state,
        resultToFixed: limitedRandomNumber
      });
    } else {
      setState({
        ...state,
        resultToFixed: 'Por favor, ingresa un rango válido y un número de decimales'
      });
    }
  };
  
  return (
    <>
      <MethodComponent 
        holder="ej: -33" 
        metodoUsado={"Math.abs()"} 
        text1={"devuelve el valor absoluto de un número."}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/abs"}
        inputValue={state.inputValueAbs} 
        setInputValue={(value) => handleInputChange('inputValueAbs', value)} 
        result={state.resultAbs} 
        handleClick={() => handleClick('inputValueAbs', Math.abs)}
      />
      <MethodComponent 
        holder="ej: -33" 
        metodoUsado={"Math.sign()"} 
        text1={"devuelve el signo del número, representado por -1 ó 1, según si es positivo o negativo."}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sign"}
        inputValue={state.inputValueSign} 
        setInputValue={(value) => handleInputChange('inputValueSign', value)} 
        result={state.resultSign} 
        handleClick={() => handleClick('inputValueSign', Math.sign)}
      />

      <MethodComponent 
        holder="ej: 5.234" 
        metodoUsado={"Math.ceil()"} 
        text1={"devuelve el entero mayor o igual más próximo a un número dado."}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil"}
        inputValue={state.inputValueCeil} 
        setInputValue={(value) => handleInputChange('inputValueCeil', value)} 
        result={state.resultCeil} 
        handleClick={() => handleClick('inputValueCeil', Math.ceil)}
      />

      <MethodComponent 
        holder="ej: 3.934" 
        metodoUsado={"Math.floor()"} 
        text1={"devuelve el máximo entero menor o igual a un número."}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor"}
        inputValue={state.inputValueFloor} 
        setInputValue={(value) => handleInputChange('inputValueFloor', value)} 
        result={state.resultFloor} 
        handleClick={() => handleClick('inputValueFloor', Math.floor)}
      />
      <MethodComponent 
        holder="ej: 2-6-37-5" 
        metodoUsado={"Math.max()"} 
        text1={"devuelve el número más grande de una lista de argumentos."}
        text2={`(indica las cifras separando con un "-" guión )`}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max"}
        inputValue={state.inputValueMax} 
        setInputValue={(value) => handleInputChange('inputValueMax', value)} 
        result={state.resultMax} 
        handleClick={() => handleClickMax()}
      />
      <MethodComponent 
        holder="ej: 5-194-3-12" 
        metodoUsado={"Math.min()"} 
        text1={"devuelve el número más grande de una lista de argumentos."}
        text2={`(indica las cifras separando con un "-" guión )`}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/min"}
        inputValue={state.inputValueMin} 
        setInputValue={(value) => handleInputChange('inputValueMin', value)} 
        result={state.resultMin} 
        handleClick={() => handleClickMin()}
      />
      <MethodComponent 
        holder="ej: 2-3" 
        metodoUsado={"Math.pow()"} 
        text1={"eleva un número a una potencia especificada."}
        text2={`(indica qué número quieres elevar a qué potencia, separados por un guión. El resto se ignorará )`}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow"}
        inputValue={state.inputValuePow} 
        setInputValue={(value) => handleInputChange('inputValuePow', value)} 
        result={state.resultPow} 
        handleClick={() => handleClickPow()}
      />
      <MethodComponent 
        holder="ej: -33" 
        metodoUsado={"Math.sqrt()"} 
        text1={"devuelve la raíz cuadrada de un número."}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt"}
        inputValue={state.inputValueSqrt} 
        setInputValue={(value) => handleInputChange('inputValueSqrt', value)} 
        result={state.resultSqrt} 
        handleClick={() => handleClick('inputValueSqrt', Math.sqrt)}
      />
      <MethodComponent 
        holder="ej: 2-3" 
        metodoUsado={"Math.random()"} 
        text1={"devuelve un número aleatorio en un rango específicado."}
        text2={`(indica 2 números que sean el mínimo y el máximo para sacar el número aleatorio )`}
        mdnRef={ "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random"}
        inputValue={state.inputValueRandom} 
        setInputValue={(value) => handleInputChange('inputValueRandom', value)} 
        result={state.resultRandom} 
        handleClick={() => handleClickRandom()}
      />
 <MethodComponent 
        holder="ej: 4-8" 
        metodoUsado={"toFixed()"} 
        text1={"Devuelve un número aleatorio en el rango especificado y lo limita a los decimales indicados."}
        text2={`Indica 2 números que representen el rango separados por un guión "-" y el número de decimales en el segundo input`}
        mdnRef={"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"}
        inputValue={state.inputValueToFixed} 
        setInputValue={(value) => handleInputChange('inputValueToFixed', value)} 
        inputValueExtra={state.inputValueToFixedExtra} 
        setInputValueExtra={(value) => handleInputChange('inputValueToFixedExtra', value)}
        result={state.resultToFixed} 
        handleClick={() => handleClickToFixed()}
        extraValue={true} 
        extraHolder="Rango"
      />
    </>
  );
}

export default MethodNumberComponents;
