import React, { useState } from 'react';

export default function StateCounter() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);
//   let count = 0;

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => count++}>
        Click me
      </button> */}

      {/* Condicional en React */}
      {count === 2 && <h2>Soy un pro</h2>}

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}