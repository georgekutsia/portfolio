import React, { useState } from "react";

const defaultData = {
  name: "",
  surname: "",
  age: 0,
};

function Form1() {
  const [state, setState] = useState(defaultData);
  const [list, setList] = useState([]);

  const handleChange = (ev) => {
    setState({ ...state, [ev.target.name]: ev.target.value });
  };

  const handleList = () => {
    setList([...list, state]);
    setState(defaultData);
  };

  const handleRemove = (index) => {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name} {item.surname} {item.age}{" "}
            <button onClick={() => handleRemove(index)}>X</button>
          </li>
        ))}
      </ul>
      <input value={state.name} onChange={handleChange} name="name" type="text" placeholder="Name"/>
      <input value={state.surname} onChange={handleChange} name="surname" type="text" placeholder="Surname"/>
      <input value={state.age} onChange={handleChange} name="age" type="number" placeholder="Age"/>
      <button onClick={handleList}>Añadir</button>
    </div>
  );
}

export default Form1;
