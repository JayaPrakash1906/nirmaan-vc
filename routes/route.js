const express = require('express');
const router = express.Router();
const Authenticate = require('../utils/Authenticate.js');
const LoginController = require('../controller/LoginController/LoginController');
const WorkController = require('../controller/WorkRequestController/WorkRequestController');
const ResumeController = require('../controller/Resume/ResumeController.js');
const GetAllResumeController = require('../controller/Resume/GetAllResumeController.js');
const ResumeUpload = require('../controller/Resume/ResumeUpload.js');
const Resumedata = require('../controller/Resume/Resumedata.js');
const ApprovalRequest  = require('../controller/Resume/ApporvalRequest.js');
const ForgotRequest = require('../controller/LoginController/ForgotRequest.js');
const Profile = require('../controller/Profile/Profile.js');
const DeleteResume = require('../controller/Resume/DeleteResume.js');
const AddMentor = require('../controller/Mentors/AddMentor.js');
const Settings = require('../controller/Settings/Settings.js');
const {AddMessage, ViewMessage} = require('../controller/Messages/Messages.js');
const {EstablishConnection} = require("../controller/Connections/Connection.js");
const Credits = require('../controller/startupTeam/Credits.js');
const Founder = require('../controller/startupTeam/founder.js');
router.post('/login', LoginController);
router.post('/send-message', AddMessage);
router.post('/forgot-password', ForgotRequest)
router.post('/work-request', WorkController);
router.get('/download/:filename', ResumeController);
router.get('/getdata', GetAllResumeController);
router.post('/resumeupload', ResumeUpload );
router.get('/resume-fetch/:page_data/:page_number', Resumedata);
router.post('/resume-send', ApprovalRequest);
router.post('/profile', Profile);
router.delete('/delete-resume/:id', DeleteResume);
router.post('/mentor/add', AddMentor);
router.get('/profile-Data/:mail', Profile);
router.post('/add-sector', Settings)
router.get('/view-message', ViewMessage);
router.post('/credits-apply',Credits);
router.put('/founder-update/:mail',Founder);
router.post('/establish-connections', EstablishConnection)
module.exports = router;