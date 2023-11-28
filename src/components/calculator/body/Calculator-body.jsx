import React, { useState } from 'react';
import CloseAllComponent from '../../close/CloseAllComponent';

function CalculatorBody({closeComponent}) {
  const [value, setValue] = useState('');
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState('');
  const [next, setNext] = useState(false)

  
  const handleNumber = (number) => {
    if(next && value !== ""){
      setValue("")
      setNext(false)
    }
    setValue((prevValue) => prevValue + number);
  };
  const handleOperation = (operat) => {
    setOperation(operat);
    setResult(value);
    setValue('');
    setNext(true);
  };
  const handleCalculate = () => {
    if (operation === '+') {
      setValue(String(Number(result) + Number(value)));
    } else if (operation === '-') {
      setValue(String(Number(result) - Number(value)));
    } else if (operation === '*') {
      setValue(String(Number(result) * Number(value)));
    } else if (operation === '/') {
      setValue(String(Number(result) / Number(value)));
    } else if( operation === "%"){
      setValue(String(Number(result) % Number(value)));
    }
    setOperation(null);
    setNext(true)
  };

  return (
    <div className="calculator">
    <CloseAllComponent setComponent={closeComponent}/>
      <div className='calculator-screen-and-result'>
        <div placeholder='0' className="calculator-screen">{value || result}</div>
        <button onClick={handleCalculate} className="calculator-body-rowMath">=</button>
      </div>
        <section className='calculator-mainSection'>
          <section className='calculator-mainSection-1'>
            <div className="calculator-body">
              <button onClick={()=>handleNumber("1")} className="calculator-body-row">1</button>
              <button onClick={()=>handleNumber("2")} className="calculator-body-row">2</button>
              <button onClick={()=>handleNumber("3")} className="calculator-body-row">3</button>
            </div>
            <div className="calculator-body">
              <button onClick={()=>handleNumber("4")} className="calculator-body-row">4</button>
              <button onClick={()=>handleNumber("5")} className="calculator-body-row">5</button>
              <button onClick={()=>handleNumber("6")} className="calculator-body-row">6</button>
            </div>
            <div className="calculator-body">
              <button onClick={()=>handleNumber("7")} className="calculator-body-row">7</button>
              <button onClick={()=>handleNumber("8")} className="calculator-body-row">8</button>
              <button onClick={()=>handleNumber("9")} className="calculator-body-row">9</button>
            </div>
            <div className="calculator-body">
              <button onClick={()=>handleNumber('0')} className="calculator-body-row btn-0">0</button>
              <button onClick={()=>handleNumber('.')} className="calculator-body-rowMathComa">.</button>
            </div>
          </section>
          <section>
            <div className="calculator-body-math">
              <button onClick={()=> handleOperation('+')} className="calculator-body-rowMath"><i className="fa-solid fa-plus"></i></button>
              <button onClick={()=> handleOperation('-')} className="calculator-body-rowMath"><i className="fa-solid fa-minus"></i></button>
              <button onClick={()=> handleOperation('*')} className="calculator-body-rowMath"><i className="fa-solid fa-xmark"></i></button>
              <button onClick={()=> handleOperation('/')} className="calculator-body-rowMath"><i className="fa-solid fa-divide"></i></button>
              <button onClick={()=> handleOperation('%')} className="calculator-body-rowMath"><i className="fa-solid fa-percent"></i></button>
            </div>
          </section>
        </section>
    </div>
  );
}

export default CalculatorBody;
