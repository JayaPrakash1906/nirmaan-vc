const Raiserequest = require("../../model/Raiserequest")
const raiserequest = async(req, res) => {
    try 
    {
        const {email, type_of_request, description} = req.body;
        const result = await Raiserequest(email, type_of_request, description);
        res.send(result);

    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
module.exports = raiserequest