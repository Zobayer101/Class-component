import { useEffect ,useContext} from "react";
import "../assets/css/Admin.css";
import Image from "../assets/img/profile.png";
//import useFecth from "../lib/useFecth";
import Profile from "./Profile";
import { Link, useNavigate } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import { Context } from "../App";

const Admin = () => {

  let navigate = useNavigate();

  let { model, setModel, ID, setID, user, setUser, alldata, setAlldata } =
    useContext(Context);
  // fetch all data
  let TOKEN = localStorage.getItem("TOKEN");
  let url = "http://localhost:3300/route/user/data/api/remove";
  // useFecth("http://localhost:3300/route/api/read",setAlldata);
  useEffect(() => {
    let url = "http://localhost:3300/route/api/read";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        TOKEN,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.data && result.user) {
          setAlldata(result.data);
          setUser(result.user);
        }
        else {
          localStorage.removeItem("TOKEN");
          navigate("/Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate, TOKEN,setUser,setAlldata]);

  let Remove = async (index) => {
    try {
      let res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          TOKEN: TOKEN,
          ID: ID,
        },
      });
      let result = await res.json();
      if (result.data) {
       
        setAlldata((existdata) => {
          return existdata.filter((_, currentIndex) => currentIndex !== index);
        });
      } else {
        // localStorage.removeItem('TOKEN');
        // navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  if (!alldata) return <h2>Loading...</h2>;
  else if (alldata.msg) {
    localStorage.removeItem("TOKEN");
    navigate("/login");
  }

  return (
    <div>
      {model ? <Profile/> : ""}
      <div className="outerAdmin">
        <div className="innerAdmin">
          <div className="header">
            <div className="Message">
              <Link to={"/Chat"}>
                <TiMessages className="fontM" />
              </Link>
            </div>
            <div className="text">
              <h2>Admin Paneal</h2>
            </div>
            <div className="img">
              <img src={user.photo || Image} alt="" />
            </div>
          </div>
          <div className="mainTable">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fname</th>
                  <th>Email</th>
                  <th>Activitive</th>
                </tr>
              </thead>
              <tbody>
                {alldata.map((value, index) => { 
                  return (
                    <tr key={index}>
                      <td className="Pad1">{index + 1}</td>
                      <td className="Pad1">{value.fname}</td>
                      <td className="Pad1">{value.email}</td>
                      <td className="BTN">
                        <button
                          onClick={() => {
                           
                            setModel(!model)
                            setID(value._id);
                          }}
                          className="more"
                        >
                          more
                        </button>
                        <button
                          className="remove"
                          onClick={() => {
                            setID(value._id);
                            Remove(index);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
