const jobModel = require("../../model/jobModel")
const job = async(req, res) => {
    try 
    {
        const {role, duration, jobtype, remuneration, requirements, description} = req.body;
        const result = await jobModel(role, duration, jobtype, remuneration, requirements, description);
        res.send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
module.exports = job