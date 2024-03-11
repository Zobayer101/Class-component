import avater from "../assets/img/profile.png";
import { IoMdCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../App";
import SocketMessage from "../lib/SocketMessage";

//import PostData from "../lib/PostData";

const ChatPage = () => {
  const {
    toggle,
    setToggle,
    setMessage,
    message,
    prodata,
    text,
    setText,
    socketMessage,
    setSocketMessage,
  } = useContext(Context);
  let scroll = useRef();
  //console.log(message);

  SocketMessage(socketMessage, setMessage, setSocketMessage);
  //scroll bottom;
  useEffect(() => {
    let scrollCon = scroll.current;
    if (scrollCon && message.length > 0) {
      scrollCon.scrollTop = scrollCon.scrollHeight;
    }
  }, [message]);

  //send message fun
  const sendMessage = (e) => {
    e.preventDefault();
    setMessage((pre) => [...pre, { text, resiverID: prodata.RisiveID }]);
    setSocketMessage({
      Msg: text,
      conID: prodata.ConID,
      RisiveID: prodata.RisiveID,
      SendID: prodata.SendID,
    });
    setText("");
  };


  return (
    <div>
      <div className="ChatBox">
        <div className="Header">
          <div className="Hpro">
            <div
              onClick={() => setToggle(!toggle)}
              className={toggle ? "Arrow Show" : "Arrow"}
            >
              <FaArrowLeft />
            </div>
            <div className="img">
              <img src={prodata.photo || avater} alt="" />
            </div>
            <div className="namePaticipator">
              <p>{prodata.name}</p>
            </div>
          </div>
          <div className="Hfre">
            <IoMdCall />
            <FaVideo />
            <HiDotsHorizontal />
          </div>
        </div>

        <div className="MainChat" ref={scroll}>
          <div className="Pphoto">
            <img src={prodata.photo || avater} alt="" />
          </div>
          <div className="DateStart">
            <p>{prodata.date || "today"}</p>
          </div>
          <div className="ProName">
            <h3>{prodata.name}</h3>
          </div>

          {/* ************************************* Sender message********************************** */}
          {message.map((value, index) => {
            if (prodata.RisiveID == message[index].resiverID) {
              //creator won data
              return (
                <div className="coVerSender" key={index}>
                  <div className="senderCont">
                    <div className="Simg">
                      <img src={prodata.wonerPhoto || avater} alt="" />
                    </div>
                    <div className="Text">
                      <p>{value.text}</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              {
                /* ******************************** Reciver message ************************************* */
              }
              //paricipator data
              return (
                <div className="CoverRicvier" key={index}>
                  <div className="reciverCon">
                    <div className="Text">
                      <p>{value.text}</p>
                    </div>
                    <div className="Simg">
                      <img src={prodata.photo || avater} alt="" />
                    </div>
                  </div>
                </div>
              );
            }
          })}

          {/* --------------------------------------end------------ */}
        </div>
        <div className="Sender">
          <div className="SenD">
            <button type="submit" onClick={(e) => sendMessage(e)}>
              <IoIosSend />
            </button>
          </div>
          <div className="input">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
