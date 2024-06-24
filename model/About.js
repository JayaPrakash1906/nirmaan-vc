const client = require('../utils/conn');

const About = async (about_us) => {
    return new Promise((resolve, reject) => {
        client.query(
            "INSERT INTO About (about_us) VALUES ($1)",
            [about_us],
            (err, result) => {
                if (err) {
                    reject(err);
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

module.exports = About;
