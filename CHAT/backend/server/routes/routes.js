//extranal import
const express = require("express");
const route = express.Router();

//intralnal import
const controll = require("../controller/controll");
const msgControll = require("../controller/msgControll");
const uservalid = require("../middleware/uservalidate");
const Gard = require("../middleware/Gared");

//----------------------------------------API--------------------------

//Data create or signup api
route.post("/api/save", uservalid.validUser, controll.CreateData);

//Login user api
route.post("/login/api/user", controll.LoginUser);

//otp varyfiy api
route.post("/otp/api/chack", controll.varifiy);

//Start Conver sation or create a new conversation ---
route.post("/api/create/message/start", Gard, controll.createmessage);

//massage save api
route.post("/api/new/message/save",Gard,msgControll.MessageSave);

//all user data read api
route.get("/api/read", Gard, controll.ReadData);

// One user read data api
route.get("/one/user/api/read", Gard, controll.OneUserData);

//Chat list data read
route.get("/api/conversation/list/read", Gard, controll.ListConversationData);

//upddate user data api
route.put("/user/data/api/update", Gard, controll.updateUser);

//Remove user data api
route.delete("/user/data/api/remove", Gard, controll.RemoveData);

module.exports = route;
