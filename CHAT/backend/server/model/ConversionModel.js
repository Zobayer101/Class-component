
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    creatorID: {
        type: mongoose.Types.ObjectId,
        ref:'User',
    },
    paticipatorID: {
        type: mongoose.Types.ObjectId,
        ref:'User',
    },
    date: {
        type: String,
        default :new Date().toLocaleString(),
    }
  
}, {
    timestamps:true
})
const Conversation = mongoose.model("Conversation", schema);

module.exports = Conversation;