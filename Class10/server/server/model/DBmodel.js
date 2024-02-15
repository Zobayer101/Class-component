
const mongoose = require('mongoose');

const schame = new mongoose.Schema({
    photo:String,
})
 
const UserDB = mongoose.model('User', schame);
module.exports = UserDB;
