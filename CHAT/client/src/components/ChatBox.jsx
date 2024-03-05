import "../assets/css/chatBox.css";
import ChatList from "./ChatList";
import ChatPage from "./ChatPage";
import { useContext } from "react";
import { Context } from "../App";

const ChatBox = () => {
  const { toggle } = useContext(Context);
  return (
    <div>
      <div className="OuterCon">
        <div className={toggle?"chatList None":"chatList"}>
          <ChatList />
        </div>
        <div className={toggle?"chatPage":"chatPage None"}>
          <ChatPage  />
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
