const {SendMessageModel} = require("../../model/Messages")
const AddMessage = async(req, res) => {
    try 
    {
        const {message_id, sender_id, message, receiver_id} = req.body;
        const result = await SendMessageModel(message_id, sender_id, message, receiver_id);
        res.send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
const ViewMessage = async() => {
      
}
module.exports = {AddMessage, ViewMessage}