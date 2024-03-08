//extrnal imporet
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const CookeParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const socketio = require('socket.io');

//intral import
const route = require("./server/routes/routes");
const DBconnect = require("./server/database/DBconnect");


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

const clientdata = (data) => {
  if (data.Msg) {

    io.to(data.throw).emit("receve", data);
    console.log(data)
  }
}
const DisCon = () => {
  console.log('user disconnect')
}

io.on("connection", (socket) => {
  console.log("connect successfull");
  socket.on(socket.id, clientdata)
  socket.on("disconnect",DisCon);
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

