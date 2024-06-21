const client = require('../utils/conn');
const jobModel = async(role, duration, jobtype, remuneration, requirements, description) => {
    return new Promise((reject, resolve) => {
        client.query("INSERT INTO messages_data(role, duration, jobtype, remuneration, reuiremnets, description) VALUES($1, $2, $3, $4, $5, $6)",[role, duration, jobtype, remuneration, requirements, description], (err, result)=> {
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
module.exports = jobModel 