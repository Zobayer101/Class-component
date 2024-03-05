import { Link } from "react-router-dom";
import "../assets/css/Login.css";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import useLogin from "../lib/useLogin";


const Login = () => {
  let { loginData: data, setLoginData: setData } = useContext(Context);

  var Navigate = useNavigate();

  const onchangeHandel = (propaty, value) => {
    setData((pre) => ({
      ...pre,
      [propaty]: value,
    }));
  };

  useEffect(() => {
    let ismember = localStorage.getItem("TOKEN");
    if (ismember) return Navigate("/");
  });
  return (
    <div>
      <div className="outLogin">
        <div className="loginCounter">
          <div className="header">
            <h2>Login</h2>
          </div>
          <form action="#" onSubmit={useLogin()}>
            <div className="emailForm">
              <div className="mail">
                <input
                  onChange={(e) => onchangeHandel("email", e.target.value)}
                  type="text"
                  required
                  value={data.email}
                />
                <span>@ Email</span>
              </div>
            </div>
            <div className="passwordForm">
              <div className="pass">
                <input
                  onChange={(e) => onchangeHandel("password", e.target.value)}
                  type="password"
                  value={data.password}
                  required
                />
                <span>Password</span>
              </div>
            </div>
            <div className="someTxt">
              <p>Forget password ?</p>
            </div>
            <div className="btn">
              <button type="submit">Login</button>
            </div>
            <div className="NotMember">
              <p>not a member?</p>
              <Link to={"/signup"}>signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
