
const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.DBURL);
        console.log(`DB connect on ${con.connection.host} `);
    } catch (error) {
        console.log('Daatabase connection faild');
        process.exit(1);
    }
}


module.exports = ConnectDB;