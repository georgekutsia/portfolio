import { useState } from "react";

const defaultData = {
    name: "",
    surname: "",
    age: 0
}
export default function Form(){
    const [state, setState] = useState(defaultData);

    const doChange = (e) => {
        setState({...state, [e.target.name]: e.target.value })
    }

    return <div>
        {state.name}
        {state.surname}
        {state.age}
        <input type="text" value={state.name} name="name" onChange={doChange}/>
        <input type="text" value={state.surname} name="surname" onChange={doChange}/>
        <input type="number" value={state.age} name="age" onChange={doChange}/>
    </div>
}
