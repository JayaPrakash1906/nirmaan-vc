const nodemailer = require("nodemailer");
const ApprovalRequest = async(req, res) => {
    const {college_data, college_department, resume_url, resume_year, resume_name} = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "prasathnarayanan6@gmail.com",
            pass: "jons wyxl rwcc ttux"
        },
    });
    try
    {
        const info = await transporter.sendMail({
            from: '"Prasath" prasathnarayanan6@gmail.com',
            to: "prasathnarayanan6@gmail.com, jayaprakashtrk8@gmail.com",
            subject: "TRAKTOR - Approval Request for Resume" + resume_name, 
            text: "Dear mam, Please approve for the following resume for internship " + resume_url, 
            // html: "<b>Thank You!</b>", 
          });
          res.status(200).json(info);
    }
    catch(err)
    {
        res.status(200).json(err);
    }
}
module.exports = ApprovalRequest