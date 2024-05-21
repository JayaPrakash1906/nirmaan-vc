const LoginLogs = require("../../components/LoginLogs");

const Profile = async(req, res) => {
        try
        {
            const{email, user_role, time, sessionId} = req.body;
            const result = await LoginLogs(email, user_role, time, sessionId);
            res.send(result);
        } 
        catch(err)
        {
            throw err;
        }   
}
module.exports = Profile;