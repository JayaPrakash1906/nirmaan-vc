const client = require('../utils/conn')
const ProfileModel = async(mail) => {
    return new Promise((reject, resolve)=>{
        client.query("SELECT * FROM user_data WHERE user_mail=$1",[mail], (err, result)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                // resolve({data : result})
                if(result.rows.length > 0)
                {
                    resolve({mail});
                }
                else
                {
                    resolve({data : "Not found"});
                }
            }
        })
    })
}
module.exports = ProfileModel;