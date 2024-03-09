import { useEffect } from "react";
import { io } from "socket.io-client";

const SocketMessage = (socketMessage, setMessage, setSocketMessage) => {
  useEffect(() => {
    console.log("send message fun render");
    let SendID = localStorage.getItem("ID").split(`"`)[1];
    let url = "http://localhost:3300";
    const socket = io(url);
    socket.on("connect", () => {
      console.log(socketMessage);
      let { Msg, conID, RisiveID } = socketMessage;
      let Obj = {
        Msg,
        conID,
        RisiveID,
        SendID,
        throw: socket.id,
      };
      socket.emit(socket.id, Obj);
      socket.on("receve", (msg) => {
        setMessage((pre) => [
          ...pre,
          { text: msg.Msg, RisiveID: msg.RisiveID, SendID: msg.SendID },
        ]);

        setSocketMessage(null);
      });
    });
    return () => {
      socket.disconnect();
    };
  }, [socketMessage, setMessage, setSocketMessage]);
};

export default SocketMessage;
