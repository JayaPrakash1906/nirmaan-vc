const client = require('../utils/conn');

const NewAward = async (awardname, awardorg, prizemoney, awarddate, designation) => {
    return new Promise((resolve, reject) => {
        client.query(
            "INSERT INTO award (name, organisation, money, date, description) VALUES ($1, $2, $3, $4, $5)",
            [awardname, awardorg, prizemoney, awarddate, designation],
            (err, result) => {
                if (err) {
                    reject(err);  psql
                    
                } else {
                    if (result.rowCount > 0) { 
                        resolve({ status: "Data inserted successfully" });
                    } else {
                        resolve({ status: "Not inserted" });
                    }
                }
            }
        );
    });
};

module.exports = NewAward;
