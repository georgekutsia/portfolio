import React, { useState } from "react";
import ListComments from "./ListComments";

const defaultList = [
  { name: "bulala", qty: 3, comments: [] },
  { name: "hey", qty: 12, comments: [] },
  { name: "mufasa", qty: 35, 
  comments: [
    { text:"bulala", user:"red"},
    { text:"bulala", user:"green"},
    { text:"bulala", user:"green"},
] },
];

function List() {
  const [list, setList] = useState(defaultList);
  const [editingComments, setEditingComments] = useState();


  const remove = (index) => {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  const addOrEdit = (index) => {
    const copyList = [...list]
    const name = prompt("Escribe un nombre");
    const qty = prompt("Escribe una cantidad");

    if (name && name !== "" && qty && qty !== "") {
      copyList[index] = {name, qty, comment:[]}
      setList(copyList)
    } else {
      alert("Se requiere información");
    }
  };


  const showComments = (index) => {
    setEditingComments({comments:list[index].comments, index})
  }

  const addComment = (comment, index)=> {
      const copyList = [...list];
      copyList[index].comments.push({text:comment, user:"red"})
      setList(copyList);
  }
  return (
    <div className="note1">
      {list.map((item, index) => (
        <div key={index} className="note1-list">
          <button className="note1-list-btn" onClick={() => addOrEdit(index)}> edit </button>
          <button className="note1-list-btn" onClick={() => remove(index)}> Remove </button>
          <button className="note1-list-btn" onClick={() => showComments(index)}> Comments ({item.comments.length})</button>
          <h2>{item.name}</h2>
          <h2>cantidad: {item.qty}</h2>
        </div>
      ))}
          {editingComments && <div> <ListComments data={editingComments} onComment={addComment}/>
          <button onClick={()=>setEditingComments(null)}>Ocultar</button>
          </div>}
          <button className="note1-list-btn" onClick={() => addOrEdit(list.length)}> Add new </button>
    </div>
  );
}

export default List;
