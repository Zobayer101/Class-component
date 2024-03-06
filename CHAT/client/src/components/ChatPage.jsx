import avater from "../assets/img/profile.png";
import { IoMdCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { Context } from "../App";
import { io } from "socket.io-client";

 
const ChatPage = () => {
  const { toggle, setToggle } = useContext(Context);
  useEffect(() => {
    let url = "http://localhost:3300";
    const socket = io(url);
    socket.on("connect", () => {
     console.log(socket.id)
    });
    socket.on("serverSend", (msg) => {
      console.log(msg);
    });
    socket.emit("ClientSend","I am come from client side")
    return () => {
      socket.disconnect()
    }
  }, []);
  
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
              <img src={avater} alt="" />
            </div>
            <div className="namePaticipator">
              <p>Zobayer</p>
            </div>
          </div>
          <div className="Hfre">
            <IoMdCall />
            <FaVideo />
            <HiDotsHorizontal />
          </div>
        </div>

        <div className="MainChat">
          <div className="Pphoto">
            <img src={avater} alt="" />
          </div>
          <div className="DateStart">
            <p>2 feb 2020</p>
          </div>
          <div className="ProName">
            <h3>Habib</h3>
          </div>

          {/* ************************************* Sender message********************************** */}
          <div className="coVerSender">
            <div className="senderCont">
              <div className="Simg">
                <img src={avater} alt="" />
              </div>
              <div className="Text">
                <p>
                  Hi and well come agen Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illo dolores, fugiat sit architecto nihil,
                  et consectetur rerum molestias eaque odio dignissimos corrupti
                  minus officiis ea error sequi est suscipit debitis.
                </p>
              </div>
            </div>
          </div>
          {/* ******************************** Reciver message ************************************* */}
          <div className="CoverRicvier">
            <div className="reciverCon">
              <div className="Text">
                <p>
                  Hi and well come agen Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Mollitia asperiores ipsam laboriosam,
                  provident illo quisquam alias officiis ex veritatis, quam
                  tempora tempore aliquam nostrum est nam excepturi maxime totam
                  ducimus.
                </p>
              </div>
              <div className="Simg">
                <img src={avater} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Sender">
          <div className="SenD">
            <button>
              <IoIosSend />
            </button>
          </div>
          <div className="input">
            <input type="text" autoComplete="off" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
