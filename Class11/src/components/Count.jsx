import { useReducer } from "react";

const initalSate = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'add':
            return state + 1;
        case 'sub':
            return state - 1;
        default:
            return state;
    }
}

const Count = () => {
   const [count,dispach]= useReducer(reducer, initalSate);
    return (
        <div>
            <h1>new Reduce counter {count} times</h1>
            <button onClick={() => { dispach('add') }}>Incremant count{ count}</button>
            <button onClick={()=>{dispach('sub')}}>Dicremant count { count}</button>
        </div>
    )
}
export default Count;