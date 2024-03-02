import { useReducer } from "react";

const initalState = {
    counter: 0,
    counter2:5,
};
const reducher = (state, action) => {
    switch (action.type) {
        case 'incremant':
            return {...state,counter: state.counter + action.value};
        case 'dicremant':
            return { ...state,counter: state.counter - action.value };
        case 'incremant2':
            return {...state, counter2: state.counter2 + action.value };
        case 'dicremant2':
            return {...state,counter2:state.counter2-action.value}
        default:
            return state;
    }
}

const Complex = () => {
    const [count, Dispach] = useReducer(reducher, initalState);
    return (
        <div>
            <h2>Complex count {count.counter} times</h2>
            <button onClick={()=>{Dispach({type:'incremant' ,value:1,})}} >Incremant ones times</button>
            <button onClick={()=>{Dispach({type:'dicremant',value:1})}}>Dicrimant one times</button>
            <h2>Complex count {count.counter2} times</h2>
            <button onClick={()=>{Dispach({type:'incremant2', value:5})}} >Incremant five times</button>
            <button onClick={()=>{Dispach({type:'dicremant2',value:5,})}}>Dicrimant Fives times</button>
        </div>
    )
}
export default Complex;