const client = require('../utils/conn');

/**
 * Update a Team_member's details in the database.
 *
 * @param {string} name - The name of the Team_member.
 * @param {string} number - The phone number of the Team_member.
 * @param {string} designation - The designation of the Team_member.
 * @param {string} mail - The email of the Team_member (used as identifier).
 * @returns {Promise<Object>} A promise that resolves to the update status.
 */
const Team_member = async (name, number, designation, mail) => {
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE team_members 
            SET name = $1, number = $2, designation = $3
            WHERE email = $4
        `;
        const values = [name, number, designation, mail];

        client.query(query, values, (err, result) => {
            if (err) {
                return reject(err);  // Reject the promise if there is an error
            }

            if (result.rowCount > 0) {  // Check if any row was updated
                resolve({ status: "Success", email: mail });
            } else {
                resolve({ Email_status: "Email does not exist! Please provide a valid email address" });
            }
        });
    });
};

module.exports = Team_member;
