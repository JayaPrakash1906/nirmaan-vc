const Newaward = require("../../model/Newaward")
const newaward = async(req, res) => {
    try 
    {
        const {awardname, awardorg, prizemoney, awarddate, designation} = req.body;
        const result = await Newaward(awardname, awardorg, prizemoney, awarddate, designation);
        res.send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
module.exports = newaward