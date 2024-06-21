const client = require('../utils/conn');
const AddMentorHourModel = async(startup, mentor, date, time, hour, min, other_details) => {
    return new Promise((reject, resolve) => {
        client.query("INSERT INTO messages_data(message_id, sender_id, message, receiver_id) VALUES($1, $2, $3, $4)",[startup, mentor, date, time, hour, min, other_details], (err, result)=> {
            if(err)
            {
                reject(err);
            }
            else
            {
                 if(result)
                {
                    resolve({status: "Data inserted successfuly"});
                }
                else
                {
                    resolve({status: "Not inserted"});
                }
            }
        })
    })
}
module.exports = AddMentorHourModel  