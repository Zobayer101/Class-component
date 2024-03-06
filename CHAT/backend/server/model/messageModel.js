
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  senderID: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    },
    resiverID: {
        type: mongoose.Types.ObjectId,
        ref:'User',
    },
    conversitionID: {
        type: mongoose.Types.ObjectId,
        ref:'Conversation',
    },
    text: String,
    photo: String,
    date: {
        type: String,
        default: new Date().toLocaleString(),
    }
});
const Message = mongoose.model("Message", schema);
module.exports = Message;
