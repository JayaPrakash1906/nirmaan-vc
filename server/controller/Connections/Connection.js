const AddConnections = async(req, res) => {
    try
    {
        const{startup, contact, email_content} = req.body;
    }
    catch(err)
    {
        console.log(err);
    }
}

const ViewConnections = async(req, res) => {
    try
    {

    }
    catch(err)
    {

    }
}
const EstablishConnection = async(req, res) => {
    try
    {
        // const{name, designation , organization , connect_for, contact_number, email_address} = req.body;
        res.send("working fine");
    }
    catch(err)
    {
        res.send(err);
    }
}
module.exports = {AddConnections, EstablishConnection, ViewConnections};