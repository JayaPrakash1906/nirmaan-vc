const NewAward = require("../../model/Newaward");

const newaward = async (req, res) => {
    try {
        const { awardname, awardorg, prizemoney, awarddate, designation } = req.body;

        // Call the function to insert the new award into the database
        const result = await NewAward(awardname, awardorg, prizemoney, awarddate, designation);

        // Send the result back to the client
        res.send(result);
    } catch (err) {
        // Send an error response
        res.status(400).send(err);
    }
};

module.exports = newaward;
