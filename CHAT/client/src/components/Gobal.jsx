import Signup from "./Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import OtpVarifiy from "./OtpVarifiy";
import Admin from "./Admin";
import Notfound from "./Notfound";
import ChatBox from "./ChatBox";

const Gobal = () => {

    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Admin />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"Chat"} element={<ChatBox />} />
            <Route path={"/OTP"} element={<OtpVarifiy />} />
            <Route path={"*"} element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
};

export default Gobal;
