const About = require("../../model/About");

const about = async (req, res) => {
    try {
        const { about_us } = req.body;

        // Call the function to insert the new award into the database
        const result = await About(about_us);

        // Send the result back to the client
        res.send(result);
    } catch (err) {
        // Send an error response
        res.status(400).send(err);
    }
};

module.exports = about;
