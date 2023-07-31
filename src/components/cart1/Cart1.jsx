import React from 'react'

function Cart1({show, setShow}) {
  return <div>🛒
  <button onClick={()=> {setShow(!show)}}></button>
  </div>;
}

export default Cart1