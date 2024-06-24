const client = require('../utils/conn');
const Raiserequest = async(email, type_of_request, description) => {
    return new Promise((reject, resolve) => {
        client.query("INSERT INTO raise_request(email, type_of_request, description) VALUES($1, $2, $3)",[ email, type_of_request, description], (err, result)=> {
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
module.exports = Raiserequest