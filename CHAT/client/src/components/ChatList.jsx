import { useContext } from "react";
import avater from "../assets/img/profile.png";
import { Context } from "../App";


const ChatList = () => {
    const { toggle, setToggle } = useContext(Context);
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
        
          
              <div className="PeopleCard" >
                <div className="img">
                  <img src={avater} alt="" />
                </div>
                <div className="Pname">
                  <p>Jasica</p>
                </div>

                <div className="Date">
                  <p>20/87</p>
                </div>
              </div>
           
          </div>
      </div>
    </div>
  );
};
export default ChatList;
