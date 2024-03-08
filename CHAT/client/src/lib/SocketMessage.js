import { useEffect } from "react";
import { io } from "socket.io-client";

const SocketMessage = (prodata,socketMessage,setSocket) => {
     useEffect(() => {
       
       let url = "http://localhost:3300";
       const socket = io(url);
       socket.on("connect", () => {
           console.log("socket.id");
           let Obj = {
             Msg: socketMessage,
             conID: prodata.ConID,
             RisiveID: prodata.RisiveID,
            SendID: prodata.SendID,
             throw:socket.id,
           };
         socket.emit(socket.id, Obj);
           socket.on("receve", (msg) => {
             console.log(msg);
           });
       });
    //    setSocket()
       return () => {
         socket.disconnect();
       };
     }, [prodata, socketMessage,setSocket]);

}

export default SocketMessage;
