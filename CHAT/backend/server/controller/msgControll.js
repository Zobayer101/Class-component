//internal import
const Message = require('../model/messageModel');

//socket.io implimantation




exports.message = (socket) => {
 
  
  socket.on(socket.id, (data) => {
    
    if (data.Msg) {
     
      console.log(data);
      
      socket.to().emit("1234", 'data');
    }
  });
  
}

//This is a message save controller
exports.MessageSave = async (req, res) => {
  try {
      
      let { text, conID, RisiveID, SendID } = req.body.ID;
      console.log(SendID)
      let msg = new Message({
          senderID: SendID,
          resiverID: RisiveID,
          conversitionID: conID,
          text:text,
      }) 
      let data = await msg.save(msg);
      console.log(data)
    res.status(200).json({ data:data });
  } catch (error) {
    res.status(409).json({ msg: error.message });
    console.log(error);
  }
};
