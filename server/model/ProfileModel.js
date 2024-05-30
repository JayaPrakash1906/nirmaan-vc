const client = require('../utils/conn')
const ProfileModel = () => {
    return new Promise((reject, resolve)=>{
        client.query("SELECT * FROM user_data", (err, result)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve({data : result})
            }
        })
    })
}
module.exports = ProfileModel;