import { useState } from "react";

export default function StateList() {
    const [list, setList] = useState(["Lujuria", "Pereza", "Gula", "Ira"]);

    const newEl = () => {
        setList([...list, "Soy la ostia"])

        // Esto no se puede hacer
        // list.push("Soy la ostia")
        // setList(list)
    }

    const remove = (index) => {
        const copyList = [...list];
        copyList.splice(index, 1);
        setList(copyList);
    }

    return <div>
        <ul>
            {list.map((item, index) => <li key={item}>{item} <button onClick={() => remove(index)}>X</button></li>)}
        </ul>

        <button onClick={newEl}>New element</button>
    </div>
}


