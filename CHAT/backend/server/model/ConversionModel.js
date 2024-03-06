
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    creatorID: {
        type: mongoose.Types.ObjectId,
        ref:User,
    },
    paticipatorID: {
        type: mongoose.Types.ObjectId,
        ref:User,
    },
  
}, {
    timestamps:true
})
const Conversation = mongoose.model("Conversation", schema);

module.export = Conversation;