const fs = require('fs');
const PdfDocument = require('../models/PdfDocument');

const pdfdocument = async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    
    const fileBuffer = fs.readFileSync(file.path);

    
    const fileId = await PdfDocument.create(file.originalname, fileBuffer);

    
    fs.unlinkSync(file.path);

    res.send(`File uploaded successfully with ID: ${fileId}`);
  } catch (err) {
    console.error('Error uploading file:', err);
    res.status(500).send('Error uploading file.');
  }
};

module.exports = pdfdocument;
