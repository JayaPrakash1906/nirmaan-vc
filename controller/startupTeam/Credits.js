const Credits = async (req, res) => {
    const{credits_name, credits_mail, credits_description} = req.body;
    if(credits_name || credits_mail || credits_description)
    {
        try
        {
        //     const result = await CreditModel(credits_name, credits_mail,credits_description);
        //     res.status(200).json({result });
          res.send("working");
         }
        catch (err)
        {
            
            res.status(404).json({error: 'Internal Server Error', err: err});
        }
    }
    else 
    {
		res.status(401).json({authentication: 'Please enter Name , Mail Id and Description properly!'})
	}
}

module.exports = Credits;