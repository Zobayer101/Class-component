
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Link: String,
    Times: {
        type: String,
        default:Date.now().toLocaleString(),
    },
})

const LinkDB = mongoose.model('Stor', schema);

module.exports = LinkDB;