import "../assets/css/chatBox.css";
import ChatList from "./ChatList";
import ChatPage from "./ChatPage";
import { useContext } from "react";
import { Context } from "../App";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const ChatBox = () => {
  const { toggle, message } = useContext(Context);
  return (
    <div>
      <div className="OuterCon">
        <div className={toggle ? "chatList None" : "chatList"}>
          <ChatList />
        </div>
        <div className={toggle ? "chatPage" : "chatPage None"}>
          {message? <ChatPage />: <h1>Blank page</h1>  }
          
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ChatBox);
