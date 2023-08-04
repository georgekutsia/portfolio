import React, { useState } from "react";

const defaultList = [
  { name: "bulala", qty: 3, comments: [] },
  { name: "hey", qty: 12, comments: [] },
  { name: "mufasa", qty: 35, comments: [] },
];

function List() {
  const [list, setList] = useState(defaultList);
  const [inputValues, setInputValues] = useState(
    Array(defaultList.length).fill("")
  );

  const remove = (index) => {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  const addList = () => {
    const name = prompt("Escribe un nombre");
    const qty = prompt("Escribe una cantidad");
    if (name && name !== "" && qty && qty !== "") {
      setList([...list, { name, qty, comments: [] }]);
      setInputValues([...inputValues, ""]);
    } else {
      alert("Se requiere información");
    }
  };

  const handleInputChange = (event, index) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = event.target.value;
    setInputValues(updatedValues);
  };
  const handleAddComment = (index) => {
    const copyList = [...list];
    copyList[index].comments = [
      ...copyList[index].comments,
      inputValues[index],
    ];

    


    setList(copyList);
    console.log(copyList);
  };

  return (
    <div className="note1">
      {list.map((item, index) => (
        <div key={index} className="note1-list">
          <button className="note1-list-btn" onClick={() => remove(index)}> X </button>
          <h2>{item.name}</h2>
          <h2>cantidad: {item.qty}</h2>
          <input type="text" placeholder="bulala" value={inputValues[index]} onChange={(event) => handleInputChange(event, index)} />
          <button className="note1-list-btn" onClick={() => handleAddComment(index)}> +</button>
          {item.comments.map((comment, commentIndex) => (
            <p key={commentIndex}>{comment}</p>
          ))}
        </div>
      ))}
          <button className="note1-btn" onClick={addList}>
        Agregar
      </button>
    </div>
  );
}

export default List;
