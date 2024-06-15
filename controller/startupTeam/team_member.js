const Team_member = require('../../model/Team_member.js');
const team_member = async (req, res) => {
    const{mail} = req.params;
    if(mail)  
    {
        const {name, number, designation } = req.body;
        try
        {
            const result = await Team_member(name, number, designation, mail);
            res.status(200).json({result});
            // res.send("working");
         }
        catch (esrr)
        {
            
            res.status(404).json({error: 'Internal Server Error', err: err});
        }
    }
    else 
    {
		res.status(401).json({authentication: 'Please enter Mail ID properly!'})
	}
}

module.exports = team_member;