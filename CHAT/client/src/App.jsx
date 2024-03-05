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
   let [alldata, setAlldata] = useState(null);
  let [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);
   
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
        }}
      >
        <Gobal />
      </Context.Provider>
    </>
  );
}

export default App;
