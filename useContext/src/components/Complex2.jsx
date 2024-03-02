import { useReducer } from "react";

const initalState = 0;
const initalState2 = 5;
const reduce = (state, action) => {
    switch (action) {
        case 'incremant':
            return state + 1;
        case 'dicremant':
            return state - 1;
        default:
            return state;
    }
}

const Complex2 = () => {
    const [count, Dispach] = useReducer(reduce, initalState);
    const [count2, Dispach2] = useReducer(reduce, initalState2);
    return (
        <div>
            <h2>Incremant by one {count} times</h2>
            <button onClick={()=>{Dispach('incremant')}}>Incremant one </button>
            <button onClick={()=>{Dispach('dicremant')}}>Dicncremant one</button>
            <h2>Incremant by one {count2} times</h2>
            <button onClick={()=>{Dispach2('incremant')}}>Incremant five </button>
            <button onClick={()=>{Dispach2('dicremant')}}>Dicremant five</button>
        </div>
    )
}
export default Complex2;