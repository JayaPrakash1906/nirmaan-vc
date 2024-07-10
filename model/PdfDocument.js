const express = require('express');
const multer = require('multer');
const pdfdocument = require('../controllers/pdfdocument');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), pdfdocument);

module.exports = router;
   
