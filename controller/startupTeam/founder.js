const Founder = require('../../model/Founder');
const founder = async (req, res) => {
    const{mail} = req.params;
    if(mail)  
    {
        const {name, number, gender, studentid, linkedin, role } = req.body;
        try
        {
            const result = await Founder(name, number, gender, studentid, linkedin, role, mail);
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

module.exports = founder;
