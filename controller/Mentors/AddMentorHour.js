const AddMentorHourModel = require("../../model/AddMentorHourModel")
const AddMentorHour = async(req, res) => {
    try 
    {
        const {startup,mentor,date,time,hour,min,other_details} = req.body;
        const result = await AddMentorHourModel(startup, mentor, date, time, hour, min, other_details);
        res.send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
module.exports = AddMentorHour