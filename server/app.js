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
const bodyParser = require('body-parser');
const Authenticate = require('./utils/Authenticate');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.listen('3003', (err)=> {
    if(err) process.exit(1);
    console.log("working");
})
app.use('/api/v1/', LoginController);
app.use('api/v1/', ForgotRequest)
// app.get('/profile', Authenticate, (req, res) => {
//     res.send('working');
// })
app.use('api/v1/', Profile);
app.use('/api/v1/work', WorkRequestController);
app.use('/api/v1/resume', ResumeController);
app.use('api/v1/resume',GetAllResumeController);
app.use('api/v1/resume',  ResumeUpload);
app.use('api/v1/resume', Resumedata);
app.use('api/v1/resume', ApporvalRequest)
