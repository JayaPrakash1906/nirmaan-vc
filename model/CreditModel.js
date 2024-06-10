const client = require('../utils/conn');
const AddCreditsModel = async(credits_name, credits_mail, credits_description) => {
    return new Promise((reject, resolve) => {
        client.query("INSERT INTO credits(credits_name, credits_mail, credits_description) VALUES($1, $2, $3)",[credits_name, credits_mail, credits_description], (err, result)=> {
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
const ViewCreditsModel = async(credits_mail) => {
    return new Promise((reject, resolve) => {
        client.query("SELECT * FROM credits WHERE credits_mail=$1", [credits_mail], (err, result)=>{
            if(err)
            {
                reject(err);
            }
            else
            {
                if(result.rows.length>0)
                {
                    resolve({result})
                }   
                else
                {
                    resolve({status: "Not fetched"})
                }  
            }
        })
    })
}
module.exports = {AddCreditsModel, ViewCreditsModel}  