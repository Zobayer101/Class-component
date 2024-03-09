import "./App.css";
import Gobal from "./components/Gobal";
import { createContext, useState } from "react";

export const Context = createContext();
//main App components
function App() {
  
  //all global state here
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [member, setMember] = useState(true);
  const [model, setModel] = useState(false);
  const [ID, setID] = useState(null);
  const [alldata, setAlldata] = useState(null);
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState(null);
  const [message, setMessage] = useState(null);
  const [prodata, setProdata] = useState(null);
  const [text, setText] = useState('')
  const [socketMessage,setSocketMessage]=useState(null)
   
  return (
    <>
      <Context.Provider
        value={{
          loginData,
          setLoginData,
          member,
          setMember,
          model,
          setModel,
          ID,
          setID,
          user,
          setUser,
          alldata,
          setAlldata,
          toggle,
          setToggle,
          list,
          setList,
          message,
          setMessage,
          prodata,
          setProdata,
          text,
          setText,
          socketMessage,
          setSocketMessage,
        }}
      >
        <Gobal />
      </Context.Provider>
    </>
  );
}

export default App;
