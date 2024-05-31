const {SendMessageModel} = require("../../model/Messages")
const AddMessage = async(req, res) => {
    try 
    {
        const result = await SendMessageModel();
        res.status(200).json({result});
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
const ViewMessage = async() => {
      
}
module.exports = {AddMessage, ViewMessage}