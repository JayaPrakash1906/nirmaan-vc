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
router.post('/login', LoginController);
router.post('/work-request', WorkController);
router.get('/download/:filename', ResumeController);
router.get('/getdata', GetAllResumeController);
router.post('/resumeupload', ResumeUpload );
router.get('/resume-fetch/:page_data/:page_number', Resumedata)
router.post('/resume-send', Authenticate, ApprovalRequest)
module.exports = router;