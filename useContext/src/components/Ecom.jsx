import { useContext } from "react";
import { PassData } from "./Acom";
const Ecom = () => {
    const { countDispach,count } = useContext(PassData);
 
   
    return (
        <div>
            <h1>Big Counter {count }</h1>
            <button onClick={()=>{ countDispach('incremant')}}>Incremant one</button>
            <button onClick={()=>{countDispach('dicremant')}}>Dicremant one</button>
          
        </div>
    )
}

export default Ecom;