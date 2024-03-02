import { useReducer } from "react";
import { createContext } from "react";
import Bcom from './Bcom';
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
export const  PassData = createContext();
const Acom = () => {
 
    const [count, Dispach] = useReducer(reducher, initalState);
  
  return (
      <div>
          <h2>Count {count} times </h2>
          <PassData.Provider value={{countDispach:Dispach,count} } >
             <Bcom/> 
         </PassData.Provider>
     
    </div>
  );
};
export default Acom;
