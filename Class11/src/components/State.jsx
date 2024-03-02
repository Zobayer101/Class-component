import { useEffect } from "react";
import { useState } from "react";


const State = () => {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
    const [name, setName] = useState(true);
    const [count, setCount] = useState(0);
    
    const handelchange = (e) => {
        setTodo(e.target.value)
        todo.includes('.js') ? setWarning('got to learn ja'): setWarning(null)
    }
    const handelClick=()=>{
        setName(!name);
        setCount(count+1)
    }
    useEffect(() => {
        document.title = `button click ${count} times`;
        console.log('render your page')
    }, [count])
    console.log('State component render');
    return (
        <div>
            <input onChange={handelchange} type="text" value={todo} placeholder="Enter your language" /><br />
            <hr />
            <h2> {todo} </h2>
            <p>{warning}</p>
            <br />
            <button onClick={()=>handelClick()} >Click me</button>
            <br />
            <h2>{name ? "habib" : "zobayer"}</h2>
            <p>{ count}</p>

        </div>
    )
}

export default State;
