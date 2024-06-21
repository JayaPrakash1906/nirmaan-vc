const express = require('express');
const LoginController= require('./routes/route');
const WorkRequestController = require('./routes/route');
const ResumeController = require('./routes/route');
const GetAllResumeController = require('./routes/route');
const ResumeUpload = require('./routes/route');
const Resumedata = require('./routes/route');
const ApporvalRequest = require('./routes/route');
const ForgotRequest = require('./routes/route');
const Profile = require('./routes/route');
const DeleteResume = require('./routes/route');
const AddMentor = require('./routes/route');
const bodyParser = require('body-parser');
const Settings = require('./routes/route')
const AddMessage = require('./routes/route');
const jobModel = require('./routes/route');
const AddMentorHourModel = require('./routes/route');
const ViewMessage = require('./routes/route');
const Credits = require('./routes/route');
const EstablishConnection = require('./routes/route');
const Authenticate = require('./utils/Authenticate');
const cors = require('cors');
const Founder = require('./routes/route');
const About = require('./routes/route');
const Team_member = require('./routes/route');
const newaward = require('./routes/route');
const PdfDocument = require('./routes/route');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.listen('3005', (err)=> {
    if(err) process.exit(1);
    console.log("working");
})
app.use('/api/v1/', LoginController);
app.use('api/v1/', ForgotRequest)
app.get('/profile', (req, res) => {
    res.status(200).json("hello");
})
app.use('api/v1/', Profile);
app.use('/api/v1/work', WorkRequestController);
app.use('/api/v1/resume', ResumeController);
app.use('api/v1/resume',GetAllResumeController);
app.use('api/v1/resume',  ResumeUpload);
app.use('api/v1/resume', Resumedata);
app.use('api/v1/resume', ApporvalRequest);
app.use('api/v1/resume', DeleteResume);
app.use('api/v1/', AddMentor);
app.use('api/v1/',Profile);
app.use('api/v1/', Settings);
app.use('api/v1/', AddMessage);
app.use('api/v1/', ViewMessage);
app.use('api/v1/', EstablishConnection);
app.use('api/v1/',Credits);
app.use('api/v1/',Founder);
app.use('api/v1/',Team_member);
app.use('api/v1/',PdfDocument);
app.use('api/v1/', newaward);
app.use('api/v1/', jobModel);
app.use('api/v1/', AddMentorHourModel);
module.exports = app;


