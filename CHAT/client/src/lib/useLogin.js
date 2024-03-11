import { useContext } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

let url = "http://localhost:3300/route/login/api/user";
const useLogin = () => {
  let Navigate = useNavigate();
  const { loginData: data, setMember } = useContext(Context);

  const fromsubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(" data is ok");
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let result = await response.json();

    if (result) {
      localStorage.setItem("TOKEN", JSON.stringify(result.token));
      localStorage.setItem("ID", JSON.stringify(result.ID));
 
      setMember(true);
      Navigate("/");
    } else {
      alert(JSON.stringify(result.msg));
      Navigate("/signup");
    }
  };
  return fromsubmit;
};

export default useLogin;
