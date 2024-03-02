import { useReducer } from "react";

const initalState = 0;
const reducher = (state, action) => {
    switch (action) {
        case 'incremant':
            return state + 1;
        case 'dicremant':
            return state - 1;
        default:
            return state;
    }
}

const Reducher = () => {
    const [count, dispach] = useReducer(reducher, initalState);
    return (
        <div>
            <h2>count {count} valuetimes</h2>
            <button onClick={()=>{dispach('incremant')}} >Incremant By one</button>
            <button onClick={()=>{dispach('dicremant')}} >Incremant By Five</button>
        </div>
    )
}

export default Reducher;