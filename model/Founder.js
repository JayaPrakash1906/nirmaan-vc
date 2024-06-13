const client = require('../utils/conn');

/**
 * Update a founder's details in the database.
 *
 * @param {string} name - The name of the founder.
 * @param {string} number - The phone number of the founder.
 * @param {string} gender - The gender of the founder.
 * @param {string} studentid - The student ID of the founder.
 * @param {string} linkedin - The LinkedIn profile URL of the founder.
 * @param {string} role - The role of the founder.
 * @param {string} mail - The email of the founder (used as identifier).
 * @returns {Promise<Object>} A promise that resolves to the update status.
 */
const Founder = async (name, number, gender, studentid, linkedin, role, mail) => {
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE founder_data 
            SET name = $1, number = $2, gender = $3, student_id = $4, linkedin = $5, role = $6 
            WHERE email = $7
        `;
        const values = [name, number, gender, studentid, linkedin, role, mail];

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

module.exports = Founder;
