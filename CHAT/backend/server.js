//extrnal imporet
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const CookeParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");

//intral import
const route = require("./server/routes/routes");
const DBconnect = require("./server/database/DBconnect");
const Message = require("./server/model/messageModel");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8800;
const server = http.createServer(app);
//socket init

//all parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "20mb" }));
app.use(CookeParser());
app.use(cors({ origin: "http://localhost:5173" }));

const io = new socketio.Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
let Countuner = {};

const clientdata = async (data) => {
  Countuner[data.SendID] = data.throw;

  if (data.Msg) {
    let SID = Countuner[data.RisiveID];
    let msg = new Message({
      senderID: data.SendID,
      resiverID: data.RisiveID,
      conversitionID: data.conID,
      text: data.Msg,
    });
    await msg.save(msg);

    if (SID) {
      io.to(SID).emit("receve", data);
    }
  }
};

io.on("connection", (socket) => {
  console.log("connect successfull");
  socket.on(socket.id, clientdata);
  socket.on("disconnect", () => {
    Object.keys(Countuner).forEach((value) => {
      if (Countuner[value] == socketio.id) {
        delete Countuner[value];
      }
    });

    console.log("user disconnect");
  });
});

app.use("/route", route);
//Data base connection
DBconnect();

//error haldler
app.use((error, req, res, next) => {
  if (error) {
    res.status(409).json({
      msg: error,
    });
    console.log(error.messge);
  } else {
    res.status(500).json({
      meg: "server side error",
    });
    console.log("this is a server side error");
  }
});

server.listen(PORT, () => {
  console.log(`Server was run http://localhost:${PORT}`);
});
