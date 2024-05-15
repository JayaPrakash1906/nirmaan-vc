const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const Authenticate = (req, res, next) => {
    const token = req.header('Authorization');

    console.log("Unextracted Token: "+ token);
    if(!token)
    {
        return res.status(401).json({message: "Unauthorized"});
    }
    const extractedToken = token.split(' ')[1];
    console.log('Actual Token' + ' ' + extractedToken);
    try
    {
        //verify and validation
        // const decoded = jwt.verify(extractedToken, '7df19a06b64a59a7287e5959f315f61fd79ca7fa0a83e8a8c917d37bcf1cc212da5a2686fdd0784e6c1d90e82930ab0bb5adc193eb1ab491a8173b07c4af9a36')
        const decoded = jwt.verify(extractedToken, process.env.ACCESS_TOKEN_SECRET)
        req.user_mail = decoded.user_mail;
        next();
    }
    catch(err)
    {
        res.status(401).json({message: "Invalid Token!"})
    }
}
module.exports = Authenticate;