
//extarnal import
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();


//intarnal import
const routes = require('./server/routes/routes.js');
const Connect = require('./server/database/connect.js');

dotenv.config();

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '20mb' }));

const PORT = process.env.PORT || 8800;

app.use('/route', routes);
 
Connect();

app.use((error, req, res, next) => {
    if (error) {
        res.status(409).json({ msg: error.message });
    }else{
        res.status(409).json({ msg: 'thsi is a server side error' });
    }
})
app.listen(PORT, () => {
    console.log(`server run on http://localhost:${PORT}`);
})
