import { useContext } from "react";
import avater from "../assets/img/profile.png";
import { Context } from "../App";
import useFecth from "../lib/useFecth";
import PostData from "../lib/PostData";



const ChatList = () => {
  const {
    toggle,
    setToggle,
    list,
    setList,
   
    setMessage,
    setProdata,
  
  } = useContext(Context);
  let url = "http://localhost:3300/route/api/conversation/list/read";
  let urlx = "http://localhost:3300/route/api/create/message/start";

  useFecth(url, setList);

  const SendData = async (ID) => PostData(urlx, ID, setMessage, setProdata);

  if (!list) return <h1>Loading...</h1>;
  
  return (
    <div>
      <div className="Paticipator">
        <div className="header">
          <div
            onClick={() => setToggle(!toggle)}
            className={toggle ? "Menu New" : "Menu"}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div className="logo">
            <h3>Always</h3>
            <input type="search" />
          </div>
        </div>
        <div className="allPeople">
          {list.data.map((value, index) => {
            return (
              <div
                onClick={() => {SendData(value._id),setToggle(!toggle)} }
                className="PeopleCard"
                key={index}
              >
                <div className="img">
                  <img src={value.photo || avater} alt="" />
                </div>
                <div className="Pname">
                  <p>{value.fname}</p>
                </div>

                <div className="Date">
                  <p>{value.barth}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default  ChatList;
