//external import
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const CORS = require('cors');
//internal import
const DBconnect = require('./server/database/DBconnect');
const route = require('./server/routes/routes');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit:'10mb'}));
app.use(
  CORS({
    origin: "http://localhost:5173",
  })
);

app.use('/route',route)
//DB connection fun call
DBconnect();



app.listen(PORT, () => {
    console.log(`Server was run http://localhost:${PORT}`);
})