const client = require('../utils/conn');
const SendMessageModel = async(message_id, sender_id, message, receiver_id) => {
    return new Promise((reject, resolve) => {
        client.query("INSERT INTO messages_data(message_id, sender_id, message, receiver_id) VALUES($1, $2, $3, $4)",[message_id, sender_id, message, receiver_id], (err, result)=> {
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
const ViewMessageModel = () => {
    return new Promise((reject, resolve) => {
        resolve({data: "data viewed"})
    })
}
module.exports = {SendMessageModel, ViewMessageModel}  